function buildRequest(startRow, rowsCount) {
  return {
    dataRequest: [
      {
        requestContext: {
          reportContext: {
            reportId: "0bc00d4b-eb33-4888-9b26-d1e66db1c041",
            pageId: "",
            mode: 1,
            componentId: "cd-qhndim5muc",
            displayType: "simple-table"
          }
        },
        datasetSpec: {
          dataset: [
            {
              datasourceId: "fe46f16f-0232-45bd-97d8-a13fd71814af",
              revisionNumber: 0,
              parameterOverrides: []
            }
          ],
          queryFields: [
            {
              name: "qt_s28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            },
            {
              name: "qt_t28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2026734955_" }
            },
            {
              name: "qt_v28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1965687765_" }
            },
            {
              name: "qt_u28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1979529626_" }
            },
            {
              name: "qt_z6ryu7enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1406873644_" }
            },
            {
              name: "qt_w28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_151628018_" }
            },
            {
              name: "qt_prijz7enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n499969789_" }
            },
            {
              name: "qt_x28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_79847297_" }
            },
            {
              name: "qt_y28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2034639593_" }
            },
            {
              name: "qt_z28t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1103232381_" }
            },
            {
              name: "qt_328t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1205444233_" }
            },
            {
              name: "qt_028t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_391170306_" }
            },
            {
              name: "qt_128t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1209890255_" }
            },
            {
              name: "qt_228t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n902973553_" }
            },
            {
              name: "qt_ds9wl7enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_168429811_" }
            },
            {
              name: "qt_428t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1479421668_" }
            },
            {
              name: "qt_528t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1936837050_" }
            }
          ],
          sortData: [
            {
              sortColumn: {
                name: "qt_s28t33enuc",
                datasetNs: "d0",
                tableNs: "t0",
                dataTransformation: { sourceFieldName: "_2122702_" }
              },
              sortDir: 1
            }
          ],
          includeRowsCount: true,
          relatedDimensionMask: { addDisplay: false, addUniqueId: false, addLatLong: false },
          paginateInfo: { startRow, rowsCount },
          filters: [],
          features: [],
          dateRanges: [],
          contextNsCount: 1,
          dateRangeDimensions: [
            {
              name: "qt_yu9t33enuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            }
          ],
          calculatedField: [],
          needGeocoding: false,
          geoFieldMask: [],
          geoVertices: 100000
        }
      }
    ]
  };
}

let colNames = [
  "Date",
  "Catalog Entry",
  "Location",
  "Time of day",
  "Weather",
  "Incident",
  "Witness Reactions",
  "Shape",
  "Size meters",
  "Trajectory (Lift / Propulsion)",
  "Nature of Phenomenon",
  "Light Emissions",
  "Materials Recovered",
  "Consciousness Effects",
  "Physiological Effects",
  "Cultural Effects",
  "Animal Reactions"
];

module.exports = {
  buildRequest,
  colNames
};
