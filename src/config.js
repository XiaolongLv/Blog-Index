const SERVE = false; // 是否使用线上服务器

const HOST = ""; // 线上服务器地址，如果不使用请留空

const BLOG_NAME = "我的笔记本"; // 个人网站名字

const BLOG_URL = "https://notion-next-three-phi.vercel.app/"; // 个人网站链接（请填写完整链接）

const GITHUB = "https://github.com/XiaolongLv"; // 右上角 Github 图标链接，留空不显示

const BACKGROUND_IMG_URL = "https://jx.iqfk.top/api/bing.php"; // 背景图片url，默认为必应每日图片（第三方接口）

const SORT_DATA = [
  { sortId: 1, title: "我的网站" },
  { sortId: 2, title: "敬请期待" }
]; // 网站分类列表，请按照API.md中'/getSort'接口中返回的data格式填写

const RECORD_NUMBER = ""; // 网站备案号，留空不显示

const PAGES_DATA = [
  {
    pageId: 1,
    sortId: 1,
    title: "我的博客",
    subtitle: "个人番",
    url: "https://www.jonathanlv.com/",
    icon: "https://www.jonathanlv.com/favicon.png"
  },
  {
    pageId: 2,
    sortId: 1,
    title: "我的笔记本",
    subtitle: "",
    url: "https://jonathanlv.xyz/",
    icon: ""
  },
  {
    pageId: 3,
    sortId: 1,
    title: "工具星导航",
    subtitle: "让你的生活更便捷",
    url: "https://guidestar.top/",
    icon: "https://guidestar.top/assets/images/favicon.png"
  },
  {
    pageId: 4,
    sortId: 1,
    title: "工具星简易版",
    subtitle: "",
    url: "https://guidestar-simple.pages.dev/",
    icon: "https://guidestar.top/assets/images/favicon.png"
  },
  {
    pageId: 5,
    sortId: 1,
    title: "工具星极简版",
    subtitle: "",
    url: "https://soso-60w.pages.dev/",
    icon: "https://guidestar.top/assets/images/favicon.png"
  },
  {
    pageId: 6,
    sortId: 1,
    title: "壁纸",
    subtitle: "电脑壁纸",
    url: "https://wallpaper-8y1.pages.dev/",
    icon: "https://guidestar.top/assets/images/favicon.png"
  },
  {
    pageId: 7,
    sortId: 1,
    title: "今日热榜",
    subtitle: "今日热榜",
    url: "https://dailyhot-awr.pages.dev/",
    icon: "https://dailyhot-awr.pages.dev/ico/favicon.png"
  },
  {
    pageId: 8,
    sortId: 1,
    title: "我的音乐",
    subtitle: "我的音乐",
    url: "https://splayer-2fw.pages.dev/",
    icon: "https://splayer-2fw.pages.dev/images/logo/favicon.svg"
  } ,
  {
    pageId: 9,
    sortId: 1,
    title: "我的电影",
    subtitle: "我的电影",
    url: "https://webmovie-ten.vercel.app/",
    icon: "https://webmovie-ten.vercel.app/favicon.ico"
  }

  
]; // 网站分类列表，请按照API.md中'/getPages'接口中返回的data格式填写

const SLOGAN = [
  "欢迎拜访",
  "歡迎拜訪",
  "Welcome, my friend!",
  "訪問へようこそ",
  "嗨，别来无恙",
  "不忘初心，一生浪漫",
  "最近还好吗？",
  "流星，落花，萤火",
  "马车越空，晃荡越响"
]; // 在Logo下方显示的标题

const FOOTER_INFO = true; // 是否显示抽屉右下角的文字信息

export default {
  SERVE,
  HOST,
  BLOG_URL,
  BLOG_NAME,
  SORT_DATA,
  PAGES_DATA,
  SLOGAN,
  GITHUB,
  FOOTER_INFO,
  BACKGROUND_IMG_URL,
  RECORD_NUMBER
};
