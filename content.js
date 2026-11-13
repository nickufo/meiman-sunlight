/* Edit this file to change stories or insert future media. Coordinates are % of the ORIGINAL 4:3 photo. */
window.SUNLIGHT_CONTENT = {
  stories: [
    { id:'together', x:47,y:18,label:'屋頂｜一起抬頭',image:'assets/together.jpg',alt:'夥伴們在樹下，圍著鏡頭一起抬頭合影',kicker:'01 / THE PEOPLE',title:'一起抬頭，就有日光。',text:'一頓午餐之外，還有一起留下回憶的人。謝謝同行的夥伴，也謝謝每個按下快門、把日常好好收藏的人。'},
    { id:'welcome',x:46.5,y:72,label:'木門｜歡迎進來',image:'assets/sign.jpg',alt:'美滿日光的招牌細節',kicker:'02 / A WARM WELCOME',title:'推開門，慢一點。',text:'把外頭的匆忙留在門邊。今天的午餐，就從這間有木窗、有樹影的小屋開始。'},
    { id:'kitchen',x:32,y:69,label:'左窗｜開放式廚房',image:'assets/kitchen.jpg',alt:'黑白照片裡，開放式廚房的工作人員正在料理',kicker:'03 / THE OPEN KITCHEN',title:'料理，就在眼前。',text:'開放式廚房讓料理就在眼前發生。看著備料與烹調，等待也成了午餐的一部分。'},
    { id:'menu',x:36,y:39,label:'樓上木窗｜窗上的字',image:'assets/menu.jpg',alt:'木框玻璃窗上的手寫菜單',kicker:'04 / WORDS ON THE WINDOW',title:'窗上的字，午間的期待。',text:'木框把光留住，也把手寫的日常留住。靠近一點看，今天想吃什麼，就慢慢決定。照片記錄當時的菜單，供應內容請以現場為準。'},
    { id:'lunch',x:65,y:67,label:'右窗｜午餐上桌',image:'assets/lunch.jpg',alt:'午餐燉飯近照',kicker:'05 / LUNCH IS HERE',title:'好好吃飯，就是美滿。',text:'等到午餐上桌，話題也可以先放一放。讓眼前這一盤，陪我們把今天過得溫柔一點。'},
    { id:'texture',x:75,y:57,label:'屋牆｜日常的紋理',image:'assets/texture.jpg',alt:'屋牆的材質與細節',kicker:'06 / THE QUIET DETAILS',title:'細節裡，有生活的溫度。',text:'粗樸的牆面、沉靜的色澤，都是這間屋子的表情。不必修飾得太滿，日光會替它添上一筆。'},
    { id:'tree',x:18,y:17,label:'樹梢｜把視線往上',image:'assets/together.jpg',alt:'夥伴們在綠樹下向鏡頭微笑',kicker:'07 / LOOK UP TOGETHER',title:'樹影之下，我們一起。',text:'偶爾把視線往上，會看見枝葉，也會看見彼此的笑。謝謝一起吃飯、一起記錄這個午間的夥伴。',gallery:[{image:'assets/tree.jpg',label:'再看一眼樹梢',alt:'從下往上看的綠樹與日光'},{image:'assets/exterior.jpg',label:'看看屋子的另一面',alt:'美滿日光外觀的另一個角度'}]}
  ],
  // Separate future slots. Set local relative paths; no external embeds required.
  video:{src:null,poster:'assets/together.jpg',title:'把午間，拍成一段回憶。',text:'夥伴的影片，將在這裡與你見面。先留一個位置，給那些還沒說完的日常。'},
  // Game entry must export window.SunlightGame.mount(container) => optional cleanup function.
  game:{script:null,title:'留一點日光，給好玩的事。',text:'小遊戲正在準備中。之後不必離開這間屋子，也能與日光玩一會兒。'}
};