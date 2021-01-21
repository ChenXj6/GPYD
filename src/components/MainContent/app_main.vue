<template>
  <section class="app-main">
    <div data-v-b1f20ae6=""
         class="mall-wrapper">
      <!-- nav -->
      <div class="grid">
        <div class="wrap">
          <div class="grid-l">
            <!-- 轮播图 -->
            <div class="my-swipe">
              <banner :pageType='1'></banner>
            </div>

            <!-- 中间a三图片 -->
            <div class="entry">
              <router-link tag="a"
                           to="/goodlist?is_promotion=1">
                <img src="../..//assets/image/Promotion.jpg"
                     alt=""
                     width="300px"
                     height="90px"><span class="entry-btn"></span>
              </router-link>
              <router-link tag="a"
                           to="/goodlist?is_new=1">
                <img src="../..//assets/image/new.jpg"
                     alt=""
                     width="300px"
                     height="90px"> <span class="entry-btn"></span>
              </router-link>
              <router-link tag="a"
                           to="/goodlist?is_import=1">
                <img src="../..//assets/image/Imported.jpg"
                     alt=""
                     width="300px"
                     height="90px"> <span class="entry-btn"></span>
              </router-link>
            </div>
          </div>

          <!-- 右侧 -->
          <div class="grid-r">

            <!-- 登录 注册 -->
            <div class="userpanel"
                 v-if="!$store.state.user_name">
              <div>
                <div class="userpanel-info">
                  <span class="userpanel-headimg"
                        style="border-color: rgb(255, 255, 255); float: left;"><img src="data:image/png;base64,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"
                         alt="avtr" />
                    <span class="ellipsis">hi, 你好！</span></span>
                  <div class="userpanel-btns">
                    <router-link to="/login"
                                 class="to-login hover-animate">登录</router-link>
                    <router-link to="/register"
                                 class="to-register">注册</router-link>
                  </div>
                </div>
                <div class="person-wrapper">
                  <div class="person-title">
                    <div class="person1">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPElEQVQokXWSvyuFYRTHP+/1owglRTYpxaaUiMVm8Qfcu5lsd2E1WGTCYsfMZqF00x2IEhbUpSyUFEJk8DHch55er1On83Se7/me53uek6hE1gYsA73AK1ALNAB7wHQMTKLCQWAbWA/xHkiAdmAK6AGGgScAVNQO9U6dVvNqWX1WH9QNdURdVfcD/rdwUd1RV/zfZtSzQEyitgBloBFoBi6BIaA+SDA8+Qs4DPkC6mbE+pjRaU4thvNniEeolQzws3qgLgUpNepHdH+Beh0ljtUxtflnCJHvRrhKDjiNvmcNKAEv/LW3kL8FSqhNam/QepXR6cev1Al1Xu3LhQ25APKBdTLVKQHGgSJQB7QC57kI8AmMAu+pQoEboDOQLqRXLrYuYCvoLwP9VPd2Frir0mXr6Q7TO1EL6kAa8w3vTYf5yiZ2yQAAAABJRU5ErkJggg=="
                           alt="kefu" />
                      <span>专属客服</span>
                    </div>
                    <div class="person2">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA70lEQVQokX2RsU7DQBBEJ8FYtHEikx5Elza0SIj0NPxA8hlQp6Ch8Qdg5O/wJxDSRKJAShcjDKIiUopHwVqyj4tHOmn2Zkd3OytAzukDKfAJfAGPwMDtc00B8Mx/vACHbcZrj6nCTb23qybOtB8n9cI1vrYY3xqVZ8bFnhnDthllCabAt50nIG5L9Ri4AyZWj4Cx8Svg1noaxkugtG9ldvcAJMYz0z6Ai8o45G/ZFUrbWQG8Gy8dPQ4kTSX1anlFks4lJZJC45GjzwTknhTvgQN7be7RcwEbj7Cqhbb06EUH+JF05Fn4qaSdpLVH2/4CfDXuopLNBuMAAAAASUVORK5CYII="
                           alt="customer" />
                      <span>专属业务经理</span>
                    </div>
                  </div>
                  <div class="person-content">
                    <span class="notLogin">登录后可查看~</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="userpanel"
                 v-else>
              <div>
                <a href="javascript:;"
                   class="logout"
                   @click="outLogin">退出</a>
                <div class="userpanel-info"
                     style="text-align: left; padding-bottom: 0px;">
                  <a href="javascript:;">
                    <span class="userpanel-headimg"
                          style="border-color: rgb(255, 255, 255); float: left;">
                      <img src="data:image/png;base64,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"
                           alt="avtr">
                    </span>
                    <span class="ellipsis">hi, {{$store.state.user_name}}</span></a></div>

                <div class="userpanel-dtl">
                  <!-- <a href="https://www.gpyh.com/personalCenter/growthValue"
                     title="铜牌会员"
                     class="i-level5"></a> <a href="https://www.gpyh.com/member/member"
                     class="i-vip-off"></a>  -->
                  <a href="javascripi:;"
                     style="display:inline-block;margin-left:15px">账户金额：{{$store.state.balance}}</a>
                </div>
                <div class="person-wrapper">
                  <div class="person-title">
                    <div class="person1"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABPElEQVQokXWSvyuFYRTHP+/1owglRTYpxaaUiMVm8Qfcu5lsd2E1WGTCYsfMZqF00x2IEhbUpSyUFEJk8DHch55er1On83Se7/me53uek6hE1gYsA73AK1ALNAB7wHQMTKLCQWAbWA/xHkiAdmAK6AGGgScAVNQO9U6dVvNqWX1WH9QNdURdVfcD/rdwUd1RV/zfZtSzQEyitgBloBFoBi6BIaA+SDA8+Qs4DPkC6mbE+pjRaU4thvNniEeolQzws3qgLgUpNepHdH+Beh0ljtUxtflnCJHvRrhKDjiNvmcNKAEv/LW3kL8FSqhNam/QepXR6cev1Al1Xu3LhQ25APKBdTLVKQHGgSJQB7QC57kI8AmMAu+pQoEboDOQLqRXLrYuYCvoLwP9VPd2Frir0mXr6Q7TO1EL6kAa8w3vTYf5yiZ2yQAAAABJRU5ErkJggg=="
                           alt="kefu"> <span>专属客服</span></div>
                    <div class="person2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA70lEQVQokX2RsU7DQBBEJ8FYtHEikx5Elza0SIj0NPxA8hlQp6Ch8Qdg5O/wJxDSRKJAShcjDKIiUopHwVqyj4tHOmn2Zkd3OytAzukDKfAJfAGPwMDtc00B8Mx/vACHbcZrj6nCTb23qybOtB8n9cI1vrYY3xqVZ8bFnhnDthllCabAt50nIG5L9Ri4AyZWj4Cx8Svg1noaxkugtG9ldvcAJMYz0z6Ai8o45G/ZFUrbWQG8Gy8dPQ4kTSX1anlFks4lJZJC45GjzwTknhTvgQN7be7RcwEbj7Cqhbb06EUH+JF05Fn4qaSdpLVH2/4CfDXuopLNBuMAAAAASUVORK5CYII="
                           alt="customer"> <span>专属业务经理</span></div>
                  </div>
                  <div class="person-content">
                    <div class="person1-content"
                         v-for="(item,index) in service"
                         :key="index">
                      <span>{{item.name}}</span>
                      <div>{{item.number}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 新闻快讯 -->
            <div class="news">
              <div class="news-title">
                <span class="cursorPointer"
                      :class="newsTypeId == 3 ?  'tabActive':''"
                      @click="newsTypeId = 3"><b>快讯</b></span>
                <span class="cursorPointer"
                      :class="newsTypeId == 2 ?  'tabActive':''"
                      @click="newsTypeId = 2"><b>行业资讯</b></span>
                <span class="to-morenews">
                  <router-link tag="a"
                               :to="{path:'/newsCenter',query:{id:newsTypeId}}">更多</router-link>
                </span>
              </div>
              <ul class="news-list">
                <li class="ellipsis fontSize12"
                    v-for="(item,index) in news"
                    :key="index">
                  <router-link tag="a"
                               :to="{path:'/newDetail',query:{id:item.id}}">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGExYWQ3Yy04N2RhLTlmNGEtYTU3Ni1jM2IyNjMyNTcwYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzRGMTM4Mzc1RDA2MTFFOUJCMzFFNTMxN0IzQjNERDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzRGMTM4MzY1RDA2MTFFOUJCMzFFNTMxN0IzQjNERDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTNkNTg4MzgtYmUxYi03YjQzLTk0ZGItYjdjM2I5MGZiMDA2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDQ5NmI3MjYtNzJhMC0yOTRlLTkxMDYtYWMxNmJhYjRiZGY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HRrj6AAAATtJREFUeNqU0s8rw3Ecx/HPZpEkKxRFTX5eKXJQXJWT5LCrxWntovwBcnLxB+CAHHDYZQrHNTk4uDhRfpTZSjhYbeXX81Ov1af1meZTj9qn7z6vz/vz/nwChWEzbYzZQqf533jGQoCAbMXiFzxixLPoEyU0lUNCzuJX3GEPmzhFPdqQwgWO0YU0mu1aW8GPAo6wqB0aUNBOK1hFAmOYQku5pJBT3hyucK0qOrCts7ZizdcIN2AfZ7A9mcEHdtCt4y05/51EtDKgz3YVt1jHBhrxgG+8IYkhjPoqyOMQ75on9X0c7ThAWDvHfAG9GMQXLrVLHYoK8I6g89s2ahcDmtuyz3GDnloCMph33sWyHtMJJqoFuEeY1R33a4G9xriqiFYL8D3lv8a9GhnWPBdUR3M1BkScxU/22n8FGAC/jUKKnDyoHwAAAABJRU5ErkJggg=="
                         style="height: auto; vertical-align: middle; display: none;" />
                    <span class="posiArti">{{item.type == 3 ? '【通知】':'【行业资讯】'}}{{item.title}}</span></router-link>
                </li>
              </ul>
            </div>

            <!-- 快捷方式 -->
            <!-- <div class="service">
              <router-link tag="a"
                           to="/payRecord"
                           class="hover-animate">
                <div class="d1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAMAAAAhxq8pAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABNVBMVEVWktY8d7ptqe7///9ppeploeVgnOBbl9tRjNBMh8tGgsVBfMB9uv99uv83crUybbAtaKspY6Z7t/1loeVgnOBGgsVBfMAkX6F4tPpgnOBbl9tBfMA8d7ogW511sfZbl9tRjNBBfMA3crUcV5lxrfJWktZRjNBMh8tGgsVBfMA8d7o3crUybbAZU5VppepMh8tGgsVBfMA8d7o3crUybbAZU5VloeUWUJJgnOATTY9bl9sSTI5WktYSTI5Mh8sSTI5GgsUSTI5BfMA8d7oSTI4STI43crUybbAtaKsSTI4STI59uv97t/14tPp1sfZxrfJtqe5ppeploeVgnOBbl9tWktZRjNBMh8tGgsVBfMA8d7o3crUybbAtaKspY6YkX6EgW50cV5kZU5UWUJITTY8STI4AAAAEFk5TAAAAS3RSTlMAAAAAAAAAAAAAAABJ5uZJ5uayCnR0CbN/Mzg4M4BNjaytjU0Z+TUGZGQGNvkZ5u5nEBBo7uays3+ATE0ZGfHzra0o7+8oJ63y8icm6/WxAAAAAWJLR0RmLNTZJQAAAAd0SU1FB+QCHA8oK9uzWKQAAAC9SURBVBjTZc1lUwJRFAbgAwfppVsFpBsJAUWlpLtLUvj/f8G9d4aZ3eXrM2+Amun2+oPhaDyZzuaL5Wq90Wjhzra/OmDubKcHAzWjiZjZQmxvBRvN2R0k9/hE7PAMTtp1gXu5ehF5iB294KN7/kAwFI5EY8ROcRAn6EfyNZXOZKm9IUhynF9i5zzCQ0Fgf+8I0g+BXYoIsk+BXb8QQP7NtxIiyBVlnl0rLCqU1RrXfuosKlWiRrN1s3alg4j/iNpZ2Czo+vAAAAAASUVORK5CYII="
                       alt="我的商品" />
                </div>
                <div class="d2">我的商品</div>
              </router-link>
              <a href="javascript:;"
                 class="hover-animate">
                <div class="d1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQxMzNjZC04ZGNmLTIzNGEtOTA0YS00NjUxNGE2Y2RlNWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjhFRDY5QzAyQUNEMTFFQUJGMDA4RDZEODdCOUFGOTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjhFRDY5QkYyQUNEMTFFQUJGMDA4RDZEODdCOUFGOTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkN2YzNTZjLWM3YzYtNGE0Zi04ZTQyLTFmMmMyNzRmODlkYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplMzQxMzNjZC04ZGNmLTIzNGEtOTA0YS00NjUxNGE2Y2RlNWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47ExinAAACIklEQVR42ozUv2sUQRTA8dnVIsRaCSr2OSJIPNDigmAjRFBMoekiBmxEgiKxEDurCOIfYC5pxATCYYzmQP8ASQg5CxMbK38QLBQsjCTzZtfvuxu9zXI37sK793aG+ezMzexG91+nJkkSk7jEuMQZ53yIlMTJJfKQiPQRu2Jly4pdpX4u1m5Qm/q90yZ77e+A9YM8BDtPNvI3rBgFqC+APaBepu0OxocsGOewMZD1AEZtW7WVYRG7Xrn75uoeMINdAZkB6ymAcU9tpYdcLU+8GG2DLawEUgWLAtht6sO0nQOZth6lL6JveuD6fKkNikyB9QawGvVj3RSQt2AVycya3Mv4KQWjm/M/TnDTCGAfqcu0/fTLfEYezWCG8c3sxA3G3IwEsN/UlzPYjQDGXycjMVg5sAETtDU8ViI/CmC6F+WYhqNdsBXaFj2mG7BJ3yH6ql0wjSNx4GicAvkG9pl8wPedIY91wZpvXMzAL4FzpnmFvl/08QA2xMm+bhjxNQZYC2D6oCf0HSMv6dEKYCZN0zVdci2AfaJPZ/gS7OB/MD2GNZZs34G96oDprJ+SF8COF8CWvy/dasR+ZpMg2zksFf10OTlbANsmJpuvnp/ZJtg4Oc2cswisUgDTn3Fmt9EC28ucY/A1sJ3AOctjOx6b+/e1yS1zljwIVi+A1YmTYDN7vti5r4bOTN+IYbABsItAQ0Qf0C6xBbbKuEXivelw/RFgAFVXbdM/pHsaAAAAAElFTkSuQmCC"
                       alt="快速下单" />
                </div>
                <div class="d2">快速下单</div>
              </a>
              <a href="javascript:;"
                 class="hover-animate">
                <div class="d1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQxMzNjZC04ZGNmLTIzNGEtOTA0YS00NjUxNGE2Y2RlNWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REE3NTQ0OUYyQUNEMTFFQUI5RDlEQTY0RjRCNTlDMEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REE3NTQ0OUUyQUNEMTFFQUI5RDlEQTY0RjRCNTlDMEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkN2YzNTZjLWM3YzYtNGE0Zi04ZTQyLTFmMmMyNzRmODlkYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplMzQxMzNjZC04ZGNmLTIzNGEtOTA0YS00NjUxNGE2Y2RlNWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6VvoV6AAABp0lEQVR42pzUvUvDQBgG8IuUuugoGBcXOwjFxUUFJyno4CJoFxEhXRQsCCqKoCIIHcRNELGIi2Dpog4O7Saog/9Bu3cQRxHuo+dztTHX9ppeDTwkIblf3je5nCOlJO22nYfvE875FhJFCOeMMsZOr73h/XZjekjI1oQRYFEkHTbG8Ss8KJC5qqhmhRCuEArQU8OCUFrbU4Y9ZRXGqPecSTw1VPhPDMfUxXnWdyL+gY6dLfQ7xGKb3i3I+oNcAxhUtX77IS0qa7je8lG6bLPhOtfASCvIyOXKkFXLY2t5qTDG24K/T1y+KEvbyhSmxhpa7r5NH9PBvwr1m+82Ro0tj6fvpQkToSAqm8+8S9vKFIYp19qyZZs5YHFAvUgcWE5hOhhU2BnLA9sGdIVMAnsFlFIYft8lY4Ud2jwClEUSwPoAJZAbYMfG1cbinZWQCf+d1SubwtCSEbT4ADFgbxqmhr0gMTPY+WseAvKQIrAvDCkiq8iMDurTpqJWjZCpsYhUgakFtoyMILPIOeKawJRa14ANmuZZvc0kbk02zfeBz8fNPf/kR4ABALbSEt2k97kbAAAAAElFTkSuQmCC"
                       alt="标准查询" />
                </div>
                <div class="d2">标准查询</div>
              </a>
              <a href="javascript:;"
                 class="hover-animate">
                <div class="d1">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzQxMzNjZC04ZGNmLTIzNGEtOTA0YS00NjUxNGE2Y2RlNWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZDMUI3OTcyQUNEMTFFQThCNzJCRUYyN0Q3QjY5NEEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZDMUI3OTYyQUNEMTFFQThCNzJCRUYyN0Q3QjY5NEEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRkN2YzNTZjLWM3YzYtNGE0Zi04ZTQyLTFmMmMyNzRmODlkYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplMzQxMzNjZC04ZGNmLTIzNGEtOTA0YS00NjUxNGE2Y2RlNWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6t6mxqAAABtklEQVR42qzUvUvDQBgG8GvpFFwqGHCzqwqiNrpW6aitH6uj7uokVDc7CX4s4n8gOFi0uojgbFUcRFwEdXbudHepz5teNE3vLh08eHgTmvx476NJ7dy0mO/77UjJZGfmhRAbUgoPlSEPyD5yJTine1bfyrPoSFuwXbxwCWwGtU+FruvA6DfGBWfxkTZgc3ihAoypzv7S7qwCjLrXgN0YvbBpwYLOaCkE14AaDFXkEzDc0zPcDiqM9YCh8pR2ygbsMQELd1wPajo7SMB+n+kCDdOko1G1YNXgGX2HxjXbBlZGvQPWBNYMroUo0W9BIxowY8BGgdFZ9IBlgX3jmmbjImvIGLALIcVLHEytnLxHsRHUQ2DF2DTfkBYyHHYGDFXeYg/Wv05XXzvWUGGzqA0NRjlHajGMTkcRS9YYXD4udYKcj9P/FpijwZjCajEs2Ewpfcf35dlA+WgimPLC3jMd0HtgngH7RHIK+wA2FMHwYZHh1+oJnkebUrBgFBdYQXXmGjBqbhIpZIAtWjBaMwfYtZqmY8DCsUQdTluwcM0cS2fRMZUGlkvAWI8YjRx2mWf/CaPR/yPAAKGZ8957ZtJTAAAAAElFTkSuQmCC"
                       alt="我要供货" />
                </div>
                <div class="d2">我要供货</div>
              </a>
            </div> -->
          </div>
        </div>
      </div>
      <!---->
      <!-- 选项卡 -->
      <div class="ctg-filter">
        <div class="wrap">
          <el-tabs class=""
                   type="border-card"
                   @tab-click="handleClick">
            <el-tab-pane v-for="item in workwith"
                         :key="item.id"
                         :label="item.class_name">
              <div class="ctg-filter-pan active">
                <div class="ctg-filter-fld">
                  <div class="td"><span class="fld-name">分类</span></div>
                  <div class="td">
                    <ul id="material-group-ul"
                        class="fld-list jingujian">
                      <li :class="typeCurrent == 0 ? 'active' : ''"
                          @click="onClick('1',0,[])">
                        <div class="fld-it-inner">
                          <div>全部</div>
                        </div>
                      </li>
                      <li class=""
                          v-for="(item,index) in goods_class_total"
                          :class="typeCurrent == index+1 ? 'active' : ''"
                          :key="index"
                          @click="onClick('1',index+1,item.total_id)">
                        <div class="fld-it-inner">
                          <div>{{item.good_class_name}}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="ctg-filter-fld">
                  <div class="td"><span class="fld-name">材质大类</span></div>
                  <div class="td">
                    <ul id="fastener-standard-ul"
                        class="fld-list jingujian">
                      <li :class="current == 0 ? 'active' : ''"
                          @click="onClick('2',0,[])">
                        <div class="fld-it-inner">
                          <div>全部</div>
                        </div>
                      </li>
                      <!-- goods_class_type_item -->
                      <li class="item"
                          v-for="(item,index) in goods_class_type_item"
                          :class="current == index+1 ? 'active' : ''"
                          :key="index"
                          @click="onClick('2',index+1,item.item_id)">
                        <div class="fld-it-inner">
                          <div>{{item.type_item_name}}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <!--  -->

      <!-- 内容一 -->
      <div class="ctg-floors"
           style="min-height:800px">
        <div class="wrap">
          <!-- 中心内容 -->
          <div id="mallCatalogDiv">
            <!-- 单个分类 -->
            <div class="ctg-content floor"
                 v-for="item in goodS"
                 :key="item.total_id">
              <!-- 分类名称 -->
              <div class="ctg-head"
                   v-if="item.class_type">
                <img src="//p5.gpyh.com/webnew/img/category/5/44e1c211-be6c-448b-a6c0-76179daa8277.png"
                     class="categoryImg" />{{item.good_class_name}}
              </div>
              <!-- 小分类 -->
              <div v-for="classTypeData in item.class_type"
                   :key="classTypeData.type_id">

                <div class="ctg-body"
                     v-for="classType in classTypeData.class_type_item"
                     :key="classType.item_id">
                  <span class="ctg-body-name">{{classType.good_class_type_item}}</span>
                  <div class="ctg-goods-list">
                    <div class="ctg-goods hover-animate"
                         v-for="(good,index) in classType.class_type_item_standard"
                         :key="index">
                      <el-carousel height="122px"
                                   :autoplay=false
                                   style="display:block;border:1px solid #bed1e5"
                                   indicator-position="none">
                        <el-carousel-item v-for="(img,index) in good.show_img"
                                          :key="index">
                          <router-link tag="a"
                                       :to="{path:'/goodlist',query:{gid:good.item_id,total_id:item.total_id,standard_id:good.standard_id}}">
                            <img v-lazy="host+img"
                                 :alt="good.img"
                                 :title="good.item_name"
                                 style="display:block;margin:0 auto;height:120px;width:120px" />
                          </router-link>
                        </el-carousel-item>
                      </el-carousel>
                      <div class="ctg-goods-name1 ellipsis">
                        <a href="javascript:;">
                          <b>{{good.factory_name + good.item_name}}</b>
                        </a>
                      </div>
                      <div class="ctg-goods-name2 ellipsis">
                        <span style="display: none;">{{good.factory_name + good.item_name}}</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import banner from '../../common/banner';
import makeSign from '../../api/makeSign'
import indexItem from '../../api/indexItem'
import Code from '../../api/Code'
import webHelp from '../../api/webHelp'
import urls from '../../api/urls'

export default {
  name: 'appMain',
  components: {
    banner
  },
  computed: {
    host () {
      return urls.BWS
    }
  },
  data () {
    return {
      typeCurrent: 0,
      current: 0,
      username: '',
      balance: '',
      class_id: 1,
      total_id: '',
      goodS: [],
      workwith: [],
      classType: [],
      service: [],
      news: [],
      newsTypeId: 3,
      goods_class_total: '',
      goods_class_type_item: [],
      item_id: '',
    }
  },
  methods: {
    // 退出
    outLogin () {
      this.$store.dispatch('logout');
      localStorage.removeItem('car')
    },
    // 获取总分类 
    getRestrictitem () {
      let timestamp = Date.parse(new Date()) / 1000
      let class_id = this.class_id;
      let total_id = this.total_id;
      let item_id = this.item_id;
      let sign = this.$md5(makeSign.makeSign({ timestamp, class_id, total_id, item_id }))
      indexItem.getRestrictitem({ timestamp, class_id, total_id, sign, item_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.goodS = data.data;
        } else {
          console.log(data.msg)
        }
      })
    },
    // 选项卡点击切换事件
    handleClick (e) {
      let index = e.index;
      this.class_id = this.workwith[index].id;
      this.getRestrictitem();
      this.getclassType()
      this.getAllcategory(this.workwith[index].id)
    },
    // 获取分类
    getclassType () {
      let timestamp = Date.parse(new Date()) / 1000
      let class_id = this.class_id;
      let s = this.$md5(makeSign.makeSign({ timestamp, class_id }))
      let formData = {
        timestamp: timestamp,
        sign: s,
        class_id: class_id
      }
      indexItem.getCategory(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.classType = data.data
        } else {
          console.log('error')
        }
      })
    },
    // 获取工配类型
    getWorkWith () {
      let timestamp = Date.parse(new Date()) / 1000
      let sign = this.$md5(makeSign.makeSign({ timestamp }))
      let formData = {
        timestamp,
        sign
      }
      indexItem.getWorkWith(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.workwith = data.data
        } else {
          console.log('error')
        }
      })
    },
    //新闻 通知
    getNewsFlash () {
      let type = this.newsTypeId;
      let timestamp = Date.parse(new Date()) / 1000;
      let page = 1;
      let limit = 6;
      let sign = this.$md5(makeSign.makeSign({ timestamp, type, page, limit }));
      webHelp.getNewsList({ timestamp, page, limit, sign, type }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.news = data.data;
        } else {
          console.log('error')
        }
      })
    },
    //获取客服电话
    getService () {
      let timestamp = Date.parse(new Date()) / 1000;
      let platform = 1;
      let sign = this.$md5(makeSign.makeSign({ timestamp, platform }))
      let formData = { timestamp, sign, platform };
      indexItem.getService(formData).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.service = data.data.mobile
        } else {
          console.log('客服获取失败--' + data.msg)
        }
      })
    },
    //获取选项卡项目
    getAllcategory (calssId, totalId, itemId) {
      let timestamp = Date.parse(new Date()) / 1000;
      let class_id = calssId;
      let total_id = totalId;
      let item_id = itemId;
      let sign = this.$md5(makeSign.makeSign({ class_id, total_id, timestamp, item_id }));
      indexItem.getAllCategory({ timestamp, sign, class_id, total_id, item_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.goods_class_total = data.data.goods_class_total
          if (data.data.goods_class_type_item) {
            this.goods_class_type_item = data.data.goods_class_type_item[0]
          }
        } else {
          console.log(data.msg)
        }
      })
    },
    onClick (type, index, data) {
      if (type == 1) {
        this.total_id = ''
        this.typeCurrent = index;
        data.forEach(v => {
          this.total_id = v
        });
        this.getAllcategory(this.class_id, this.total_id, this.item_id)
      } else {
        this.current = index
        this.item_id = ''
        data.forEach(v => {
          this.item_id = v
        });
        this.getAllcategory(this.class_id, this.total_id, this.item_id)
      }
    }
  },
  mounted () {
    // 
    this.getService()
    this.getWorkWith()
    this.getclassType()
    this.getRestrictitem()
    this.getNewsFlash()
    this.getAllcategory(this.class_id)
    this.username = sessionStorage.getItem('user_name');
    this.balance = sessionStorage.getItem('balance');
  },
  watch: {
    newsTypeId () {
      this.getNewsFlash()
    },
    total_id () {
      this.getRestrictitem()
      this.item_id = 0
      this.current = 0
    },
    item_id () {
      this.getRestrictitem()
    }
  }
}



</script>

<style scope>
.fixed {
  position: fixed;
}
.app-main {
  color: #555;
}

.ctg-goods-name1 > a > b {
  color: #555;
}

a {
  color: #555;
  text-decoration: none;
}

a:hover {
  color: #409eff;
  text-decoration: none;
  cursor: pointer;
}
.active {
  display: block;
}
.activeColor {
  background: #124c8e !important;
  color: #fff !important;
  border-color: #124c8e !important;
}
.ctg-goods {
  font-size: 12px;
}
.entry {
  margin-top: 0 !important;
}
.entry :nth-child(2),
.entry :nth-child(3) {
  margin-left: 0 !important;
}
.news-title > span:first-child {
  border-bottom: 0;
}
.logout {
  position: absolute;
  top: 20px;
  right: 15px;
}
</style>
