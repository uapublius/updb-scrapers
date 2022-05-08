function buildRequest(startRow, rowsCount) {
  return {
    dataRequest: [
      {
        requestContext: {
          reportContext: {
            reportId: "ab5dff49-3c63-4e5f-9e4e-dec347e5e379",
            pageId: "39670176",
            mode: 1,
            componentId: "cd-c6huws4ztc",
            displayType: "simple-table"
          }
        },
        datasetSpec: {
          dataset: [
            {
              datasourceId: "2f4d5b2b-aba7-428b-a02d-db63584daec6",
              revisionNumber: 0,
              parameterOverrides: []
            }
          ],
          queryFields: [
            {
              name: "qt_24n7j39buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            },
            {
              name: "qt_14n7j39buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2026734955_" }
            },
            {
              name: "qt_34n7j39buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1965687765_" }
            },
            {
              name: "qt_w9oih69buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_939654722_" }
            },
            {
              name: "qt_84n7j39buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_79847297_" }
            },
            {
              name: "qt_94n7j39buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2577441_" }
            },
            {
              name: "qt_74n7j39buc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n713693765_" }
            }
          ],
          sortData: [
            {
              sortColumn: {
                name: "qt_24n7j39buc",
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
              name: "qt_3wo7j39buc",
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
  "Summary Description",
  "Shape",
  "Size",
  "Special Comments"
];

module.exports = {
  buildRequest,
  colNames
};
