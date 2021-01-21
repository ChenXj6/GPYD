<template>
  <section data-v-b1f20ae6="" data-v-29774714="" class="app-main">
    <div data-v-e6fee846="" data-v-b1f20ae6="" class="quickorder">
      <div data-v-e6fee846="" class="quicktools-nav">
        <div data-v-e6fee846="" class="wrap">
          <a
            data-v-e6fee846=""
            href="https://www.gpyh.com/quickOrder/index?pageType=quickOrder"
            class=""
            ><i data-v-e6fee846="" class="i-quickorder"></i>快速下单</a
          >
          <a
            data-v-e6fee846=""
            href="https://www.gpyh.com/standardQuery/standardQueryPage?pageType=standardQuery"
            class=""
            ><i data-v-e6fee846="" class="i-standardquery"></i>标准查询</a
          >
          <a
            data-v-e6fee846=""
            href="/providerApply/index?pageType=providerApply"
            class=""
            ><i data-v-e6fee846="" class="i-providerapply"></i>申请供应商</a
          >
        </div>
      </div>
      <div data-v-e6fee846="" class="wrap">
        <div data-v-e6fee846="" class="search-tab">
          <div data-v-e6fee846="">
            <button
              data-v-e6fee846=""
              type="button"
              class="quick-search tab-selected"
            >
              快速搜索查询下单
            </button>
          </div>
          <div data-v-e6fee846="">
            <button
              data-v-e6fee846=""
              type="button"
              class="more-upload tab-unselected"
            >
              批量上传下单
            </button>
          </div>
        </div>
        <div data-v-e6fee846="" class="manage-icon">
          <a
            data-v-e6fee846=""
            href="https://site.gpyh.com/goodsUserDefined/list?modelType=service&amp;urlType=goodsUserDefined"
            target="_blank"
            style="color: rgb(85, 85, 85);"
            ><div data-v-e6fee846="" class="image-icon"></div>
            <span data-v-e6fee846="">去管理我的自定义物料号</span></a
          >
        </div>
        <div data-v-e6fee846="" class="search-box">
          <div data-v-e6fee846="" class="search-tips">
            可单个输入自定义物料号快速查询商品，也可批量添加自定义物料号(单次最多100个)，一行对应一个物料号商品，请注意换行，可从Excel中直接复制自定义物料号粘贴查询。
          </div>
          <textarea
            data-v-e6fee846=""
            class="search-text jq_watermark placeClass"
          ></textarea>
          <div data-v-e6fee846="" class="bottom-area" style="width: 1182px;">
            <!---->
            <!---->
            <div data-v-e6fee846="" class="import-bottom" style="float: right;">
              <div data-v-e6fee846="" class="import">
                <a data-v-e6fee846="">从我的自定义物料号导入</a>
              </div>
              <div data-v-e6fee846="" class="search-button">搜自定义物料号</div>
            </div>
          </div>
        </div>
        <!---->
        <!---->
        <div data-v-e6fee846="">
          <span data-v-e6fee846="" class="tab-title">全部商品</span>
          <span data-v-e6fee846="" class="tab-tip"
            ><i data-v-e6fee846="" class="i-square"></i>
            重复添加的商品将用蓝色标记出来
          </span>
        </div>
        <div data-v-e6fee846="">
          <div data-v-e6fee846="" class="thead">
            <div data-v-e6fee846="" class="table">
              <div data-v-e6fee846="" class="td" style="width: 40px;"></div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 100px; padding-right: 20px;"
              >
                自定义物料号
              </div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 215px; padding-right: 30px;"
              >
                商品信息
              </div>
              <div data-v-e6fee846="" class="td" style="width: 80px;">仓库</div>
              <div data-v-e6fee846="" class="td" style="width: 100px;">
                包装信息
              </div>
              <div data-v-e6fee846="" class="td" style="width: 80px;">
                起订量
              </div>
              <div data-v-e6fee846="" class="td" style="width: 80px;">库存</div>
              <div data-v-e6fee846="" class="td" style="width: 167px;">
                单价 (元)
              </div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 170px; text-align: center;"
              >
                数量
              </div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 100px; padding-left: 27px;"
              >
                小计
              </div>
              <div data-v-e6fee846="" class="td">操作</div>
            </div>
          </div>
          <div data-v-e6fee846="" class="tbody">
            <div data-v-e6fee846="" class="table nullDiv">
              <div data-v-e6fee846="" class="td"></div>
            </div>
          </div>
          <div data-v-e6fee846="" class="tfoot">
            <div data-v-e6fee846="" class="table">
              <div data-v-e6fee846="" class="td td-multi">
                <label data-v-e6fee846=""
                  ><input
                    data-v-e6fee846=""
                    type="checkbox"
                    class="check-all"
                  />
                  <i data-v-e6fee846="" class="i-checkbox"></i>
                  全选
                </label>
                <a data-v-e6fee846="">删除选中商品</a>
                <a data-v-e6fee846="">清空无效商品</a>
              </div>
              <div data-v-e6fee846="" class="td td-total">
                <div data-v-e6fee846="" class="d1">
                  <label data-v-e6fee846="">
                    已选&nbsp;
                    <span data-v-e6fee846="" class="red">0</span>
                    &nbsp;件商品
                  </label>
                  <label data-v-e6fee846="">
                    合计（不含运费）￥
                    <span
                      data-v-e6fee846=""
                      class="red"
                      style="font-size: 20px;"
                      >0.00</span
                    ></label
                  >
                </div>
                <div data-v-e6fee846="" class="d2">
                  <label data-v-e6fee846="">
                    商品应付总计：￥
                    <span data-v-e6fee846="" class="red">0.00</span></label
                  >
                  <!---->
                  <!---->
                </div>
              </div>
              <div data-v-e6fee846="" class="td td-cart">
                <button data-v-e6fee846="" disabled="disabled">
                  加入购物车
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-e6fee846=""
        id="tip"
        style="width: 243px; height: 153px; text-align: center; display: none;"
      >
        <div
          data-v-e6fee846=""
          style="padding-top: 35px; padding-bottom: 35px; font-size: 14px;"
        ></div>
        <div
          data-v-e6fee846=""
          style="font-size: 14px; font-weight: bold; color: white; width: 90px; height: 42px; line-height: 42px; background-color: rgb(18, 76, 142); margin-left: 75px; cursor: pointer;"
        >
          确定
        </div>
      </div>
      <div
        data-v-e6fee846=""
        id="uploadTip"
        style="width: 360px; height: 153px; display: none;"
      >
        <div
          data-v-e6fee846=""
          style="padding: 35px 15px; font-size: 14px; text-align: left; line-height: 23px;"
        ></div>
        <div
          data-v-e6fee846=""
          style="text-align: center; font-size: 14px; font-weight: bold; color: white; width: 90px; height: 42px; line-height: 42px; background-color: rgb(18, 76, 142); margin-left: 135px; cursor: pointer;"
        >
          确定
        </div>
      </div>
      <div
        data-v-e6fee846=""
        id="deleteItem"
        style="width: 273px; height: 153px; text-align: center; display: none;"
      >
        <div
          data-v-e6fee846=""
          style="padding-top: 35px; padding-bottom: 35px; font-size: 14px;"
        ></div>
        <div
          data-v-e6fee846=""
          style="font-size: 14px; font-weight: bold; color: white; width: 90px; height: 42px; line-height: 42px; background-color: rgb(18, 76, 142); margin-left: 20px; cursor: pointer; display: inline-block;"
        >
          确定
        </div>
        <div
          data-v-e6fee846=""
          style="font-size: 14px; font-weight: bold; width: 90px; height: 42px; line-height: 42px; margin-left: 19px; cursor: pointer; border: 1px solid rgb(204, 204, 204); display: inline-block;"
        >
          取消
        </div>
      </div>
      <div
        data-v-e6fee846=""
        id="returntip"
        class="return-tip"
        style="max-height: 450px; overflow-y: scroll; min-height: 450px; display: none;"
      >
        <div data-v-e6fee846="" class="submit">
          <span data-v-e6fee846=""
            ><input
              data-v-e6fee846=""
              type="checkbox"
              name="vehicle"
              style="display: inline-block; margin-right: 8px; margin-left: 20px;"
            />
            全选
          </span>
          <button data-v-e6fee846="">添加商品</button>
        </div>
        <div data-v-e6fee846="" style="text-align: center;">
          <div data-v-e6fee846="" class="search-material">
            <input
              data-v-e6fee846=""
              type="text"
              placeholder="输入自定义物料号或商品信息搜索，关键字用空格隔开"
              onkeydown="if(event.keyCode==13) getOnlineUserDefinedGoods(2);"
            />
            <button data-v-e6fee846="" class="searchButton">搜索</button>
          </div>
        </div>
        <div data-v-e6fee846="" style="width: 630px; margin: 0px 20px;">
          <div data-v-e6fee846="" class="thead">
            <div data-v-e6fee846="" class="table">
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 40px; text-align: center;"
              ></div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 90px; text-align: center;"
              >
                自定义物料号
              </div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 300px; text-align: center;"
              >
                商品信息
              </div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 100px; text-align: center;"
              >
                仓库
              </div>
              <div
                data-v-e6fee846=""
                class="td"
                style="width: 80px; text-align: center;"
              >
                操作
              </div>
            </div>
          </div>
          <div data-v-e6fee846="" class="tbody1">
            <div
              data-v-e6fee846=""
              class="table oneItem"
              style="height: 335px; line-height: 250px; text-align: center;"
            >
              无符合查询条件的记录
            </div>
          </div>
        </div>
        <div data-v-e6fee846="" class="loadMore" style="display: none;">
          点击加载更多
        </div>
      </div>
      <!---->
      <div data-v-e6fee846="" id="importNull" style="display: none;">
        <div data-v-e6fee846="">
          <div
            data-v-e6fee846=""
            style="padding: 30px 20px 40px; line-height: 24px; word-break: break-all; font-size: 14px; overflow: auto;"
          ></div>
          <div data-v-e6fee846="" style="padding-bottom: 10px;">
            <a
              data-v-e6fee846=""
              href="javascript:;"
              style="width: 90px; height: 42px; background-color: rgb(18, 76, 142); display: block; margin: 0px auto; text-align: center; line-height: 42px; color: rgb(255, 255, 255); border-radius: 2px; font-size: 14px; font-weight: 700;"
              >确定</a
            >
          </div>
        </div>
      </div>
      <div data-v-e6fee846="" id="cartPanel" style="display: none;">
        <div data-v-e6fee846="" class="content-tips">
          <div data-v-e6fee846="" class="d1">
            <img
              data-v-e6fee846=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADbElEQVRYhbXYTWhcVRjG8V9uIuIiFWqajQ21RXChtH5CQi2xoqCNC9uuqiAqEduFLqoUqlJpalEKWUgXWlDQhd01oGgMWIJNMKkgLbZ14aJaDaIFK6hdptbFfW/n5GZuJplMH7jMPe85533+M3PP121r37zbEtSNLejHXbgNK6LuH1zAOZzAGP5olHB2fBh0LBJgE/bgsQX6dMV1P57FFXyJQ5hsZJA1qF+HzzGBJxaAqKf26DMROdY1C7IDpzFQip/EIB7AKtwY16qIDWK61Gcgcj1VZVb1Dfdhfyn2Nt7DTEWfP+P6Dh+iB7uwN+pX4BPcjqFy53q/yGsliLPYGPEqiHqaiT4bcSaJ78frjUB24GBSHsEGTC0BoKypyDGSxN4Kr7oga3EkKX+G7bi6DIhU2/FpUj4SnvNADqMz7s/iyRYBpNoauYXX4TLIg+aOjhe17pdIdTVyFxroePiVTSnInqTyHfOHX7PqkA/tVNPyEVjoVWhr37y7G7+pDeU1+LUFEPfIp/lO+cQ2ntT1JB6zuDWTrx0FxMkWQhyXr0034fFS/Ux4Ce8tmXwBK/RBCyFWRvkvfFSnXer1UCZfRQt9fx0gHsEPddqmXndm8qW80IXrAHG6ov3Pyf3aTG3ugH8XMLovMVkuRNmrM0NbEqiaO4bki9mPYVqG+GqJEPOUlckq2t0dn11hWsAUELc0ATHnn8iU/quKTm+EiTA9jmeWAUHp2czMfaI3VHQ6g0cTmJX4eBkQZa9zGb5OAoMLdDxVginU1DOBF5L7E5l8gzsbgV759NsI5lKULzYJ0RNewns0i2RjSaNdDZKcwh24F6ubgCh7jM2OD18sVt9DScVe9DVIdCkAZhu0q6c+tX3sNe8CZBJfJJXvN2GwWKW5R2fHhydTEHhZbU5Zb+4es1UaidzC66WiIgX5CTuT8lYcayHEschZaGd4zgOBo/IzTaFt8lWyV/PqjRzbkti+8LqmeueaA3gzKa+Xb+8OykfJYrU6+kyr/R0i94Fy46oj5xCexuUkVhywpvC8fDXuwg1xdUXsOXyjdsAqdDlyzjvlsfCh+ii+xbvm7vD7NB7eZY3KB8P5qgaN3gacl298++Un+itLMP8v+vTLv0glBIt/zTARV3ckLV7UrMHN0eZv/CJ/UTMhXzp+Xyz1/1okx934XGkCAAAAAElFTkSuQmCC"
              style="display: inline-block; margin-right: 15px; margin-top: 15px;"
            />
          </div>
          <div data-v-e6fee846="" class="d2">
            <p data-v-e6fee846="" class="p1">加入购物车成功</p>
            <p data-v-e6fee846="" class="p2">共有件商品，商品总价：元</p>
            <!---->
          </div>
        </div>
        <div data-v-e6fee846="" class="btn_box">
          <a
            data-v-e6fee846=""
            href="javascript:void(0)"
            class="btn-common btn-fill"
            >去购物车结算</a
          >
          <a data-v-e6fee846="" href="javascript:void(0)" class="btn-common"
            >继续购物</a
          >
        </div>
      </div>
      <div data-v-e6fee846="" id="layer-remind3" style="display: none;">
        <div data-v-e6fee846="">
          <div
            data-v-e6fee846=""
            style="padding: 30px 20px 40px; line-height: 24px; word-break: break-all; font-size: 14px; overflow: auto; width: 300px;"
          ></div>
          <div data-v-e6fee846="" style="padding-bottom: 10px;">
            <a
              data-v-e6fee846=""
              href="javascript:void(0)"
              style="width: 90px; height: 42px; background-color: rgb(18, 76, 142); display: block; margin: 0px auto; text-align: center; line-height: 42px; color: rgb(255, 255, 255); border-radius: 2px; font-size: 14px; font-weight: 700;"
              >确定</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scope></style>
