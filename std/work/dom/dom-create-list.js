function list(...args) {
  var result = '<ul>\n<li>'; // start list
  result += args.join('</li>\n<li>');
  result += '</li>\n</ul>\n'; // end list
  return result;
}