function buildRequest(startRow, rowsCount) {
  return {
    dataRequest: [
      {
        requestContext: {
          reportContext: {
            reportId: "6f8a5633-da12-440f-851f-97579936372a",
            pageId: "39670176",
            mode: 1,
            componentId: "cd-c6huws4ztc",
            displayType: "simple-table"
          }
        },
        datasetSpec: {
          dataset: [
            {
              datasourceId: "a4ffb75e-b316-4566-81f5-aeb0f835ea5f",
              revisionNumber: 0,
              parameterOverrides: []
            }
          ],
          queryFields: [
            {
              name: "qt_g4cq0l19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n2075488277_" }
            },
            {
              name: "qt_e4cq0l19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            },
            {
              name: "qt_nlv82n19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1965687765_" }
            },
            {
              name: "qt_h4cq0l19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_80204913_" }
            },
            {
              name: "qt_i4cq0l19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1672482954_" }
            },
            {
              name: "qt_f4cq0l19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_151628018_" }
            },
            {
              name: "qt_7ywujn19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n713693765_" }
            },
            {
              name: "qt_jnooun19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_79847297_" }
            },
            {
              name: "qt_9ypjqn19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_842479414_" }
            },
            {
              name: "qt_xoebyn19tc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1850559427_" }
            }
          ],
          sortData: [
            {
              sortColumn: {
                name: "qt_e4cq0l19tc",
                datasetNs: "d0",
                tableNs: "t0",
                dataTransformation: { sourceFieldName: "_2122702_" }
              },
              sortDir: 0
            },
            {
              sortColumn: {
                name: "qt_f4cq0l19tc",
                datasetNs: "d0",
                tableNs: "t0",
                dataTransformation: { sourceFieldName: "_151628018_" }
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
              name: "qt_bwdq0l19tc",
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
  "Case ID",
  "Date",
  "Location",
  "State",
  "Country",
  "Incident",
  "Special Comments",
  "Shape",
  "Size (Meters)",
  "Result"
];

module.exports = {
  buildRequest,
  colNames
};
