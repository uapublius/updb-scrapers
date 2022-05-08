function buildRequest(startRow, rowsCount) {
  return {
    dataRequest: [
      {
        requestContext: {
          reportContext: {
            reportId: "42ee9138-68e5-4c84-8c2e-499dc5c83f69",
            pageId: "",
            mode: 1,
            componentId: "cd-qhndim5muc",
            displayType: "simple-table"
          }
        },
        datasetSpec: {
          dataset: [
            {
              datasourceId: "c7e38a8b-8876-426e-ac72-9bf4bad33198",
              revisionNumber: 0,
              parameterOverrides: []
            }
          ],
          queryFields: [
            {
              name: "qt_96kh9h5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            },
            {
              name: "qt_a7kh9h5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2026734955_" }
            },
            {
              name: "qt_h4o9ak5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1056923998_" }
            },
            {
              name: "qt_b7kh9h5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1965687765_" }
            },
            {
              name: "qt_d7kh9h5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_151628018_" }
            },
            {
              name: "qt_e7kh9h5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_79847297_" }
            },
            {
              name: "qt_f7kh9h5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_842479414_" }
            },
            {
              name: "qt_zbr2lj5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1103232381_" }
            },
            {
              name: "qt_l9y7pj5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_391170306_" }
            },
            {
              name: "qt_ylb2kk5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_80074991_" }
            },
            {
              name: "qt_rcc0wj5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n902973553_" }
            },
            {
              name: "qt_dum30j5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1205444233_" }
            },
            {
              name: "qt_rvf65j5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1704131219_" }
            },
            {
              name: "qt_wn9lfl5muc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1936837050_" }
            }
          ],
          sortData: [
            {
              sortColumn: {
                name: "qt_96kh9h5muc",
                datasetNs: "d0",
                tableNs: "t0",
                dataTransformation: { sourceFieldName: "_2122702_" }
              },
              sortDir: 0
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
              name: "qt_8ylh9h5muc",
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
  "Local Time",
  "Location",
  "Incident",
  "Shape",
  "Size (Meters)",
  "Trajectory (Lift / Propulsion)"
];

module.exports = {
  buildRequest,
  colNames
};
