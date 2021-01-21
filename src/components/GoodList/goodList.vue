<template>
  <div data-v-b1f20ae6=""
       class="main">
    <div>
      <div class="wrap">
        <div class="main-content wide">
          <div class="content-wrap"
               v-if="!noGood">
            <!-- 商品检索 -->
            <div class="filter-chosen">
              <div class="table">
                <div class="td"
                     style="width: 1000px;">
                  <div class="chosen-fld"
                       v-for="(item,index) in filterData"
                       :key="index"><b>{{item.name}}</b> <span class="chosen-fld-it">{{item.itemName}}<i class="el-icon-close"
                         @click="delFilter(item.id,item.itemId)"></i></span></div>

                </div>
                <div class="td"
                     @click="delAll()"
                     style="width: 200px; text-align: right;"><span class="clear-filter">清空筛选</span></div>
              </div>
            </div>

            <!-- 商品展示 -->
            <div>
              <div>
                <!-- 商品种类 -->
                <div class="goods-filter-block">
                  <div class="filter-block-wrap">
                    <!---->
                    <div>
                      <div class="filter-table-fld table"
                           v-for="(item, index) in class_type"
                           :key="index">
                        <div class="td filter-fld-name">
                          {{ item.good_class_type_name }}
                        </div>
                        <div class="td">
                          <div id="categoryId"
                               class="filter-fld-list">
                            <span v-for="(classType,
                              key) in item.class_type_item_info"
                                  :key="key"
                                  @click="goodsFilter(item,classType)"><label>{{
                                classType.good_class_type_item
                              }}</label></span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <!--  -->
                  </div>
                </div>

                <div class="goods-filter-block"
                     style="margin-top:20px">
                  <div class="filter-block-wrap">
                    <div>
                      <!-- warehouse_name -->
                      <div class="filter-table-fld table">
                        <div class="td filter-fld-name">仓库</div>
                        <div class="td">
                          <div id="categoryId"
                               class="filter-fld-list">
                            <span v-for="(item,key) in houseArr"
                                  :key="key"
                                  @click="Filter('0',item)"><label>{{item.warehouse_name}}</label></span>
                          </div>
                        </div>
                      </div>
                      <!-- brand_name -->
                      <div class="filter-table-fld table">
                        <div class="td filter-fld-name">品牌</div>
                        <div class="td">
                          <div id="categoryId"
                               class="filter-fld-list">
                            <span v-for="(item,key) in brand_arr"
                                  :key="key"
                                  @click="Filter('1',item)"><label>{{item.brand_name}}</label></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--  -->
                  </div>
                </div>
                <!-- 选项 -->
                <div class="goods-toolbar">
                  <div class="wrap">
                    <div class="easy-filter">
                      <a>
                        <input type="checkbox"
                               :value="is_new"
                               v-model="isNew"
                               @change="change('0',is_new)">
                        <span>上新</span></a>
                      <a>
                        <input type="checkbox"
                               :value="is_promotion"
                               v-model="isPromotion"
                               @change="change('1',is_promotion)">
                        <span>促销</span></a>
                      <a>
                        <input type="checkbox"
                               :value="is_import"
                               v-model="isImport"
                               @change="change('2',is_import)">
                        <span>进口</span></a>
                      <!-- <span class="searchbar-sm">
                        <input id="barcodeCheck" type="text"/>
                        <input type="button" value="搜条码"
                      /></span> -->
                    </div>
                  </div>
                </div>
                <!-- 具体的商品展示 -->
                <div class="goods-block">
                  <div class="wrap">
                    <div style="min-height: 35px;">
                      <table class="goods-table-head"
                             style="top: auto;">
                        <thead style="">
                          <tr>
                            <th style="width:200px">商品信息</th>
                            <th style="width:60px">品牌</th>
                            <th style="width:70px">仓库</th>
                            <th style="width:100px">库存</th>
                            <th style="width:70px">起订量</th>
                            <th style="width:100px">价格</th>
                            <th style="width:7%">操作</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="section-item"
                              v-for="(item,index) in good_list"
                              :key="index">

                            <td style="text-align: left;">
                              <div class="goods-info"><a class="goods-imgbox"
                                   style="cursor: pointer;">
                                  <img :src="host + item.thumimage"> <i class=""></i></a>
                                <div class="goods-txtbox">
                                  <p class="goods-txt-name"
                                     style="height: auto; max-height: 50px;">
                                    <router-link tag="a"
                                                 :to="{path:'/gooddetails',query:{gid:item.goods_list_id}}"
                                                 :title="item.goods_name"
                                                 style="cursor: pointer;">
                                      {{item.goods_name}}
                                    </router-link>
                                  </p>
                                </div>
                              </div>
                            </td>

                            <td>
                              {{item.brand_name}}
                              <br>
                              <a href="javascript:;"
                                 @click="openDrawing(item)"
                                 style="color:#124c8e">图纸</a>
                            </td>
                            <td>{{item.warehouse_name}}</td>
                            <td>{{item.inventory + item.inventory_unit}}
                            </td>
                            <td>{{item.min_quantity + item.inventory_unit}}</td>
                            <td>
                              <div><span class="bPrice">
                                  <div><span><span>
                                        ￥{{item.price}}
                                      </span>
                                      /{{item.inventory_unit}}</span></div>
                                </span></div>
                            </td>
                            <td>
                              <div class="goods-operate">
                                <div class="num-selector">
                                  <div>
                                    <span class="num-selector-c1">
                                      <input maxlength="6"
                                             type="number"
                                             value="1"
                                             @change="changeNum(index)">
                                      <button class="num-add"
                                              @click="addNum(index)">+</button>
                                      <button class="num-sub"
                                              @click="subNum(index)">-</button>
                                    </span>
                                    &nbsp;{{item.inventory_unit}}
                                  </div>
                                  <div>
                                    <!-- <span class="num-selector-c2">
                                    <input maxlength="10"
                                             type="text">
                                             </span>
                                    &nbsp;{{item.inventory_unit}} -->
                                  </div>
                                </div>
                                <div class="goods-btns"><button class="btn-in-cart"
                                          @click="addShopCar(item,index)">加入购物车</button>
                                  <i style="font-size:20px"
                                     :class="item.is_collect == 1 ? 'el-icon-star-on':'el-icon-star-off'"
                                     @click="changeCollect(item.goods_list_id,item.is_collect)"></i>
                                  <!-- <a href="javascript:;">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAYAAACEYr13AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZGExYWQ3Yy04N2RhLTlmNGEtYTU3Ni1jM2IyNjMyNTcwYTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkUzMjRFRjdCQTUwMTFFOThBRkNGQ0ZBNUEwODZFNDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkUzMjRFRjZCQTUwMTFFOThBRkNGQ0ZBNUEwODZFNDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRlMDJlNjRhLWM0ODctOGU0MS04NTIxLTI1NWMyYTIyYWM3YiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjhkMTcwMmQzLWUxNzgtMTFlOC1hNTg4LTliMzMxMGNmYjQ4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PggtMGAAAAE6SURBVHjanNS7SgNhEIbhzRIEG2MnsTOFSLwMERKw84SlmNrem4ggEi0MdlsKgoqdhbWVImqhInhALTx0NvH9YH4Yg7qbHXhIsjsz+U+7hSRJoq6oooE6RuzaNQ6xhXOfHLvvfVjHEV4wh5KZt2u6t4n+UFR0xfv4wCjeu0Z1alpoY89G+BVGsIpPzPxS7EP3ZvGGZhjBOKbtnztReihnEZfYiG3BWjb8rKHcNdWqQQ27Ue+hdaipQQUXORpoCpXYduAGD7ayaVG33FvVhm0s26e2aDilQdvl/zhIvtF/Uf7rJOYKNXh0v58y1Pj8TjgHKrzHUoYGIf8Zd1rEg4xzDxHyVzBUzDn1ASxjMs8iFrCNHZz1OoKSnYNBLKRt47E9eXJic77CK6b0LvAvlLQY04JhQsP2N74FGACuLUKj37nm8wAAAABJRU5ErkJggg=="
                                         title="在线客服"
                                         class="customer">
                                  </a> -->
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!---->
                  </div>
                </div>
                <!-- 下部分页器 -->
                <div class="wrap mafoot"
                     v-if="pageshow">
                  <el-pagination @size-change="handleSizeChange"
                                 @current-change="handleCurrentChange"
                                 :current-page="page"
                                 :page-sizes="[1,5, 10, 20, 50]"
                                 :page-size="limit"
                                 layout="total, sizes, prev, pager, next"
                                 :total="total_limit"
                                 hide-on-single-page>
                  </el-pagination>
                </div>
              </div>
            </div>
          </div>

          <!-- 无商品显示 -->
          <div class="search-empty"
               v-else>
            <div>
              <div><img class="noFind" src="../../assets/image/noFind.png"></div>
              <div class="search-empty-txt">
                <h2>抱歉，该送货区暂无此商品喔~</h2>
                <p><b>建议您：</b></p>
                <p>1、切换左上角的送货区</p>
                <p>2、查看工品平台上其它类型的商品</p>
                <!-- <p>3、提交您的需求给我们</p>
                <p>
                  <a href="javascript"
                     class="to-suggest">去提需求</a>
                </p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->

    <!-- 图纸显示 -->
    <el-dialog title="图纸"
               :visible.sync="isDrawing"
               width="23%"
               center>
      <img :src="host + drawingUrl"
           v-if="drawingUrl != ''"
           style="width:400px;height:400px;diplay:block;margin:0 auto" />
      <div v-else
           style="width:100%;height:300px;text-align:center">暂无图纸</div>
    </el-dialog>
  </div>
