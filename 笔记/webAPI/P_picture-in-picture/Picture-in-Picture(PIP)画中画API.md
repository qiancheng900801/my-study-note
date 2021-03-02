## 一、介绍：画中画（Picture-in-Picture），即PiP窗口

特点：使视频可以在桌面窗口最上层显示

## 二、API （注意：video和document）

#### 属性
1. document.pictureInPictureEnabled（boolean）：是否支持pip

   ````javascript
   document.pictureInPictureEnabled
   // boolean
   ````

   

2. disablePictureInPicture（property）：禁用pip

   ````javascript
   <video src="" disablePictureInPicture></video>
   ````

3. pictureInPictureElement（dom）：获取pip元素

   ````javascript
   document.pictureInPictureElement
   // null  ||  dom
   ````

4. pictureInPictureWindow（obj）：pip窗口对象，进入pip后才有。

   ````javascript
   video.requestPictureInPicture().then((pictureInPictureWindow) => {
   //   pictureInPictureWindow：{width:只读，height:只读，onresize：null}
   })
   ````
   
   

#### 方法
1. requestPictureInPicture()：进入pip，返回promise，resolve（pictureInPictureWindow）

   ````javascript
   video.requestPictureInPicture().then((pictureInPictureWindow) => {
      
   })
   ````

   

2. exitPictureInPicture()：退出pip

   ````javascript
   document.exitPictureInPicture()
   ````

   
#### 事件
1. enterpictureinpicture：进入pip

   ````javascript
   video.addEventListener('enterpictureinpicture', (event) => {
       console.log(event.pictureInPictureWindow);
       let pipWindow = event.pictureInPictureWindow
       pipWindow.addEventListener('resize', sizeChange)
     })
   // event.pictureInPictureWindow  ===  requestPictureInPicture().then(pictureInPictureWindow) 
   ````

   

2. leavepictureinpicture：退出pip

   ````javasc
   video.addEventListener('leavepictureinpicture', (event) => { })
   ````

   

3. resize：PictureInPictureWindow窗口大小变化

   ````javas
   event.pictureInPictureWindow.addEventListener('resize', (eventX)=>{
   	console.log(`窗口高${eventX.target.width}--宽${eventX.target.height}`);
   })
   ````

## 三、example

````javascript
<video src="https://mdn.github.io/dom-examples/picture-in-picture/assets/bigbuckbunny.mp4" id="video"
    controls></video>
  <button id="togglePipButton">开启/关闭画中画</button>

<script>
  console.log(document.pictureInPictureEnabled);
  // 判断是否支持PIP

  togglePipButton.hidden = !document.pictureInPictureEnabled

  togglePipButton.addEventListener('click', (event) => {
    if (!document.pictureInPictureElement)
      video.requestPictureInPicture()
    // video.requestPictureInPicture().then((pictureInPictureWindow) => {
    //   pictureInPictureWindow.addEventListener('resize', (event) => {
    //     console.log(event.target.width, event.target.width);
    //   })
    // })
    else
      document.exitPictureInPicture()
  })

  video.addEventListener('enterpictureinpicture', (event) => {
    console.log(event.pictureInPictureWindow);

    event.pictureInPictureWindow.addEventListener('resize', sizeChange)
  })

  video.addEventListener('leavepictureinpicture', (event) => { })

  sizeChange = (event) => {
    console.log(`窗口高${event.target.width}--宽${event.target.height}`);
  }
</script>
````

