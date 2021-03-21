// phina.js をグローバル領域に展開
phina.globalize()

//サイズ指定用の定数
var SCREEN_X = 640
var SCREEN_Y = 360

// メイン処理
phina.main(function() {
  // アプリケーション生成
  var app = GameApp({
    startLabel: 'title',
    //screenのサイズ変更
    width: SCREEN_X,
    height: SCREEN_Y,
    assets: {
      image: {
        faceback: 'main_back.png',
        man: 'main_man.png',
        woman: 'main_woman.png',
        title1: 'buisiness_people.jpeg',
        title2: 'buildings.png',
        typeback: 'typing_back.png'
      },
      font: {
        あさご本丸ゴシックmini: 'あさご本丸ゴシックmini.otf'
      },
      sound: {
        push_sound: './push_sound.mp3',
        game_bgm1: './bgm1.mp3'
      }
    },

    scenes: [
      {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'login'
      },
      {
        className: 'LoginScene',
        label: 'login',
        nextLabel: 'myloading'
      },
      {
        className: 'MyLoadingScene',
        label: 'myloading',
        nextLabel: 'main'
      },
      {
        className: 'MainScene',
        label: 'main'
      }
    ]
  })

  app.domElement.addEventListener('touchend', function dummy() {
    var s = phina.asset.Sound()
    s.loadFromBuffer()
    s.play().stop()
    app.domElement.removeEventListener('touchend', dummy)
  })
  // アプリケーション実行
  app.run()
})
