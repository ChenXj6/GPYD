<template>
  <div data-v-2c1fbd4d=""
       class="layout-common">
    <section data-v-985e2336=""
             data-v-2c1fbd4d=""
             class="app-main">
      <div data-v-985e2336=""
           class="register-passport">
        <!-- header -->
        <div class="header-passport">
          <div class="header-logo">
            <div class="header-warpper">
              <div class="header-l">
                <router-link tag="a"
                             to="/">
                  <img src="../../assets/image/login.png"
                       alt="logo_main" />
                </router-link>
              </div>
              <span class="line"></span>
              <div class="headR">
                <div class="headR-l"><span>欢迎注册</span></div>
                <div class="headR-r">
                  <span>已有账号,现在 </span>
                  <el-button type="primary"
                             style="margin-left:5px;"
                             @click="$router.push({path:'/login'})"
                             plain>登录</el-button>
                </div>

              </div>
              <!-- <div class="headR">
                <div class="headR-l"><span>欢迎注册</span></div>
                <div class="headR-r">
                  <div class="header-r-r">
                    <span>没有账号,</span>
                    <a href="/passport/register?t=1591951304701"
                       class="router-link-active">请注册</a>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>

        <!-- nav -->
        <div class="register-content">
          <div class="register-content-l">
            <!-- 注册表单 -->
            <el-form :model="regForm"
                     ref="regForm"
                     :rules="rulesReg"
                     label-position="left"
                     style="margin-top:60px">
              <el-form-item label="用户名"
                            label-width="100px"
                            prop="user_name">
                <el-input v-model="regForm.user_name"
                          placeholder="4-20位长度"
                          style="width:320px;" />
              </el-form-item>

              <el-form-item label="密码"
                            prop="password"
                            label-width="100px">
                <el-input v-model="regForm.password"
                          placeholder="6-20位长度"
                          type="password"
                          clearable
                          show-password
                          style="width:320px;" />
              </el-form-item>
              <el-form-item label="确认密码"
                            prop="checkPwd"
                            label-width="100px">
                <el-input v-model="regForm.checkPwd"
                          placeholder="确定密码"
                          type="password"
                          clearable
                          show-password
                          style="width:320px;" />
              </el-form-item>
              <el-form-item label="手机号"
                            label-width="100px"
                            prop="mobile">
                <el-input v-model="regForm.mobile"
                          placeholder="用来接收验证码"
                          style="width:320px;" />
              </el-form-item>
              <el-form-item label="邀请人号码"
                            label-width="100px"
                            prop="master_mobile">
                <el-input v-model="regForm.master_mobile"
                          placeholder="选填"
                          style="width:320px;" />
              </el-form-item>
              <el-form-item label="短信验证码"
                            prop="verification_code"
                            label-width="100px">
                <el-input v-model.number="regForm.verification_code"
                          placeholder="短信验证码"
                          class="inputStyle" />
                <el-button :type="colorClass ? 'primary' : 'info'"
                           :disabled="disabled"
                           @click="saveCode"
                           style="width:32%;height:40px;">{{phoneCodeText}}</el-button>
              </el-form-item>
              <div class="item agreement">
                <el-button type="primary"
                           class="regBtn"
                           @click="register('regForm')">注册</el-button>
                <p class="regBtn-bottom">
                  <span style="">注册即同意</span>
                  <a href="javascript:;"
                     @click="centerDialogVisible = !centerDialogVisible">《工品易达注册协议》</a>
                </p>

              </div>
            </el-form>
          </div>
          <!-- 右侧图片 -->
          <div class="login-content-r">
            <img src="../../assets/image/activities.jpg"
                 alt="display"
                 class="imgDisplay" />
          </div>
        </div>
        <!-- 注册协议 -->
        <el-dialog title="工品易达注册协议"
                   :visible.sync="centerDialogVisible"
                   width="60%"
                   center>
          <div id="agreementContent"
               class="reg-ag">
            <h4>厦门工品易达商城用户注册协议</h4>

            <p>本协议是您与厦门工品易达商城（以后简称工品易达）所有者之间就工品易达商城服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击"同意并继续"按钮后，本协议即构成对双方有约束力的法律文件。</p>

            <h4>第1条 本站服务条款的确认和接纳</h4>
            <p>本站的各项电子服务的所有权和运作权归工品易达所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其它规定。</p>

            <p>1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。</p>

            <p>1.3工品易达保留在中华人民共和国法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。
            </p>
            <h4>第2条 本站服务
            </h4>
            <p>2.1工品易达通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。
            </p>
            <p>2.2用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。
            </p>
            <h4>第3条 用户信息
            </h4>
            <p>3.1用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且工品易达保留终止用户使用各项服务的权利。
            </p>
            <p>3.2用户在本站进行浏览、下单购物等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本公司将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。
            </p>
            <p>3.3用户注册成功后，将产生用户名和密码等账户信息，您可以根据本站规定改变您的密码。用户应谨慎合理的保存、使用其用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站，情节严重者可立即向公安机关报案。
            </p>
            <p>3.4用户同意，工品易达拥有通过邮件、短信电话等形式，向在本站注册、购物用户、收货人发送订单信息、促销活动等告知信息的权利。
            </p>
            <p>3.5用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。
            </p>
            <p>3.6用户同意，工品易达有权使用用户的注册信息、用户名、密码等信息，登陆进入用户的注册账户，进行证据保全等。
            </p>
            <h4>第4条 用户依法言行义务
            </h4>
            <p>本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：
            </p>
            <p>4.1不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；
            </p>
            <p>4.2不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；
            </p>
            <p>4.3不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；
            </p>
            <p>4.4不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；
            </p>
            <p>4.5不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；
            </p>
            <p>4.6不得利用在本站注册的账户进行牟利性经营活动；
            </p>
            <p>用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。
            </p>
            <p>本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。
            </p>
            <p>若用户未遵守以上规定的，本站有权作出独立判断并采取暂停或关闭用户帐号等措施。用户须对自己在网上的言论和行为承担法律责任。
            </p>
            <h4>第5条 商品信息
            </h4>
            <p>本站上的商品价格、数量、是否有货等商品信息随时都有可能发生变动，本站不作特别通知。由于网站上商品信息的数量极其庞大，虽然本站会尽最大努力保证您所浏览商品信息的准确性，但由于众所周知的互联网技术因素和公司内部管理等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解；
            </p>
            <h4>第6条 产品标准、单价的说明：
            </h4>
            <p>6.1工品易达承诺严格依照双方约定的材质生产供货，绝不弄虚作假！
            </p>
            <p>6.2若客户购买的是标准品，则检验标准以各相关国家标准为准。
            </p>
            <p>6.3若为特殊品，则以双方提供的书面图纸或以客户提供经工品易达确认过的图纸为标准来生产验收。
            </p>
            <p>6.4若客户提供的是样品，工品易达亦会根据样品绘制图纸后请客户确认，并以此为标准来生产验收。
            </p>
            <p>6.5有特殊质量要求的产品请务必在订单中详细说明，以减少双方不必要的损失。
            </p>
            <p>6.6标准规格的产品价格在工品易达的商城中都已列明。届时只须按显示的价格计算即可。若是特殊规格之产品第一次购买时则以工品易达的书面报价为准。报价在报价有效期内有效。没有特别注明有效期的则报价有效期默认为从报价之日起10天内有效。价格经客户同意后，工品易达会在商城中给该产品赋予一个合理的售价，第二次购买时则商城会根据当时的市场行情自动计算销售价格，客户可以像正常品一样的下单采购。
            </p>
            <h4>第7条 付款方式的约定：
            </h4>
            <p>7.1经双方友好协商双方的结款方式会在正式的长期销售协议中签定。届时双方必须严格按签订的销售协议来执行，在没有跟工品易达签订正式销售协议之前，所有的货款都必须在先支付的前提下才能出货。同时若有签订正式的销售协议而客户没有按约定的时间付款，则客户在商城中下的订单工品易达有权拒绝接受和发货。
            </p>
            <p>7.2付款可采用线上和线下两种方式，线下付款工品易达只接受电汇，转帐支票，银行本票等即时到帐的方式付款，而不接受远期银行承兑汇票。若客户一定要支付工品易达承兑汇票的，需经得工品易达同意，同时用户需支付由此产生的利息费用（利息的计算方式由工品易达参照各大银行公布的当期利率计算而得）。
            </p>
            <h4>第8条 交货及验收方式：
            </h4>
            <p>8.1通常情况下，工品易达所答应的交期是指发货的日期。常用的标准规格工品易达大部分都已备有现货。没有现货的标准品和非标产品的交期依双方协商的为准，商城中提供的交货日期为参考日期，不做正式约束。另需特别说明的是因物流条件所限，浙江、江苏、上海地区的客户当日下单就须出货的定单请务必于下午二点前下好订单，二点后所下的定单都将留到第二天再做处理。除上述两省一市的客户以外，其余省市的客户当天的订单都将到第二天发出。
            </p>
            <p>8.2货物到达客户手中后，客户有义务对收到货物的质量、数量及时验收。
            </p>
            <p>8.3工品易达接受货物在第一买受方时提出的质量与数量客诉。原则上不接受货物经由第一买受方转手到达第二方以后后再提出的客诉。
            </p>
            <p>8.4若是产品数量上的问题，请客户在货物到达7日内提出，以便工品易达及时调查并修改相对应的送货单据，以减少月底对帐时的困扰。若产品有质量问题，客户应在收到货物之日起10日内向工品易达书面提出，以便工品易达能及时解决，工品易达原则上不接受超过此日期的质量投诉。
            </p>
            <h4>第9条 包装及运输方式的约定：
            </h4>
            <p>9.1为节约货运成本，工品易达通常采用零担托运的方式发货，届时由客户自行到托运站提货。若有特殊情况需要快递或则按双方协商的其它方式发货的，由此造成的费用支出由客户自行承担。另因运费成本高企，若调货不满800元的工品易达不承担运费。
            </p>
            <p>9.2工品易达最少出货单位为工品易达的最小包装单位，不接受拆合（袋）出货。若是定制产品，交货数量按双方协商为准。没有特别说明的工品易达默认的交货公差为-10%到+10%之间。
            </p>
            <h4>第10条 不可抗力情况说明：
            </h4>
            <p>10.1不可抗力包括因战争、动乱或其他非当事双方责任造成的爆炸、火灾、台风、雨雪、洪水、地震等自然灾害以及政府关于产品的强制性政策规定等；
            </p>
            <p>10.2任何一方由于不可抗力原因不能履行合同时，应在不可抗力事件发生后及时向对方通报，以减轻可能给对方造成的损失，在取得有关机构的不可抗力证明后，允许延期履行或修订合同，并根据情况可部分或全部免予承担违约责任；
            </p>
            <h4>第11条 违约与争议：
            </h4>
            <p>11.1工品易达无故不按协议约定向客户供货的，客户有权要求工品易达按未供货部分金额的 10 %支付违约金。
            </p>
            <p>11.2客户不按协议约定及时支付货款的，工品易达有权要求客户按拖欠货款金额0.5%/天支付违约金；
            </p>
            <p>11.3客户拖欠货款超过 5 天的，工品易达除有权要求客户按上述约定支付违约金外，还有权立即停止供货；客户拖欠货款超过 30 天的，工品易达除有权要求客户按上述约定支付违约金外，还有权解除合同，同时可向合同履行地的人民法院起诉。
            </p>
            <p>11.4当事双方若发生争议应友好协商解决，协商不成的，可向合同履行地的人民法院起诉。
            </p>
            <p>11.5本协议仅规定当事双方合作之准则，具体交易内容以双方确认的定单内容为准。除非针对单个合同内容有另行约定之外，均适用本协议。
            </p>
            <h4>第12条 所有权及知识产权条款
            </h4>
            <p>12.1用户一旦接受本协议，即表明该用户主动将其在任何时间段在本站发表的任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等信息内容）的财产性权利等任何可转让的权利，全部独家且不可撤销地转让给工品易达所有，用户同意工品易达有权就任何主体侵权而单独提起诉讼。
            </p>
            <p>12.2工品易达是本站的制作者,拥有此网站内容及资源的著作权等合法权利,受国家法律保护,有权不时地对本协议及本站的内容进行修改，并在本站张贴，无须另行通知用户。在法律允许的最大限度范围内，工品易达对本协议及本站内容拥有解释权。
            </p>
            <p>12.3除法律另有强制性规定外，未经工品易达明确的特别书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，工品易达有权追究其法律责任。
            </p>
            <p>12.4本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是工品易达或其内容提供者的财产，受中国和国际版权法的保护。本站上所有内容的汇编是工品易达的排他财产，受中国和国际版权法的保护。本站上所有软件都是工品易达或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。
            </p>
            <h4>第13条 责任限制及不承诺担保
            </h4>
            <p>除非另有明确的书面说明,本站及其所包含的或以其它方式通过本站提供给您的全部信息、内容、材料、产品（包括软件）和服务，均是在"按现状"和"按现有"的基础上提供的。
            </p>
            <p>除非另有明确的书面说明,工品易达不对本站的运营及其包含在本网站上的信息、内容、材料、产品（包括软件）或服务作任何形式的、明示或默示的声明或担保（根据中华人民共和国法律另有规定的以外）。
            </p>
            <p>工品易达不担保本站所包含的或以其它方式通过本站提供给您的全部信息、内容、材料、产品（包括软件）和服务、其服务器或从本站发出的电子信件、信息没有病毒或其他有害成分。
            </p>
            <p>如因不可抗力或其它本站无法控制的原因使本站销售系统崩溃或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等，工品易达会合理地尽力协助处理善后事宜。
            </p>
            <h4>第14条 协议更新及用户关注义务
            </h4>
            <p>根据国家法律法规变化及网站运营需要，工品易达有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登陆查阅最新协议；用户有义务不时关注并阅读最新版的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受工品易达网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。工品易达建议您在使用本站之前阅读本协议及本站的公告。 如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。
            </p>
            <h4>第15条 法律管辖和适用
            </h4>
            <p>本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。 如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向有管辖权的中华人民共和国大陆地区法院提起诉讼。
            </p>
            <h4>第16条 其他
            </h4>
            <p>16.1工品易达网站所有者是指在政府部门依法许可或备案的工品易达网站经营主体。
            </p>
            <p>16.2工品易达尊重用户和消费者的合法权利，本协议及本网站上发布的各类规则、声明等其他内容，均是为了更好的、更加便利的为用户和消费者提供服务。本站欢迎用户和社会各界提出意见和建议，工品易达将虚心接受并适时修改本协议及本站上的各类规则。
            </p>
            <p>16.3本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请用户着重阅读。</p>

            <p>16.4您点击"注册"按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。</p>
          </div>
        </el-dialog>

        <!--  -->
        <!-- <div id="layer-newreg" style="display: none;">
          <a title="使用券" href="javascript:;" class="newreg1"></a>
          <a title="查看券" href="javascript:;" class="newreg2"></a>
          <img src="/static/img/64newreg.bb1aec3.png" />
          <i id="newreg-close"></i>
        </div> -->
      </div>
    </section>
    <!-- footer -->
    <div data-v-2c1fbd4d=""
         class="footer-passport">
      <div class="footer-content">
        <div class="icon-wrap">
          <div class="wrap">
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ3OUQyQTAwN0UzMTFFOUJDRDdBNjkxRjc5QUY4QUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQ3OUQyOUYwN0UzMTFFOUJDRDdBNjkxRjc5QUY4QUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DkapOgAAA/VJREFUeNrEl39MjVEYx99bXbdUIiJKJGtmfuTXyq+aFGZaozYaZsN//MEW14/xT5Oujdn43/xhjCUbIgu1Kyo/0jLDRn7MEIt+aFfi9T1vz+HpeN973/KHZ/uc+77nPO89zznPOc9zjkMv0exKMMgAKWAeSAbhoAe8APXgHqjR3Hqr3T912DBgOCgEa8FYG//ZAS6B7TDkQyDlkADte4EbRJq0fQddwAVCWb3QLQBBYM1ADRgBLoD5Sn0V8IIroJkMGARiQTa5KIc6vzVQF4wCD+lPpVwE+6m+r7j1vu8exziU0ahvYHUxxhpy6+8DGRABnoA4ev8CNoNSyyGoBqjicaShvEGLOAv6Xt4cpKhfY523gZl+O7cnC0EYuaoaBg21MmArmEvP3dR5M2s/ACrAdIuRhoJScB4MYy3HmOsc4LSVAYfY8zra21ImgT1gCbgPpiqdO1HeBavASrCeuciHcjnTXgb9VNWAQpomIXXgnDI+sZ/fsIBUCyazzoVfpzD9WmWdvEO5j9UcURfhWzCG6sTUN5hM8khwGyTRu9iC+WR8JtPLRoeVFm4SizqK3sZD71UQ+VR2/syicyEtFH5l+2BQzjoXBs2y7LxXytjzUumCFFZZGWBF/wTp4KlS32b41q0/CPA9X4AZMhJOY5Ves2BFIXkjcNJMhCk6YiAlmOJ4eq839N16h6InXPiNwnei/DCZKTSZGCD2bxF9EE9rJEHRiaQMmUDk085Rg1Ynyo/sG8MAF1PpMjGg28hsmtZKmU7Sw3S+Km2nwGMLN3TTr0u6wMcaw00+ELH2KMHlMtvfEzC6FpuR0ckNCaEFlUOVYi8/svgwltYDzxtSJsL/wcq+N9uGYoAx7NxgGNCkxO0zJgvsLMjzM6oapaPnKBeYZL80dnZ4Kf+8kSlkWpwZ8vqZgJJYUuNSwJ6r5Z83UiSMo5WbouR94atcsIXCsFgTP8AcI+//2V6dLLR7Tc8OvblCSgUPxTvFxLFckGZjlOKQsoKeozDd7QHOBbtQHvwdJ9x6Kk9Gh9luEA2rbRgQqSxQf53Hsc6FbFOzoZjSHUrITOzHebItgO5V9lyO0d8xOw8cp3O9DL8PTCKepoyizDg7+Dt+exzXlVS9wd+ZcAjFBTmlIvptohNy/86EHofIMScodEtZBP0qf2fCdiOlatoneo+mUZb+dQqyHnEMKKbdxTvPVTv3dzOKpVU+W6kX03mTfPqacoCLolsWWEx5nof0TmO3uPXqgVzNiuhm5DRp8zEDIiy+Pwl2W4Zmm3fDeIoTIsWOtuEEH90Ni/tcTv7BAI2lz3SKgDNo2p20hT/ThabOiIomNyBrA3Rd+5/yS4ABAFWRCY8D0na7AAAAAElFTkSuQmCC"
                   alt="point1" />
              <span>13%增税</span>
            </div>
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjBFQUIzMzkwN0U0MTFFOUFEQzNBOTZDQTY0RDY0ODMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjBFQUIzMzgwN0U0MTFFOUFEQzNBOTZDQTY0RDY0ODMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jFIpsAAAA/ZJREFUeNrEV1lsTkEUvkOttS+piiCWB0IoQtAQYk0s8VA8iCWWhiDxoBeJBInlvoiklsS+hwgajQYR+xZLFLWLIJaoXTW2cn0z/3fbMZ3/+v+WmOSbMzN35syZOcucK3zfd/5nSYh5pidqoe4HpAFdgCZAVX79CTwFrgO7gWOO6z+Pha344w14oi7qBUA6UCWOw20HFkOQO2UXwBNjUa8EanLkErAVOAu8BN5zPBFoBKQA44C+Gpc5EMKLXwBPrEM9ib0sYCkYXYxRXa1QzwKmceQIMBzrv8QmgCey1IJIGYeFW8tkYZ4YiHozbycP6Apen/UpFSyL1nPzt0C7Mm8ui+sfRt0euKV4Oc4Jc0oFY/ORqCfSqlPB4Kb1VJ7oEIcQr9XJHeeFop5YahfAEzVQ72BvNBbejsLyEA0xnpsoRD2o2Cg90dQWB5axfxQL9vyBpW/cikA9AehEfRfyxLvAK5dCXMe8ZUoAx5EGPrBEAE9I/55KdukxnOm90a8MbLDMKwBytf48CjAAezaHUI+CGxhEddzE4EPjdMmolwCNtcjXCePSoD4Al4FMjudifQq+yflzgRxDFT7dezJdNCOh2NUiJdNyis7AeGNMBqbebA+jn0vDDVxsFGmehd9aCiANPiMwwm6kJy0LikgH4wSC7QtsrwniCe3iE/st1Old/7uF333SZroXJJG+CTG4QotQ37THyFHh2RN92N4ZxSOk2vJNN6xIJgW2cE36wSLAF0PQH8BQ9m+EGPHjaM+xH6KCLTjdC7aloR2gfXw1BL1Kmszn2VZ+2CKhbNcIUUFHZQeRUpsnlZ6h67m+8v1IGRFyA41NAV6R1glJWvprRniO7VWG0PVpeNI2xkZ5oKqjbmoKEOirS4jUhZYr/GrMSSRdAVRTwaZ0aaYfOhBgE+nMECOsYnlDKhtzAiE7aDHCLEFM2a8zyibtwRRML5VIj+NbYPU92Z6ueZF+Iy2ZIz6zCDCDdHWJABHfzOKH5cYCmYZtJJXP8z7gIN/4U8B84B6FaEh+rdVVu/5eQ//pSjVS5a5/7feMKPJEBv7ZHRMuxJH5JNAbXmNdwyhzGvCFTFC25vpXfndD13+CenaxSkqrIuy9L6I6JobMyubmu4LN7TmhJ+R70Au4rd4I1y8o99+HJ3IYQ/LBLyk8J5T+HtF1G6UrT/Qsx8YtgNPc/KNSbYxZcSJTr1SOLFK+7frv4rCJKQxUsjwAhmD93Xh/TOQPRYYWfDYxH7wLZvnG3Hp0vzSmZw34ZZuyDfvTHNOvWQqzmzTjS77m5/W0CBeUM8BCbHy0fP+GJYLIvH6MukrHaatFP708UEmtvCXXP/93fk7/cfklwAAnW0Tvl+GWaAAAAABJRU5ErkJggg=="
                   alt="point2" />
              <span>量大包邮</span>
            </div>
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENEMjc4QUQwN0U0MTFFOTg5ODlENDdEMTY3QjJFQTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENEMjc4QUMwN0U0MTFFOTg5ODlENDdEMTY3QjJFQTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bziQOwAAAotJREFUeNrsl1+ITUEcx+/sXfmf1p941saGojyIJyLlQXmQ5IEktfsiKzltWZRYg0gUijwID17wjJDCPqw2u6TsPiAS2xaFte0dnzn3d7dpnOOee+9xb2Lq+51zz+/3m9/cmfn95neUMSZTy1aXqXGr+QTqy7bUqgluBzPAoUxg7pczjCr5DGjVAB8D2zzJPbCLiTz9c1ug1Vb4VYRz25aDLnQOp78CWk2DL4M1nuQ0eA98p8/BBlajt/IV0GoT/MJz/lYc7AAdPC8G7hmYB3qw3V/+CmjVCJ8Aaz3JKdCG428RNi3wUTDJedsDWtG/nWwCWk2Ht4ODIOtI7oK9DPSoyIrNsgw2e5KLoAP7vvgJaLUCvgkmOzof5B9cK/HALoOPg6WepJmxzsdNoFf2r9DOgT0YfKkgX7TKIR03+i4wKu4QjkhvHa5CsaUi53lnJ+E54JkzdmwUfJf+I4Z3Usu3gXkDd8qv4SSpeAxLl8VwxFnK1Y7NJ2SdJU5jSnl3gVZj4cdgkff+CJNoq8ZtWPeL83xbUJ3b0CYcrebztBGYcHvsFuQjpErXcWBsbt/3DxckWs0OLx8Sl6TnAXCBlRl2dKx8roSZ1XmYpEhJEgXj4ZcRuivBetFphs9G2C4pFq5JtiAH+iLev3aeB2LsvqYRBUP8k4VSD+RGo8Bd3sBcR8eGaqNsQX2YOwLzLq0oGIJvFNHphrv/+ijIen3hMNmqaIsTBYNhwRKYfpFPhA/IrVeIggdyE/pjq99NYKr0MyXr2cEnwLciJt/kFBs7wW5Pvg7bLuesNHh95BbYKvdzWMkEJifvfoArco8PSm+rpEteudbv6TyREr7QzkgKv1rZh8n/j9OU208BBgCX7NKcd2KWbwAAAABJRU5ErkJggg=="
                   alt="point3" />
              <span>库存充足</span>
            </div>
            <div class="pItem">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ5MTk0NUEwN0UzMTFFOUFCM0JDRDk5RTZGNTRDNzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ5MTk0NTkwN0UzMTFFOUFCM0JDRDk5RTZGNTRDNzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+znsYKwAAA25JREFUeNq0l3tozWEYx3/nOEabSTSaMbLchjVkUcTmlnJvlkhNuURJyVJCFFlq7jVNLn8gd5lS5PKHPyRlLtkIZczmftlpLts5O75PfX/19HN+5/zes3nq0/u+v97L83vf532e5/VFSi0T6QxGg0EgF6SDJPAZ1JAn4K3XCQMe+40Ci0kvD/3PgjPgYryOvjg7kAnKQKHj+yPwDnwFraArFcsBKarfU7AOXE9kB4rAMZCsFpW/ugyqXcaIIvPAbDAfDAPXwE6w0WQHtoBtrH8B68Fxy0zk2HaDiWzfBFOcnfxRBq5Vi8vWDUlgcZEHYBLYzvZk7kZMBeaAvazLVk+nhbdFNoMVrE8DJ90U6AbOsX4XzLXaTw6DEtYX0T7+sQHptAyEQXfQyO/ZYBboRIv3Ij7Oc5s/Y8stkA8+8dZE7FuQwcVF1qjFRUqpQCIiV7WPai8EDSANrASHAmpRix6s3DHJJlDL4wqrY5P6cFAA3vP4/GoHIuC8Y66PsihYzWtZIUfgo6HJtm9VN8CLTOVNucG6FxkMnrGeJxpncXGRIzEG5tIxjVPfMlSM8CrPQRXrBX41oZxNXYyBYsXFdK1OCRvaxkOWY8QGRrJRG2fQL5ZNLl7vDujA8xdCYBeojNL/Mcu0gNrGujgKhBylllQwPsr3YhcFGlh2CVBby+COR5PXYI+aqyMIglMu/e0j84kC9Q6DSkRegv0G/XuyDPoZs0X6tkGBZMP+OSx/+JWrlOSjR4xBTVGM8BvLZkMFcllWBZjHtfDclqhoqP26uNPebKdT2Qidip2I9Fe3wB5Xp26PLTJPnp0j2MGoAiynMtmOAffUgERkIG1Ex5YNdMuZtu8uYzmUKZXTwMRqf4LvPIJW8pvfguwTUoS5SIuaK4kJj8gB8EeH4ytgptrSoBqYwkATMfhzvyOqWgxYhfwJOYpGnZTKEbxhDtjqYoBtkSKVXZfYymkFJKT2Y7IQstpXZjCjtpPTcrecsOE/LC6Pmausv2CeGTMr1jIA7FC2YSIS5o+CE2xX8zaFTZ5m8h5Yxbo8s06DC3HixliwwBG2LzEdazZ9muXQMeWrb/VMKCR8v+KkGbzvWcrL2SmehOSDib4NbZE0eqnBUdQwe9oXz037DJ/n8koaASbwr1PpfsUhfWCmc9+RiseUvwIMACWA0l6sUWKnAAAAAElFTkSuQmCC"
                   alt="point4" />
              <span>正品保证</span>
            </div>
          </div>
        </div>
      </div>
      <div class="link-wrapper">
        <div class="link">
          <router-link tag="a"
                       to="/webhelp">帮助中心&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/payMethod"
                       style="color: rgb(115, 115, 115);">支付方式&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/deliverMethod"
                       style="color: rgb(115, 115, 115);">配送方式&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/aboutUs"
                       style="color: rgb(115, 115, 115);">关于我们&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/newsCenter?id=1"
                       style="color: rgb(115, 115, 115);">新闻中心&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a"
                       to="/webhelp"
                       style="color: rgb(115, 115, 115);">网站地图&nbsp;</router-link>
        </div>
      </div>
      <div class="credit-wrapper">
        <div class="credit"
             style="color: rgb(115, 115, 115);">
          © 2015-2025 www.gpyd.com 厦门工配信息科技有限公司 版权所有

          <a href="http://beian.miit.gov.cn"
             target="_blank">闽ICP备19024395号</a>
          经营许可证编号：苏B2-20170374
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reg from '../../api/loginAndReg'
import Code from '../../api/Code';
import makeSign from '../../api/makeSign'

