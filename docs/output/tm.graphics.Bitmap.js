Ext.data.JsonP.tm_graphics_Bitmap({"tagname":"class","name":"tm.graphics.Bitmap","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.graphics.Bitmap","members":{"cfg":[],"property":[],"method":[{"name":"getPixel","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixel"},{"name":"getPixelAverage","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelAverage"},{"name":"getPixelIndex","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelIndex"},{"name":"getPixelXY","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-getPixelXY"},{"name":"init","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-init"},{"name":"noise","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-noise"},{"name":"posToIndex","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-posToIndex"},{"name":"setPixel","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel"},{"name":"setPixel32FromNumber","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixel32FromNumber"},{"name":"setPixelFromNumber","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromNumber"},{"name":"setPixelFromObject","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromObject"},{"name":"setPixelFromString","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelFromString"},{"name":"setPixelIndex","tagname":"method","owner":"tm.graphics.Bitmap","meta":{"chainable":true},"id":"method-setPixelIndex"},{"name":"setPixelXY","tagname":"method","owner":"tm.graphics.Bitmap","meta":{},"id":"method-setPixelXY"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":9,"files":[{"filename":"bitmap.js","href":"bitmap.html#tm-graphics-Bitmap"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/bitmap.html#tm-graphics-Bitmap' target='_blank'>bitmap.js</a></div></pre><div class='doc-contents'><p>ビットマップクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getPixel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixel' class='name expandable'>getPixel</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>ピクセル値を取得\n\nMemo\n\n\nindex 指定か x, y 指定にするか検討中\n配列で返すか数値で返すか検討中. ...</div><div class='long'><p>ピクセル値を取得</p>\n\n<h3>Memo</h3>\n\n<ul>\n<li>index 指定か x, y 指定にするか検討中</li>\n<li>配列で返すか数値で返すか検討中. 速度の早いやつを採用する</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelAverage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelAverage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelAverage' class='name expandable'>getPixelAverage</a>( <span class='pre'>x, y, width, height</span> )</div><div class='description'><div class='short'>指定した範囲内のピクセル平均値を取得 ...</div><div class='long'><p>指定した範囲内のピクセル平均値を取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>width</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelIndex' class='name expandable'>getPixelIndex</a>( <span class='pre'>index</span> )</div><div class='description'><div class='short'>index 指定でピクセル値を取得\n最も高速 ...</div><div class='long'><p>index 指定でピクセル値を取得\n最も高速</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPixelXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-getPixelXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-getPixelXY' class='name expandable'>getPixelXY</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>x, y 指定でピクセル値を取得 ...</div><div class='long'><p>x, y 指定でピクセル値を取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-init' class='name expandable'>init</a>( <span class='pre'>imageData</span> )</div><div class='description'><div class='short'>初期化 ...</div><div class='long'><p>初期化</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>imageData</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-noise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-noise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-noise' class='name expandable'>noise</a>( <span class='pre'>low, high</span> )</div><div class='description'><div class='short'>ノイズ ...</div><div class='long'><p>ノイズ</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>low</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>high</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-posToIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-posToIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-posToIndex' class='name expandable'>posToIndex</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>位置をインデックスに変換 ...</div><div class='long'><p>位置をインデックスに変換</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel' class='name expandable'>setPixel</a>( <span class='pre'>index, r, g, b</span> )</div><div class='description'><div class='short'>ピクセル値をセット ...</div><div class='long'><p>ピクセル値をセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixel32FromNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixel32FromNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixel32FromNumber' class='name expandable'>setPixel32FromNumber</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>argb ...</div><div class='long'><p>argb</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromNumber' class='name expandable'>setPixelFromNumber</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>argb ...</div><div class='long'><p>argb</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromObject' class='name expandable'>setPixelFromObject</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>object ...</div><div class='long'><p>object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelFromString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelFromString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelFromString' class='name expandable'>setPixelFromString</a>( <span class='pre'>index, pixel</span> )</div><div class='description'><div class='short'>string\nrgb, hsl, #... ...</div><div class='long'><p>string\nrgb, hsl, #... #...... などに対応予定</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>pixel</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPixelIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelIndex' class='name expandable'>setPixelIndex</a>( <span class='pre'>index, r, g, b</span> ) : <a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>index 指定でピクセル値をセット\n最も高速 ...</div><div class='long'><p>index 指定でピクセル値をセット\n最も高速</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.graphics.Bitmap\" rel=\"tm.graphics.Bitmap\" class=\"docClass\">tm.graphics.Bitmap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPixelXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.graphics.Bitmap'>tm.graphics.Bitmap</span><br/><a href='source/bitmap.html#tm-graphics-Bitmap-method-setPixelXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.graphics.Bitmap-method-setPixelXY' class='name expandable'>setPixelXY</a>( <span class='pre'>x, y, r, g, b</span> )</div><div class='description'><div class='short'>x, y指定でピクセル値をセット ...</div><div class='long'><p>x, y指定でピクセル値をセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>g</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});