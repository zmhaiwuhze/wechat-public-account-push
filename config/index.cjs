/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx9e85030ec8061771',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1053d058fed8febcec9c527042112158',

  PROVINCE: '辽宁',
  CITY: '沈阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小张同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUGU-5iCIrW2K2xdSkoJLysmvp14',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'sE8HFr8ZG1w261uQMQd-AGbcS_8rESSwyD14eruHnxI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-17',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小张同学阴历', year: '2001', date: '11-03',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小张同学阳历', year: '2001', date: '12-17',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '10-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-10-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-01-24' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'WDM6UWfSykNFhSnumL_-kWFr6OgxJTOxiaX7zIpvF60',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oUGU-5tUqP1B7l0e__n7NSLg3JEg',
    }
  ],

}

module.exports = USER_CONFIG