export default {
  data () {
    //验证确认密码是否输入正确
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.regForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    //验证确认用户名是否输入正确
    var userRule = (rule, value, callback) => {
      let r2 = /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i
      let r3 = /^[a-zA-Z]{4,20}$/i
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        if (!r2.test(value)) {
          if (!r3.test(value)) {
            callback(new Error('用户名只能是字母或字母和数字组合，不支持特殊符号'));
          } else {
            callback()
          }
        } else {
          callback()
        }
      }
    };
    return {
      centerDialogVisible: false,
      regForm: { user_name: '', password: '', checkPwd: '', mobile: '', result: '', verification_code: '', platform: 1, master_mobile: '' },
      disabled: false, //发送验证码按钮是否可以点击
      phoneCodeText: '获取验证码',
      outTime: 60, // 设置发送验证码倒计时时间
      colorClass: true,
      timer: null,
      rulesReg: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: userRule, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i, message: '密码必须由字母和数字组成', trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur', },
        ],
        master_mobile: [
          { pattern: /^1[3|4|5|7|8][0-9]\d{8}$/, message: '请输入正确的电话号码', trigger: 'blur', },
        ],
        verification_code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '请输入正确格式', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    // 获取验证码
    saveCode () {
      if (this.regForm.mobile == '') {
        this.$message('请输入手机号码')
        return;
      }
      let mobile = this.regForm.mobile;
      let timestamp = Date.parse(new Date()) / 1000;
      let send_type = 1;
      let sign = this.$md5(makeSign.makeSign({ mobile, timestamp, send_type }))
      Reg.saveCode({ mobile, send_type, timestamp, sign }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.disabled = true;
          this.colorClass = false;
          if (!this.timer) {
            this.timer = setInterval(() => {
              this.phoneCodeText = this.outTime + 's后重新发送';
              this.outTime = this.outTime - 1;
              if (this.outTime < 0) {
                clearInterval(this.timer);
                this.phoneCodeText = '获取验证码';
                this.outTime = 60;
                this.timer = null;
                this.disabled = false;
                this.colorClass = true
              }
            }, 1000);
          }
        } else {
          this.$message.error(data.msg)
        }
      })
    },
    // 地址选择器
    onSelected (data) {
      this.regForm.address = data.province.value + data.city.value + data.area.value;
    },
    // 提交表单事件
    register (formName) {
      this.Address = ''
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let formData = {};
          let timestamp = Date.parse(new Date()) / 1000;
          delete this.regForm.address;
          delete this.regForm.checkPwd;
          delete this.regForm.result;
          let s = this.$md5(makeSign.makeSign(this.regForm))
          formData = {
            user_name: this.regForm.user_name,
            password: this.regForm.password,
            mobile: this.regForm.mobile,
            platform: 1,
            timestamp: timestamp,
            sign: s,
            verification_code: this.regForm.verification_code,
            master_mobile: this.regForm.master_mobile || 0
          }
          Reg.regist(formData).then(res => {
            let data = res.data;
            if (data.code === Code.CODE_SUCCESS) {
              this.$message.success(data.msg + '，请前往登录');
              this.$router.push({ path: '/login' })
            } else {
              this.$message.error(data.msg);
            }
          })
        } else {
          return
        }
      })
    }
  }
}
</script>

