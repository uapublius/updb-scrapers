const { getDate } = require('./getDate');

function getFieldData(daysBack, outsideUsa) {
  let submitted = getDate(daysBack);

  let fields = {
    'req': 'search_page2',
    'submitted_date_lo__month': submitted.month,
    'submitted_date_lo__day': submitted.day,
    'submitted_date_lo__year': submitted.year,
    'submitted_date_hi__month': submitted.month,
    'submitted_date_hi__day': submitted.day,
    'submitted_date_hi__year': submitted.year,
    'country_id': 227,
    'state_id': '',
    'county_id': '',
    'nearest_city': '',
    'keyword': '',
    'case_number': '',
    'entity_type': '',
    'landing_type_id': '',
    'distance_from_witness': '',
    'sql_order_primary': 'f1_submitted_datetime+DESC',
    'sql_order_secondary': ''
  };

  if (outsideUsa) {
    fields['not_country'] = 'on';
  }

  let data = Object.entries(fields).map(curr => {
    let [key, value] = curr;
    return `${key}=${value}`;
  }).join('&');

  return data;
}

exports.getFieldData = getFieldData;
