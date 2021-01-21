<template>
      <dl data-v-18047ef4="" class="dpd-hover maincatalog">
              <!-- 标题 -->
              <dt data-v-18047ef4="" class="dpd-refer">
                <i data-v-18047ef4="" class="i-list"></i>所有商品分类
              </dt>
              <!-- 分类 -->
              <dd data-v-18047ef4="" class="dpd-layer">
                <div data-v-18047ef4="" class="maincatalog-sidecata">
                  <!-- 二级分类菜单 -->
                  <div data-v-18047ef4="" class="sidecata-blockname">紧固件</div>
                  <ul
                    data-v-18047ef4=""
                    id="droupDownCategory"
                    class="sidecata-blocklist"
                  >
                    <li data-v-18047ef4="" class="classType" v-for="(item,index) in typeList" :key="index">
                      <router-link tag="a" :to="{path:'/goodlist',query:{gid:item.item_id[0],total_id:item.total[0]}}"
                        data-v-18047ef4=""
                        >{{item.type_item_name}}</router-link>
                    </li>
                  </ul>
                </div>



                <!-- 三级分类菜单 -->
                <div data-v-18047ef4="" class="maincatalog-content" style="display:none">
                  <!-- 标准 & 分类 -->
                  <ul data-v-18047ef4="" class="content-catatabs">
                    <li data-v-18047ef4="" class="active">按标准</li>
                    <li data-v-18047ef4="" class="">按分类</li>
                  </ul>
                  <!-- 材质分类 -->
                  <div data-v-18047ef4="" class="content-block">
                    <ul data-v-18047ef4="" class="content-block-tags">
                      <li data-v-18047ef4="" class="active">不锈钢</li>
                      <li data-v-18047ef4="" class="">碳钢</li>
                      <li data-v-18047ef4="" class="">其它</li>
                    </ul>
                    <div data-v-18047ef4="" class="content-block-section">
                      <!--   -->
                      <div data-v-18047ef4="" class="td">ANSI/ASME美标</div>
                      <div data-v-18047ef4="" class="td">
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >ANSI/ASME B18.2.1六角头螺栓</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/18/dadf6cb3-5933-4cc8-9ecf-3dc4bae6aa56.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/18/dadf6cb3-5933-4cc8-9ecf-3dc4bae6aa56.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >ANSI/ASME B18.5</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/img/mallcatalogFile/1931/3652d94f-1583-4f36-b4ac-cac2931abc8f.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/img/mallcatalogFile/1931/3652d94f-1583-4f36-b4ac-cac2931abc8f.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              圆头方颈螺栓
                            </p>
                          </div>
                        </dl>
                      </div>
                      <!---->
                    </div>
                    <div data-v-18047ef4="" class="content-block-section">
                      <!---->
                      <div data-v-18047ef4="" class="td">DIN德标</div>
                      <div data-v-18047ef4="" class="td">
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">DIN603</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/108/c0ffeb25-c588-4f23-b906-a81fc686d879.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/108/c0ffeb25-c588-4f23-b906-a81fc686d879.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              大半圆头方颈螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">DIN931</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/248/03bf4708-af14-4393-a118-679cb4f5f6f8.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/248/03bf4708-af14-4393-a118-679cb4f5f6f8.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              六角头粗杆半牙螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">DIN933</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/img/mallcatalogFile/4/46bead81-1256-4672-b2a7-169db28f4dcd.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/img/mallcatalogFile/4/46bead81-1256-4672-b2a7-169db28f4dcd.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              六角头螺栓
                            </p>
                          </div>
                        </dl>
                      </div>
                      <!---->
                    </div>
                    <div data-v-18047ef4="" class="content-block-section">
                      <!---->
                      <div data-v-18047ef4="" class="td">GB国标</div>
                      <div data-v-18047ef4="" class="td">
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB12</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p5.gpyh.com/webnew/img/mallcatalogFile/134/f5717a86-7ca6-4763-9ed6-d2de07fcbfd2.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p5.gpyh.com/webnew/img/mallcatalogFile/134/f5717a86-7ca6-4763-9ed6-d2de07fcbfd2.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              半圆头方颈螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB30</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/img/mallcatalogFile/460/8e1946cb-21ef-4729-af8d-942a81eaca3a.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/img/mallcatalogFile/460/8e1946cb-21ef-4729-af8d-942a81eaca3a.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              六角头螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB37</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/img/mallcatalogFile/4278/e3405736-4e9b-497e-acc9-ba513b6e841b.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/img/mallcatalogFile/4278/e3405736-4e9b-497e-acc9-ba513b6e841b.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              T形槽用螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB5782</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/img/mallcatalogFile/70/8511e0c1-2f06-4ff8-af61-e013b82e989a.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/img/mallcatalogFile/70/8511e0c1-2f06-4ff8-af61-e013b82e989a.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              六角头螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB5783</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/54/6dc7375a-e76b-45bd-af3d-09ef1b8d1179.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/img/mallcatalogFile/54/6dc7375a-e76b-45bd-af3d-09ef1b8d1179.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              全螺纹六角头螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB5787</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/img/mallcatalogFile/4102/9a490003-b59f-483d-826a-8945b793d6f3.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/img/mallcatalogFile/4102/9a490003-b59f-483d-826a-8945b793d6f3.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              六角头法兰面螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB5789</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/img/mallcatalogFile/4293/c037a89b-b994-41dc-b23f-fce372ea8e54.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/img/mallcatalogFile/4293/c037a89b-b994-41dc-b23f-fce372ea8e54.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              加大系列六角头法兰面螺栓
                            </p>
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;">GB798</a>
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/visitImge/4325/6953bd95-b076-4ca1-8ac3-9040aeb76319.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/visitImge/4325/6953bd95-b076-4ca1-8ac3-9040aeb76319.png"
                              alt="777"
                            />
                            <p data-v-18047ef4="" style="font-size: 12px;">
                              活节螺栓
                            </p>
                          </div>
                        </dl>
                      </div>
                      <!---->
                    </div>
                    <div data-v-18047ef4="" class="content-block-section">
                      <!---->
                      <div data-v-18047ef4="" class="td">常规品</div>
                      <div data-v-18047ef4="" class="td">
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >T形螺栓</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/visitImge/9070/e246427e-525f-4e3d-ae2a-509dec29ed9d.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/visitImge/9070/e246427e-525f-4e3d-ae2a-509dec29ed9d.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >U型螺栓</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p5.gpyh.com/webnew/img/mallcatalogFile/386/df17ea95-8e35-492f-a837-19b04ab61871.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p5.gpyh.com/webnew/img/mallcatalogFile/386/df17ea95-8e35-492f-a837-19b04ab61871.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >U型螺栓带螺母垫片</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/visitImge/9080/85988779-5930-4e5d-9212-a571f33ea7de.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/visitImge/9080/85988779-5930-4e5d-9212-a571f33ea7de.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >定向调节脚杯</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/visitImge/9569/801cc579-3304-4cca-9945-32bd6f666b66.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p3.gpyh.com/webnew/visitImge/9569/801cc579-3304-4cca-9945-32bd6f666b66.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >尼龙万向调节脚杯</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/visitImge/9637/fcabdcc4-fe72-440f-a9c1-fc5cdad8280a.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p2.gpyh.com/webnew/visitImge/9637/fcabdcc4-fe72-440f-a9c1-fc5cdad8280a.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >方头螺栓</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/visitImge/8208/388d0be7-474b-4899-b864-47f0a47b318b.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/visitImge/8208/388d0be7-474b-4899-b864-47f0a47b318b.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >活节螺栓(厂标)</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p5.gpyh.com/webnew/visitImge/1668/41479379-018f-464b-a115-99fbba6b52b9.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p5.gpyh.com/webnew/visitImge/1668/41479379-018f-464b-a115-99fbba6b52b9.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                      </div>
                      <!---->
                    </div>
                    <div data-v-18047ef4="" class="content-block-section">
                      <!---->
                      <div data-v-18047ef4="" class="td">非标</div>
                      <div data-v-18047ef4="" class="td">
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >六角头螺栓细杆半牙</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/visitImge/9035/386b06b9-7073-4b80-b54a-ac2649b47a02.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/visitImge/9035/386b06b9-7073-4b80-b54a-ac2649b47a02.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >大方头螺栓</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/visitImge/9619/57d2774f-457f-444b-9397-0664939457cc.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p4.gpyh.com/webnew/visitImge/9619/57d2774f-457f-444b-9397-0664939457cc.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                        <dl data-v-18047ef4="" class="dpd-hover">
                          <dt data-v-18047ef4="" class="dpd-refer">
                            <a data-v-18047ef4="" href="javascript:;"
                              >机木双牙螺栓</a
                            >
                          </dt>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/visitImge/9593/4ce719d0-32e4-43ca-9a18-9041ff62e235.png"
                              alt="444"
                            />
                          </div>
                          <div data-v-18047ef4="" class="dpd-layer">
                            <img
                              data-v-18047ef4=""
                              src="//p1.gpyh.com/webnew/visitImge/9593/4ce719d0-32e4-43ca-9a18-9041ff62e235.png"
                              alt="777"
                            />
                            <!---->
                          </div>
                        </dl>
                      </div>
                      <!---->
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
</template>

<script>
import indexItem from '../api/indexItem'
import makeSign from '../api/makeSign'
import Code from '../api/Code'
export default {
  data(){
    return{
      typeList:[]
    }
  },
  methods:{
    //获取选项卡项目
    getAllcategory(){
      let timestamp = Date.parse(new Date())/1000;
      let class_id = 1;
      let sign = this.$md5(makeSign.makeSign({class_id,timestamp}));
      indexItem.getAllCategory({timestamp,sign,class_id}).then(res=>{
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.typeList = data.data.goods_class_type_item[0];
        } else {
          console.log(data.msg)
        }
      })
    },
  },
  mounted(){
    this.getAllcategory();
  }
}
</script>

<style scope>
.maincatalog-sidecata a[data-v-18047ef4] {
    color: #666;
}
.maincatalog-sidecata[data-v-18047ef4] {
    background: #f0f0f0;
}
</style>