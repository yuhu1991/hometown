import React, { Component } from 'react';
let lyricsStringArr = [
    `[ar:阿研]
    [ti:BINGBIAN病变]
    [00:00.41]鞠文娴 - BINGBIAN病变
    [00:00.17]词：Cubi/Fi9
    [00:00.27]曲：Jurrivh
    [00:16.48]有天我睡醒看到我的身边没有你
    [00:20.64]在我的右边是你曾经喜欢的玩具
    [00:24.80]可当我站起身来在房间里寻找你
    [00:29.03]留下的只有带着你味道的一封信
    [00:33.49]就在昨天还一起看我们的照片
    [00:37.59]可现在让我感觉像烂剧里的主演
    [00:41.80]为什么这种事情会发生在我身边
    [00:46.05]是不是老天没能看到对你的疯癫
    [00:51.52]还想着创造你的宇宙
    [00:53.53]但现在已经被我清空
    [00:55.70]你让我整个人都冰冻
    [00:57.71]还怎么再次为你心动
    [00:59.86]Wake up me
    [01:00.69]不是你的意愿
    [01:02.09]离开我开始新的起点
    [01:04.18]可能我还会对你贪恋
    [01:06.38]谁让你曾经让我疯癫
    [01:08.21]疯癫那也是过去的画面
    [01:11.65]看往后的几天
    [01:13.69]我猜你也不会出现
    [01:15.82]我回想这几年
    [01:17.85]就像是要命的病变
    [01:20.07]你可能听不见
    [01:22.37]来自他对你的挂念
    [01:24.67]可能有点累
    [01:25.98]觉得对不对
    [01:27.00]这是第几次在为你宿醉
    [01:29.04]没了我肩膀
    [01:30.22]你在谁身旁
    [01:31.30]买的礼物都变成了灰
    [01:33.07]曾经我多想
    [01:34.42]把你变漂亮
    [01:35.42]看着别人羡慕你的模样
    [01:37.80]没关系有小熊陪着你看月亮
    [01:41.26]我已经看到跟你断电的过程
    [01:43.90]但我假装看不见
    [01:45.71]是不是要变得像个厉鬼
    [01:47.87]才能进入你的世界
    [01:49.85]为什么不说再见
    [01:51.37]我猜你应该是不小心地忘记
    [01:54.21]都无所谓也有点累
    [01:56.18]也可以开始新的记忆
    [01:58.46]有天我睡醒看到我的身边没有你
    [02:02.50]在我的右边是你曾经喜欢的玩具
    [02:06.63]可当我站起身来在房间里寻找你
    [02:11.04]留下的只有带着你味道的一封信
    [02:15.35]就在昨天还一起看我们的照片
    [02:19.51]可现在让我感觉像烂剧里的主演
    [02:24.00]为什么这种事情会发生在我身边
    [02:27.92]是不是老天没能看到对你的疯癫
    [02:32.38]我不能够停止啊
    [02:34.42]这些年我对你的疯癫
    [02:36.34]还会戴上那条围巾吗
    [02:38.78]在每一个寒风刺骨的冬天
    [02:41.18]还有每次送你在回家的路上
    [02:43.12]不经意间触碰到你的手
    [02:44.94]你穿裙子眨眼睛望着我
    [02:47.68]那些让我心动的瞬间
    [02:49.63]那条十字路口
    [02:51.38]始终有你身上的气味
    [02:54.05]车水马龙过后的路灯下的身影
    [02:57.22]又会是谁
    [02:58.47]可是我真的喜欢你
    [03:00.49]但是每次欲言又闭嘴
    [03:02.69]那时荒唐的男孩
    [03:04.81]又浑浊了几岁
    [03:06.45]有天我睡醒看到我的身边没有你
    [03:10.44]在我的右边是你曾经喜欢的玩具
    [03:14.74]可当我站起身来在房间里寻找你
    [03:19.00]留下的只有带着你味道的一封信
    [03:23.47]就在昨天还一起看我们的照片
    [03:27.50]可现在让我感觉像烂剧里的主演
    [03:31.67]为什么这种事情会发生在我身边
    [03:35.96]是不是老天没能看到对你的疯癫`
    ,
    `[ar:于文文]
    [ti:体面]
    [00:00.03]于文文 - 体面 (Live)
    [00:00.80]词：唐恬
    [00:00.93]曲：于文文
    [00:01.10]编曲：郑楠
    [00:25.01]别堆砌怀念让剧情
    [00:28.44]变得狗血
    [00:36.15]深爱了多年又何必
    [00:39.79]毁了经典
    [00:45.05]都已成年不拖不欠
    [00:50.60]浪费时间是我情愿
    [00:56.21]像谢幕的演员
    [00:59.93]眼看着灯光熄灭
    [01:07.60]来不及
    [01:08.58]再轰轰烈烈
    [01:13.29]就保留
    [01:14.33]告别的尊严
    [01:19.09]我爱你不后悔
    [01:22.42]也尊重故事结尾
    [01:30.36]分手应该体面
    [01:33.42]谁都不要说抱歉
    [01:37.22]何来亏欠
    [01:39.04]我敢给就敢心碎
    [01:42.87]镜头前面是从前的我们
    [01:47.40]在喝彩
    [01:49.04]流着泪声嘶力竭
    [01:52.73]离开也很体面
    [01:55.85]才没辜负这些年
    [01:59.71]爱得热烈
    [02:01.56]认真付出的画面
    [02:05.38]别让执念
    [02:07.17]毁掉了昨天
    [02:09.98]我爱过你
    [02:11.89]利落干脆
    [02:37.66]最熟悉的街
    [02:39.69]主角却换了人演
    [02:48.90]我哭到哽咽心再痛
    [02:52.36]就当破茧
    [02:57.61]来不及
    [02:58.71]再轰轰烈烈
    [03:03.41]就保留
    [03:04.32]告别的尊严
    [03:08.97]我爱你不后悔
    [03:12.46]也尊重故事结尾
    [03:20.35]分手应该体面
    [03:23.39]谁都不要说抱歉
    [03:27.25]何来亏欠
    [03:29.09]我敢给就敢心碎
    [03:32.89]镜头前面是从前的我们
    [03:37.54]在喝彩
    [03:39.22]流着泪声嘶力竭
    [03:42.92]离开也很体面
    [03:45.96]才没辜负这些年
    [03:49.82]爱得热烈
    [03:51.77]认真付出的画面
    [03:55.63]别让执念
    [03:57.41]毁掉了昨天
    [04:00.16]我爱过你
    [04:01.97]利落干脆
    [04:06.38]再见
    [04:07.97]不负遇见`
    ,
    `[ar:买辣椒也用券]
    [ti:起风了]
    [00:00.08]买辣椒也用券 - 起风了
    [00:03.71]词：米果
    [00:04.41]曲：高桥优
    [00:28.86]这一路上走走停停
    [00:31.92]顺着少年漂流的痕迹
    [00:35.10]迈出车站的前一刻
    [00:38.19]竟有些犹豫
    [00:41.34]不禁笑这近乡情怯
    [00:44.45]仍无可避免
    [00:46.73]而长野的天
    [00:48.28]依旧那么暖
    [00:49.48]风吹起了从前
    [00:52.20]从前初识这世间
    [00:55.18]万般流连
    [00:56.84]看着天边似在眼前
    [00:59.64]也甘愿赴汤蹈火去走它一遍
    [01:04.66]如今走过这世间
    [01:07.69]万般流连
    [01:09.36]翻过岁月不同侧脸
    [01:12.10]措不及防闯入你的笑颜
    [01:18.03]我曾难自拔于世界之大
    [01:21.77]也沉溺于其中梦话
    [01:24.95]不得真假 不做挣扎 不惧笑话
    [01:30.40]我曾将青春翻涌成她
    [01:33.93]也曾指尖弹出盛夏
    [01:37.02]心之所动 且就随缘去吧
    [01:42.85]逆着光行走 任风吹雨打
    [01:59.31]短短的路走走停停
    [02:02.28]也有了几分的距离
    [02:05.49]不知抚摸的是故事 还是段心情
    [02:11.71]也许期待的不过是 与时间为敌
    [02:17.17]再次看到你
    [02:18.74]微凉晨光里
    [02:20.30]笑的很甜蜜
    [02:22.59]从前初识这世间
    [02:25.68]万般流连
    [02:27.14]看着天边似在眼前
    [02:30.03]也甘愿赴汤蹈火去走它一遍
    [02:35.00]如今走过这世间
    [02:38.01]万般流连
    [02:39.71]翻过岁月不同侧脸
    [02:42.46]措不及防闯入你的笑颜
    [02:48.36]我曾难自拔于世界之大
    [02:52.13]也沉溺于其中梦话
    [02:55.35]不得真假 不做挣扎 不惧笑话
    [03:00.82]我曾将青春翻涌成她
    [03:04.35]也曾指尖弹出盛夏
    [03:07.36]心之所动 且就随缘去吧
    [03:38.30]晚风吹起你鬓间的白发
    [03:42.03]抚平回忆留下的疤
    [03:45.24]你的眼中 明暗交杂 一笑生花
    [03:50.76]暮色遮住你蹒跚的步伐
    [03:54.58]走进床头藏起的画
    [03:57.67]画中的你 低着头说话
    [04:03.17]我仍感叹于世界之大
    [04:06.72]也沉醉于儿时情话
    [04:09.76]不剩真假 不做挣扎 无谓笑话
    [04:15.65]我终将青春还给了她
    [04:19.14]连同指尖弹出的盛夏
    [04:22.60]心之所动 就随风去了
    [04:28.05]以爱之名 你还愿意吗`
    ,
];

let lyricsArr = [];
lyricsStringArr.map(function (value) {
   lyricsArr.push(formatLyc(value))
});
console.log(lyricsArr);

class Lyrics extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="lyrics">
                <div className="lyrics-content">
                    <h3 className="song-title">{lyricsArr[this.props.current].title}</h3>
                    <div className="song-author">{lyricsArr[this.props.current].author}</div>
                    <div className="lyric-wrap">
                        {
                            lyricsArr[this.props.current].lyr.map((value,index) =>(
                                <p key={index} data-time={lyricsArr[this.props.current].time[index]}>{value}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function formatLyc(string) {
    let tempTime = [],
        tempLyr=[];
    let arr = string.split('[');
    arr.map(function (value) {
        tempTime.push(value.split(']')[0]);
        tempLyr.push(value.split(']')[1]);
    });

    let author = tempTime[1].split(":")[1];
    let title = tempTime[2].split(":")[1];
    let newTempTime = tempTime.splice(3,);
    let newTempLyr = tempLyr.splice(3,);

    return {
        author:author,
        title:title,
        time:newTempTime,
        lyr:newTempLyr
    }
}
export default Lyrics;