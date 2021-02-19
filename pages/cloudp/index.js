Page({
  data: {
    path: "",
    options: "",
  },
  onLoad: function() {
    let pages = getCurrentPages()
    let path = pages[pages.length-1]
    console.log(path)
    let q = ""
    if (path.options.q != undefined){
      q = unescape(path.options.q)
    }
    this.setData({"path": path.route, "options": path.options, "q":q})
  }
})