</template>
<script>

import indexItem from '../../api/indexItem'
import Code from '../../api/Code'
import makeSign from '../../api/makeSign'
import Urls from '../../api/urls'
import shopCar from '../../api/shopCar'



export default {
  computed: {
    host () {
      return Urls.BWS
    },
  },
  data () {
    return {
      pageshow: true,
      noGood: false,
      page: 1,
      limit: 5,
      is_promotion: 0,
      is_new: 0,
      isNew: false,
      isPromotion: false,
      isImport: false,
      is_tail: 0,
      is_import: 0,
      goodNum: 0,
      house_id: 0,
      standardId: '',
      totalId: 0,
      // 价格显示
      isLogin: true,
      // 图纸显示
      isDrawing: false,
      drawingUrl: '',
      // 自定义物料号存储
      editIn: '',
      good_list: [],
      house: [],
      class_type: [],
      type_item_id: '',
      searchId: [],
      // 筛选点击
      filterData: [],
      class_id: 0,
      search: '',
      total_limit: 0,
      houseArr: [],
      brand_arr: [],
      brand_id: 0,

    }
  },
  methods: {
    // 修改自定义物料号事件
    editItemNumber (data) {
      if (this.editIn != '') {
        data.details.customN = this.editIn
        this.editIn = ''
      }
    },
    // 图纸点击事件
    openDrawing (data) {
      this.isDrawing = true;
      this.drawingUrl = data.drawings;
    },
    //获取数据列表
    getData () {
      this.noGood = false;
      let limit = this.limit;
      let page = this.page;
      let timestamp = Date.parse(new Date()) / 1000;
      let type_item_id = this.type_item_id || this.$route.query.gid;
      let is_promotion = this.is_promotion;
      let user_id = sessionStorage.getItem('uid') || ''
      let is_new = this.is_new;
      let standard_id = this.standardId;
      let total_id = this.totalId;
      let is_tail = this.is_tail;
      let search = this.search || '';
      let class_id = this.class_id;
      let is_import = this.is_import;
      let house_id = this.house_id;
      let brand_id = this.brand_id;
      let sign = this.$md5(makeSign.makeSign({ brand_id, search, class_id, limit, page, timestamp, type_item_id, is_promotion, is_new, is_tail, is_import, house_id, standard_id, total_id, user_id }))
      indexItem.goodFilter({ brand_id, search, class_id, sign, limit, page, timestamp, type_item_id, is_promotion, is_new, is_tail, is_import, house_id, standard_id, total_id, user_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          if (data.data.total_limit != 0) {
            this.class_type = data.data.class_type_item;
            this.good_list = data.data.goods_list;
            this.house = data.data.warehouse_arr;
            this.total_limit = data.data.total_limit;
            this.houseArr = data.data.warehouse_arr;
            this.brand_arr = data.data.brand_arr;
          } else {
            this.noGood = true;
          }
        } else {
          return
        }
      })
    },
    //加减数量
    addNum (index) {
      let value = $('.num-selector-c1 input').eq(index).val();
      value++
      $('.num-selector-c1 input').eq(index).val(value);
    },
    subNum (index) {
      let value = $('.num-selector-c1 input').eq(index).val();
      value--
      if (value <= 0) {
        value = 1
      }
      $('.num-selector-c1 input').eq(index).val(value);
    },
    changeNum (index) {
      let value = Math.round($('.num-selector-c1>input').eq(index).val())
      if (value <= 0 || value == '' || value == 0) {
        $('.num-selector-c1 input').eq(index).val(1);
      } else {
        $('.num-selector-c1 input').eq(index).val(value);
      }
    },
    //加入购物车
    addShopCar (Data,index) {
      let goods_id = Data.goods_list_id;
      let goods_num = $('.num-selector-c1 input').eq(index).val();
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      if (!user_id) {
        this.$router.push({ path: '/login', query: { redirect: '/goodlist?gid=' + this.$route.query.gid } })
        return;
      }
      let sign = this.$md5(makeSign.makeSign({ goods_id, goods_num, timestamp, user_id }));
      shopCar.addShopCar({ goods_num, goods_id, timestamp, sign, user_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          Data.num = goods_num;
          Data.cart_id = data.data.cart_id
          Data.status_line = data.status_line || 1
          this.$store.dispatch('addGoods', Data).then(()=>{
            this.$message.success('商品已成功加入购物车');
          })
        } else {
          this.$message.warning(data.msg);
          return
        }
      })
    },
    // 商品检索显示
    goodsFilter (item, data) {
      this.searchId.push(data.id)
      // 数据处理
      let brr = Array.from(new Set(this.searchId));
      var str = ''; str = brr.join('_');
      this.type_item_id = str;
      // 页面显示效果
      var obj = {};
      if (this.filterData.length > 0) {
        for (let j = 0; j < this.filterData.length; j++) {
          if (item.good_class_type_name == this.filterData[j].name) {
            return;
          }
        }
      }
      for (var i = 0; i < 1; i++) {
        obj.id = item.id;
        obj.itemId = data.id;
        obj.name = item.good_class_type_name;
        obj.itemName = data.good_class_type_item;
        this.filterData.push(obj);
      }
    },
    // 仓库 & 品牌检索
    Filter (type, data) {
      // 仓库
      if (type == 0) {
        let obj = {};
        if (this.filterData.length > 0) {
          for (let j = 0; j < this.filterData.length; j++) {
            if (this.filterData[j].name == '仓库') {
              return;
            }
          }
        }
        for (let i = 0; i < 1; i++) {
          obj.id = 'a';
          obj.itemId = data.id;
          obj.name = '仓库';
          obj.itemName = data.warehouse_name;
          this.filterData.push(obj);
        }
        this.house_id = data.id
      } else {
        let obj = {};
        if (this.filterData.length > 0) {
          for (let j = 0; j < this.filterData.length; j++) {
            if (this.filterData[j].name == '品牌') {
              return;
            }
          }
        }
        for (let i = 0; i < 1; i++) {
          obj.id = 'b';
          obj.itemId = data.id;
          obj.name = '品牌';
          obj.itemName = data.brand_name;
          this.filterData.push(obj);
        }
        this.brand_id = data.id
      }

    },
    // 商品检索删除
    delFilter (id, itemId) {
      for (let j = 0; j < this.filterData.length; j++) {
        if (id == this.filterData[j].id) {
          this.filterData.splice(j, 1)
        }
      }
      if (id == 'a') {
        this.house_id = 0
      } else if (id == 'b') {
        this.brand_id = 0
      } else {
        this.type_item_id = this.type_item_id.split('_')
        for (let v = 0; v < this.type_item_id.length; v++) {
          if (itemId == this.type_item_id[v]) {
            this.searchId.splice(v, 1)
            this.type_item_id.splice(v, 1)
            let brr = Array.from(new Set(this.searchId));
            var str = ''; str = brr.join('_');
            this.type_item_id = str;
          }
        }
      }
    },
    // 清除筛选
    delAll () {
      this.searchId = [];
      this.house_id = 0;
      this.brand_id = 0;
      this.type_item_id = '';
      this.filterData = [];
      if (this.$route.query.gid) {
        this.searchId.push(Number(this.$route.query.gid))
      }
      let brr = Array.from(new Set(this.searchId));
      var str = ''; str = brr.join('_');
      this.type_item_id = str;
    },
    // 商品上新 进口 促销
    change (type, val) {
      let v = 1;
      if (val == 1) {
        v = 0
      }
      if (type == 0) {
        this.isNew = false;
        this.is_new = v;
      } else if (type == 1) {
        this.isPromotion = false
        this.is_promotion = v;
      } else {
        this.isImport = false;
        this.is_import = v;
      }
    },
    // 分页器配置  改变每页的条数
    handleSizeChange (val) {
      this.limit = val
      this.getData()
    },
    // 改变当前页码
    handleCurrentChange (val) {
      this.page = val
      this.pageshow = false;
      this.getData();
      this.$nextTick(() => {
        this.pageshow = true;
      })
    },
    changeCollect (id, type) {
      let timestamp = Date.parse(new Date()) / 1000;
      let user_id = sessionStorage.getItem('uid');
      if (!user_id) {
        this.$message.warning('请先登录')
        return;
      }
      let goods_id = id;
      let status = 2
      if (type == 2) {
        status = 1;
      }
      let sign = this.$md5(makeSign.makeSign({ timestamp, user_id, goods_id, status }))
      shopCar.collection({ timestamp, user_id, sign, status, goods_id }).then(res => {
        let data = res.data;
        if (data.code === Code.CODE_SUCCESS) {
          this.getData()
        } else {
          this.$message.error(data.msg)
        }
      })
    }
  },
  created () {
    this.searchId = [];
    if (this.$route.query.total_id) {
      this.totalId = this.$route.query.total_id;
    }
    if (this.$route.query.is_promotion) {
      this.is_promotion = Number(this.$route.query.is_promotion);
      if (this.is_promotion == 1) {
        this.isPromotion = true
      }
    }
    if (this.$route.query.is_new) {
      this.is_new = Number(this.$route.query.is_new);
      if (this.is_new == 1) {
        this.isNew = true
      }
    }
    if (this.$route.query.is_import) {
      this.is_import = Number(this.$route.query.is_import);
      if (this.is_import == 1) {
        this.isImport = true
      }
    }
    if (this.$route.query.standard_id) {
      this.standardId = this.$route.query.standard_id;
    }
    if (this.$route.query.classId) {
      this.class_id = this.$route.query.classId;
    }
    if (this.$route.query.search) {
      this.search = this.$route.query.search;
    }
    if (this.$route.query.gid) {
      this.searchId.push(Number(this.$route.query.gid))
    }
  },
  mounted () {
    this.getData();
  },
  watch: {
    '$route': function () {
      this.searchId = [];
      this.totalId = 0;
      this.standardId = '';
      this.type_item_id = '';
      this.search = '';
      this.class_id = 0;
      this.is_import = 0;
      this.is_new = 0;
      this.is_promotion = 0;
      if (this.$route.query.total_id) {
        this.totalId = this.$route.query.total_id;
      }
      //
      if (this.$route.query.is_promotion) {
        this.is_promotion = Number(this.$route.query.is_promotion);
      }
      if (this.$route.query.is_new) {
        this.is_new = Number(this.$route.query.is_new);
      }
      if (this.$route.query.is_import) {
        this.is_import = Number(this.$route.query.is_import);
      }
      //
      if (this.$route.query.standard_id) {
        this.standardId = this.$route.query.standard_id;
      }
      if (this.$route.query.classId) {
        this.class_id = this.$route.query.classId;
      }
      if (this.$route.query.search != '') {
        this.search = this.$route.query.search;
      } else {
        this.search = ''
      }
      if (this.$route.query.gid) {
        this.searchId.push(Number(this.$route.query.gid))
      }
    },
    searchId () {
      this.getData()
    },
    search () {
      this.getData()
    },
    is_import () {
      this.getData()
    },
    is_new () {
      this.getData()
    },
    is_promotion () {
      this.getData()
    },
    type_item_id () {
      this.getData()
    },
    page () {
      this.getData()
    },
    limit () {
      this.getData()
    },
    class_id () {
      this.getData()
    },
    house_id () {
      this.getData()
    },
    brand_id () {
      this.getData()
    }
  }
}
</script>

