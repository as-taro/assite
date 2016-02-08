// ウィンドウリサイズ時処理
var timer = false;
$(window).resize(function() {
    var sideWrap = $(".box-contents2"); //サイドバーの外枠
    var sideArea = $(".sidemenu"); //サイドバー
    var sideW = sideWrap.width();
    if(window.innerWidth >= 768) {
	    // サイドバーのサイズを変更
	    sideArea.css({"width": sideW});
    } else {
        sideWrap.css({"position": "static"});
        sideArea.css({"position": "static", "width": sideW});
    }
});

// サイドバー固定処理
$(window).load(function () {

//該当のセレクタなどを代入

var compare = $(".box-contents"); //比較コンテンツ
var sideWrap = $(".box-contents2"); //サイドバーの外枠
var sideArea = $(".sidemenu"); //サイドバー

var wd = $(window); //ウィンドウ自体
	
//比較コンテンツとサイドの高さを比べる

var mainH = compare.height();
var sideH = sideWrap.height();
var sideW = sideWrap.width();
sideArea.css({"width": sideW});

	if(sideH < mainH) { //メインの方が高ければ色々処理する
		
		//サイドバーの外枠をrelaltiveに（#sideをポジションで上や下に固定するため）
		sideWrap.css({"position": "relative"});
		
		//サイドバーがウィンドウよりいくらはみ出してるか
		var sideOver = wd.height()-sideArea.height();
	
		//固定を開始する位置 = サイドバーの座標＋はみ出す距離
		var starPoint = sideArea.offset().top + (-sideOver);
		
		//固定を解除する位置 = メインコンテンツの終点
		var breakPoint = sideArea.offset().top + mainH;
	
		wd.scroll(function() { //スクロール中の処理
			
			if(window.innerWidth >= 768) {
			
			if(wd.height() < sideArea.height()){ //サイドメニューが画面より大きい場合
				if(starPoint < wd.scrollTop() && wd.scrollTop() + wd.height() < breakPoint){ //固定範囲内
					sideArea.css({"position": "fixed", "bottom": "20px"}); 
	
				}else if(wd.scrollTop() + wd.height() >= breakPoint){ //固定解除位置を超えた時
					sideArea.css({"position": "absolute", "bottom": "0"});
	
				} else { //その他、上に戻った時
					sideArea.css("position", "static");
	
				}
	
			}else{ //サイドメニューが画面より小さい場合
			
				var sideBtm = wd.scrollTop() + sideArea.height(); //サイドメニューの終点
				
				if(compare.offset().top < wd.scrollTop() && sideBtm < breakPoint){ //固定範囲内
					sideArea.css({"position": "fixed", "top": "20px"});
					
				}else if(sideBtm >= breakPoint){ //固定解除位置を超えた時
				
					//サイドバー固定場所（bottom指定すると不具合が出るのでtopからの固定位置を算出する）
					var fixedSide = mainH - sideH;
					
					sideArea.css({"position": "absolute", "top": fixedSide});
					
				} else {
					sideArea.css("position", "static");
				}
			}
			}
		});
	}
});