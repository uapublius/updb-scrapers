function buildRequest(startRow, rowsCount) {
  return {
    dataRequest: [
      {
        requestContext: {
          reportContext: {
            reportId: "6e5b0397-b434-4c1e-be5f-9b2a4a88cedf",
            pageId: "39670176",
            mode: 1,
            componentId: "cd-c6huws4ztc",
            displayType: "simple-table"
          }
        },
        datasetSpec: {
          dataset: [
            {
              datasourceId: "1b853bbd-2cd7-4e5d-921e-26c60f682224",
              revisionNumber: 0,
              parameterOverrides: []
            }
          ],
          queryFields: [
            {
              name: "qt_qhws3bafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            },
            {
              name: "qt_rhws3bafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1965687765_" }
            },
            {
              name: "qt_shws3bafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2100619_" }
            },
            {
              name: "qt_sswm3fafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_151628018_" }
            },
            {
              name: "qt_thws3bafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_79847297_" }
            },
            {
              name: "qt_uhws3bafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2577441_" }
            },
            {
              name: "qt_vhws3bafuc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n778337893_" }
            }
          ],
          sortData: [
            {
              sortColumn: {
                name: "qt_qhws3bafuc",
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
              name: "qt_o9ws3bafuc",
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

let colNames = ["Date", "Location", "City", "Incident", "Shape", "Size", "Special comments"];

module.exports = {
  buildRequest,
  colNames
};