<style scope>
.blockClass {
  display: inline-block;
  width: 100%;
  text-align: center;
}
.inlineClass {
  display: block;
  margin: 0 auto;
  text-align: center;
}
.red {
  color: #ff2a2a !important;
}
#priceClass {
  width: 165px;
  height: 20px;
  border-radius: 2px;
  background: #f80;
  color: #fff;
  line-height: 20px;
  text-align: left;
  padding: 0 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default;
}
.discount-panel-title {
  margin: 0 0 12px 15px;
}
.el-table td,
.el-table th {
  color: #333 !important;
}
#goods-operate-mark {
  height: 20px;
  line-height: 20px;
  min-width: 150px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: -20px;
  right: 0;
  white-space: nowrap;
  padding: 0 10px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  z-index: 456;
}
.goods-operate {
  width: 150px;
  margin: auto;
  text-align: left;
  position: relative;
}
.filter-chosen {
  margin-bottom: 10px;
}
.table {
  display: table;
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
.table,
.td {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.td {
  display: table-cell;
  vertical-align: middle;
}
.chosen-fld {
  display: inline-block;
  margin-right: 26px;
}
.chosen-fld b {
  font-weight: 700;
}
.chosen-fld-it {
  padding: 3px 5px;
  border: 1px solid #3c76df;
  color: #3c76df;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: inline-block;
}
.clear-filter {
  color: #3c76df;
  cursor: pointer;
}
.changeNum {
  display: block;
  width: 80px;
  height: 34px;
  border: solid 1px #333;
  text-align: center;
}
::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.goods-table-head > thead > tr {
  width: 100%;
  border: 1px solid #e6e6e6;
  height: 35px;
  text-align: center;
  background: #f5f5f5;
}
.goods-table-head > thead > tr > th {
  line-height: 35px;
}
.goods-table-head > tbody > tr {
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
}
.goods-table-head > tbody > tr > td {
  padding-top: 20px;
  padding-bottom: 12px;
  line-height: 2;
  vertical-align: top;
  color: #333;
}
.goods-table-head > tbody > tr > td:first {
  text-align: left;
}
.section-item .goods-info {
  width: 300px;
  margin: 0 0 0 8px;
  box-sizing: border-box;
}
.num-selector-c1 {
  width: 87px !important;
}
.num-selector-c1 > input {
  width: 70px !important;
}

.el-pagination {
  text-align: center;
  margin: 30px 0;
}
.noFind{
  display: inline-block;
  width: 200px;
  height:200px;
}
</style>
