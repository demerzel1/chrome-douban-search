// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  var search = "http://www.douban.com/search?q=%s";
  url = search.replace("%s", encodeURIComponent(info.selectionText));
  chrome.tabs.create({"url": url, "index": tab.index+1});
}


var contexts = ["selection"];
var title = "douban search";

var id = chrome.contextMenus.create({"title":title, "contexts":contexts,
									"onclick":genericOnClick});
