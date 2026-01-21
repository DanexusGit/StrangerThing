
class GStream {
  keys = null;
  tmdb = 0;
  apiURL = document.querySelector('base').getAttribute('base');
  constructor(keys = null) {
    this.keys = keys;
  }

  /**
   * @param {any} id
   */
  set setTMDb(id) {
    this.tmdb = id;
  }

  async getSeasons() {
    return await fetch(`${this.apiURL}getData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: $.param({
        Auth0: bin2hex(encodeURI(JSON.stringify(this.keys)))
      })
    });
  }

  /**
   * @param {string} server_id
   * @return {Promise<Response>}
   */
  async getStream(server) {
    return await fetch(`${this.apiURL}stream`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: $.param({
        Auth0: bin2hex(encodeURI(JSON.stringify(server))),
        referrer: window.document.referrer
      })
    });
  }
}

function bin2hex(s) {
  var i, l, o = "", n;
  s += "";
  for (i = 0, l = s.length; i < l; i++) {
    n = s.charCodeAt(i).toString(16)
    o += n.length < 2 ? "0" + n : n;
  }

  return o;
}