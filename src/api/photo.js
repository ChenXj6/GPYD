import url from './urls'

function changePhoto (data) {
    let result = data.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
      match = '<img src=' + url.url + capture + ' title="01.png" alt="01.png" style="max-width:890px" class="cpImg"/>';
      return match
    });
    data = result
    return data
}

export default { changePhoto }