
/**
 * Created by qiangxl on 2018/5/20.
 */

.then(function () {
  boy.stopWalk()
}).then(function() {
  //开门
  return openDoor();
})
  .then(function() {
    //开灯
    lamp.bright()
  })
  .then(function() {
    //进商店
    return boy.toShop(2000)
  }).then(function(){
    // 取花
    return boy.talkFlower();
  }).then(
    bird.fly()
  ).then(function() {
    //出商店
    return boy.outShop(2000)
  }).then(function() {
    //灯暗
    lamp.dark()
  });



boy.walkTo(2000, 0.15)
  .then(function() {
    // 第二次走路到桥上left,top
    return boy.walkTo(1500, 0.25, (bridgeY - girl.getHeight()) / visualHeight);
  })
  .then(function() {
    // 实际走路的比例
    var proportionX = (girl.getOffset().left - boy.getWidth() + girl.getWidth() / 5) / visualWidth;
    // 第三次桥上直走到小女孩面前
    return boy.walkTo(1500, proportionX);
  }).then(function() {
  // 图片还原原地停止状态
  boy.resetOriginal();
}).then(function () {
  // 增加转身动作
  setTimeout(function() {
    girl.rotate();
    boy.rotate(function() {
      // 开始logo动画
      logo.run();
    });
  }, 1000);
});