import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import * as go from 'gojs';
import { DataSyncService, DiagramComponent, PaletteComponent } from 'gojs-angular';
import * as _ from 'lodash';

import { Event } from '../models/event';

@Component({
  selector: 'app-my-event',
  templateUrl: './my-event.component.html',
  styleUrls: ['./my-event.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MyEventComponent implements OnInit, AfterViewInit {

  event: Event;
  guests: any;
  guestList: any;
  model: any;

  constructor(private cdr: ChangeDetectorRef) { }

  @ViewChild('myDiagram', { static: true }) public myDiagramComponent: DiagramComponent;
  @ViewChild('myPalette', { static: true }) public myPaletteComponent: PaletteComponent;

  public diagramNodeData: Array<go.ObjectData> = [
    { key: 'Alpha', text: 'Node Alpha', color: 'lightblue' },
    { key: 'Beta', text: 'Node Beta', color: 'orange' },
    { key: 'Gamma', text: 'Node Gamma', color: 'lightgreen' },
    { key: 'Delta', text: 'Node Delta', color: 'pink' }
  ];
  public diagramLinkData: Array<go.ObjectData> = [
    /*{ key: -1, from: 'Alpha', to: 'Beta', fromPort: 'r', toPort: 'l' },
    { key: -2, from: 'Alpha', to: 'Gamma', fromPort: 'b', toPort: 't' },
    { key: -3, from: 'Beta', to: 'Beta' },
    { key: -4, from: 'Gamma', to: 'Delta', fromPort: 'r', toPort: 'l' },
    { key: -5, from: 'Delta', to: 'Alpha', fromPort: 't', toPort: 'r' }*/
  ];
  public diagramDivClassName = 'myDiagramDiv';
  public diagramModelData = { prop: 'value' };

  public skipsDiagramUpdate = false;

  public paletteNodeData: Array<go.ObjectData> = [
    { key: 'PaletteNode1', color: 'firebrick' },
    { key: 'PaletteNode2', color: 'blueviolet' }
  ];
  public paletteLinkData: Array<go.ObjectData> = [
    {  }
  ];
  public paletteModelData = { prop: 'val' };
  public paletteDivClassName = 'myPaletteDiv';
  public skipsPaletteUpdate = false;

  // Overview Component testing
  public oDivClassName = 'myOverviewDiv';
  public observedDiagram = null;

  // currently selected node; for inspector
  public selectedNode: go.Node | null = null;

  // initialize diagram / templates
  public initDiagram(): go.Diagram {

    const $ = go.GraphObject.make;
    const dia = $(go.Diagram, {
      'undoManager.isEnabled': true,
      model: $(go.GraphLinksModel,
        {
          linkToPortIdProperty: 'toPort',
          linkFromPortIdProperty: 'fromPort',
          linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
        }
      ),

      ModelChanged(e) {
        if (e.isTransactionFinished) {
          document.getElementById('savedModel').textContent = dia.model.toJson();
        }
      }
    });

    dia.commandHandler.archetypeGroupData = { key: 'Group', isGroup: true };

    function makePort(id: string, spot: go.Spot) {
      return $(go.Shape, 'Circle',
        {
          opacity: .5,
          fill: 'gray', strokeWidth: 0, desiredSize: new go.Size(8, 8),
          portId: id, alignment: spot,
          fromLinkable: true, toLinkable: true
        }
      );
    }

    function conv(o) {
      return o.diagram.selection.count > 1;
    }

    // define the Node template
    dia.nodeTemplate =
      $(go.Node, 'Spot',
        {
          contextMenu:
            $('ContextMenu',
              $('ContextMenuButton',
                $(go.TextBlock, 'Group'),
                { click(e, obj) { e.diagram.commandHandler.groupSelection(); } },
                new go.Binding('visible', '', conv).ofObject())
            )
        },
        $(go.Panel, 'Auto',
          $(go.Shape, 'RoundedRectangle', { stroke: null },
            new go.Binding('fill', 'color')
          ),
          $(go.TextBlock, { margin: 8 },
            new go.Binding('text'))
        ),
        // Ports
        makePort('t', go.Spot.TopCenter),
        makePort('l', go.Spot.Left),
        makePort('r', go.Spot.Right),
        makePort('b', go.Spot.BottomCenter)
      );

    return dia;
  }

  // When the diagram model changes, update app data to reflect those changes
  public diagramModelChange = function(changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsDiagramUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Diagram's undoManager history
    this.skipsDiagramUpdate = true;

    this.diagramNodeData = DataSyncService.syncNodeData(changes, this.diagramNodeData);
    this.diagramLinkData = DataSyncService.syncLinkData(changes, this.diagramLinkData);
    this.diagramModelData = DataSyncService.syncModelData(changes, this.diagramModelData);
  };

  public initPalette(): go.Palette {
    const $ = go.GraphObject.make;
    const palette = $(go.Palette);

    // define the Node template
    palette.nodeTemplate =
      $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle',
          {
            stroke: null
          },
          new go.Binding('fill', 'color')
        ),
        $(go.TextBlock, { margin: 8 },
          new go.Binding('text', 'key'))
      );

    palette.model = $(go.GraphLinksModel,
      {
        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      });

    return palette;
  }
  public paletteModelChange = function(changes: go.IncrementalData) {
    // when setting state here, be sure to set skipsPaletteUpdate: true since GoJS already has this update
    // (since this is a GoJS model changed listener event function)
    // this way, we don't log an unneeded transaction in the Palette's undoManager history
    this.skipsPaletteUpdate = true;

    this.paletteNodeData = DataSyncService.syncNodeData(changes, this.paletteNodeData);
    this.paletteLinkData = DataSyncService.syncLinkData(changes, this.paletteLinkData);
    this.paletteModelData = DataSyncService.syncModelData(changes, this.paletteModelData);
  };

  public initOverview(): go.Overview {
    const $ = go.GraphObject.make;
    return $(go.Overview);
  }

  ngOnInit(): void {
    this.event = JSON.parse(localStorage.getItem('event'));
    console.log(this.event);
  }

  public ngAfterViewInit() {

    if (this.observedDiagram) {
      return;
    }
    this.observedDiagram = this.myDiagramComponent.diagram;
    this.cdr.detectChanges(); // IMPORTANT: without this, Angular will throw ExpressionChangedAfterItHasBeenCheckedError (dev mode only)

    const appComp: MyEventComponent = this;
    // listener for inspector
    this.myDiagramComponent.diagram.addDiagramListener('ChangedSelection', (e) => {
      if (e.diagram.selection.count === 0) {
        appComp.selectedNode = null;
      }
      const node = e.diagram.selection.first();
      if (node instanceof go.Node) {
        appComp.selectedNode = node;
      } else {
        appComp.selectedNode = null;
      }
    });

  } // end ngAfterViewInit


  public handleInspectorChange(newNodeData) {
    const key = newNodeData.key;
    // find the entry in nodeDataArray with this key, replace it with newNodeData
    let index = null;
    for (let i = 0; i < this.diagramNodeData.length; i++) {
      const entry = this.diagramNodeData[i];
      if (entry.key && entry.key === key) {
        index = i;
      }
    }

    if (index >= 0) {
      // here, we set skipsDiagramUpdate to false, since GoJS does not yet have this update
      this.skipsDiagramUpdate = false;
      this.diagramNodeData[index] = _.cloneDeep(newNodeData);
    }
  }

  replaceModel(): void {}

  import(): void {}
}
