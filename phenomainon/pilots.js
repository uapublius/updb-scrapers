function buildRequest(startRow, rowsCount) {
  return {
    dataRequest: [
      {
        requestContext: {
          reportContext: {
            reportId: "5da0e83a-65ad-4551-b50d-0bf1a5043208",
            pageId: "39670176",
            mode: 1,
            componentId: "cd-c6huws4ztc",
            displayType: "simple-table"
          }
        },
        datasetSpec: {
          dataset: [
            {
              datasourceId: "faa4c087-aacf-4ad2-bffb-d2610388b60d",
              revisionNumber: 0,
              parameterOverrides: []
            }
          ],
          queryFields: [
            {
              name: "qt_g9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2122702_" }
            },
            {
              name: "qt_h9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_2026734955_" }
            },
            {
              name: "qt_i9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_1965687765_" }
            },
            {
              name: "qt_t66fr96luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n624194762_" }
            },
            {
              name: "qt_j9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_151628018_" }
            },
            {
              name: "qt_eoao1a7luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n1205444233_" }
            },
            {
              name: "qt_k9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_79847297_" }
            },
            {
              name: "qt_l9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_842479414_" }
            },
            {
              name: "qt_xhjdma7luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_411056992_" }
            },
            {
              name: "qt_m9bbs86luc",
              datasetNs: "d0",
              tableNs: "t0",
              dataTransformation: { sourceFieldName: "_n713693765_" }
            }
          ],
          sortData: [
            {
              sortColumn: {
                name: "qt_g9bbs86luc",
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
  "Aircraft",
  "Incident",
  "Nature of Phenomenon",
  "Shape",
  "Size (Meters)",
  "EMF Effects",
  "Special Comments"
];

module.exports = {
  buildRequest,
  colNames
};