<style scope>
.register-passport .register-content-l .inputStyle input {
  width: calc(320px - 47%) !important;
  line-height: 40px;
}
.el-form-item--small .el-form-item__label .el-input--small .el-input__inner {
  height: 40px;
  line-height: 40px !important;
  color: #333 !important;
}
/deep/input::-webkit-input-placeholder {
  color: #c0c4cc;
}
/deep/input::-moz-input-placeholder {
  color: #c0c4cc;
}
/deep/input::-ms-input-placeholder {
  color: #c0c4cc;
}
.agreement {
}
.regBtn {
  display: block;
  width: 100%;
  margin: 60px 0 20px;
  height: 40px;
}
.regBtn-bottom {
  text-align: center;
  color: #333;
}
.inputStyle {
  width: 68% !important;
}
.register-passport .notSee {
  font-size: 12px;
  width: 42px;
  color: #737373;
  /* cursor: pointer; */
  display: inline-block;
  margin: 0 0 0 10px;
}
.headR {
  width: 835px;
  height: 50px;
  margin: 25px 0 0 50px;
  position: relative;
  top: 30px;
  left: 50px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
  color: #525252;
}
.headR-l > span {
  font-weight: 400;
  font-size: 18px;
}
.headR-r {
  width: 200px;
  color: #333;
  /* background: chartreuse; */
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headR-l>span,.headR-r>span{
  height: 50px;
  line-height: 50px;
}
</style>
