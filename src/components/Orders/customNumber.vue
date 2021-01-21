<template>
  <div class="gc_content">
    <el-form id="pageForm">
      <div class="list_header">
        <div class="left-title">我的自定义物料号</div>
        <div class="list_search">
          <div class="so_form">
            <el-input v-model='searchItem'
                      placeholder="请输入商品信息，关键字用空格隔开"
                      class="input-with-select">
              <el-button slot="append"
                         @click="search"
                         icon="el-icon-search">搜索</el-button>
            </el-input>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="multi-manage-box">
        <el-button :type="!classFlag? 'danger' : 'primary'"
                   class="manage"
                   @click="openckeck">{{!classFlag? '批量管理' : '取消管理'}}</el-button>
        <div class="operation-box fr">
          <el-button class="link"
                     type="text"
                     href="javascript:;">
            <label style="cursor:pointer"><input type="checkbox"
                     id="checkAll"
                     @click="chooseAll"
                     v-model="isAllChecked">本页全选</label>
          </el-button>
          <el-button type="text"
                     class="link"
                     @click="delCustomN"><i class="el-icon-delete">&nbsp;</i>删除自定义物料号</el-button>
          <el-button type="text"
                     class="link"
                     @click="ExportExcel()"><i class="el-icon-upload2">&nbsp;</i>导出自定义物料号</el-button>
        </div>
      </div>
      <!-- <div class="category_search">     -->
      <div class="list_nav">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column width="80">
            <template slot-scope="scope">
              <el-checkbox type="checkBox"
                           class="CheckBox"
                           @change="singleChecked(scope.row)"
                           style="display:none"
                           :value="scope.row.ischecked"></el-checkbox>
            </template>

          </el-table-column>
          <el-table-column prop="itemNumber"
                           label="自定义物料号"
                           width='100'>
            <template slot-scope="scope">
              <el-popover placement="bottom-start"
                          width="150"
                          trigger="click">
                <el-input class="editIn"
                          v-model="editIn"
                          :placeholder="scope.row.itemNumber"
                          @blur="editItemNumber(scope)">
                </el-input>
                <a href="javascript:;"
                   slot="reference">{{scope.row.itemNumber}}</a>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="gthumb"
                           label="商品缩略图">
            <template slot-scope="scope">
              <img v-lazy="scope.row.gthumb"
                   alt=""
                   width="100px" />
            </template>
          </el-table-column>
          <el-table-column prop="content"
                           label="商品信息"
                           width='200'>
          </el-table-column>
          <el-table-column prop="size"
                           label="规格"
                           width="80">
          </el-table-column>
          <el-table-column prop="barCode"
                           label="条码"
                           width="80">
          </el-table-column>
          <el-table-column prop="brand"
                           label="品牌"
                           width="80">
          </el-table-column>
          <el-table-column prop="Warehouse"
                           label="仓库"
                           width="80">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="text"
                         size="mini">详情</el-button>
              <el-button type="text"
                         size="mini">购买</el-button>
              <el-button type="text"
                         size="mini"
                         @click="delItem(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-form>
  </div>
</template>
<script>
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  data () {
    return {
      tableData: [
        { ischecked: false, itemNumber: 19980525, gthumb: '', content: '', size: '1/4-20*3/8', barCode: 304325, brand: '鹏驰EG', Warehouse: '苏州联营仓' },
        { ischecked: false, itemNumber: 19980526, gthumb: '', content: '', size: '1/4-20*3/8', barCode: 304325, brand: '鹏驰EG', Warehouse: '苏州联营仓' },
        { ischecked: false, itemNumber: 19980527, gthumb: '', content: '', size: '1/4-20*3/8', barCode: 304325, brand: '鹏驰EG', Warehouse: '苏州联营仓' }
      ],
      searchItem: '',
      editIn: '',
      classFlag: false,
      isAllChecked: false,    // 正在进行中的数据是否被选中
      checkedCode: [],        // 用于保存被选中的数据
    }
  },
  methods: {

    // 用户单选
    singleChecked (data) {
      data.ischecked = !data.ischecked;
      let len = this.tableData.length;
      let count = 0;

      this.tableData.forEach((v) => {
        if (v.ischecked) {
          count++;
        }
      })
      if(count == len){
        this.isAllChecked = true;
      }else{
        this.isAllChecked = false;
      }
      this.totalData()
    },
    // 用户全选
    chooseAll () {
      this.isAllChecked = !this.isAllChecked;
      this.tableData.forEach((v) => {
        v.ischecked = true
      })
      this.totalData()
    },
    // 把选中的数据push进一个新的数组
    totalData(){
      this.checkedCode = [];  //初始化这个数组，防止数据重复
      this.tableData.filter(v=>{
        if(v.ischecked){
          this.checkedCode.push(v)
        }
      })
    },
    // 删除选中
    delCustomN(){
      this.totalData()
      this.checkedCode.forEach(v=>{
        this.tableData.forEach((val,i)=>{
          if(v.itemNumber === val.itemNumber){
            this.tableData.splice(i,1)
          }
        })
      })
      
    },
    // 导出自定义物料号
    ExportExcel(){
      this.$confirm('确定导出数据，导出记录数不多于1万条', '导出自定义单号', {
          confirmButtonText: '导出',
          cancelButtonText: '取消',
          center: true,
          type:'info'
        }).then(() => {
            this.$message({
              type: 'success',
              message: '导出成功'
            });
            this.exportExcel()
          }).catch(() => {
            this.$message({
              type: 'info',
              message:'取消导出成功'
            })
          });
    },
    // 打印成Excel文件
    exportExcel() {
      let wb = XLSX.utils.table_to_book(document.querySelector('.list_nav'))
        let wbout = XLSX.write(wb, {
          bookType: 'xlsx',
          bookSST: true,
          type: 'array',
        })
        try {
          FileSaver.saveAs(
            new Blob([wbout], { type: 'application/octet-stream' }),
            '自定义物料号.xlsx'
          )
        } catch (e) {
          if (typeof console !== 'undefined') console.log(e, wbout)
        }
        return wbout
    },
    // 
    openckeck () {
      this.classFlag = !this.classFlag;
      $('.operation-box').toggle()
      $('.CheckBox').toggle()
    },
    search () {
      let data = this.searchItem;
      if (data != '') {
        console.log(1)
      }
    },
    editItemNumber (data) {
      if (this.editIn != '') {
        data.row.itemNumber = this.editIn
      }
    },
    delItem (data) {
      let index = data.$index;
      this.$confirm('确定删除该物料号', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.tableData.splice(index, 1)
      })
    }
  },
  watch: {

  }
}
</script>


<style scope>
.list_header {
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.left-title {
  font-size: 14px;
  font-weight: 600;
  float: left;
  color: #525252;
}

.list_search {
  width: 307px;
}

.list_search {
  float: right;
  width: 400px;
}

.list_search .so_form {
  width: 305px;
}

.list_search .so_form {
  border: 1px solid #ccc;
  width: 355px;
  float: left;
}

.list_search .so_txt {
  width: 230px;
  height: 28px;
}

.list_search .so_txt {
  width: 280px;
  height: 19px;
  padding: 4.5px 0 4.5px 6px;
  border: none;
  float: left;
}

.list_search .so_btn {
  border-left: 1px solid #ccc;
  width: 69px;
  height: 37px;
  display: inline-block;
}

.list_search .so_btn {
  width: 69px;
  height: 28px;
  border: none;
  display: block;
  background: #f5f5f5;
}

.category_search {
  overflow: hidden;
}

.category_search div,
.condition_search div {
  float: left;
}

.s_title {
  margin-right: 15px;
  line-height: 26px;
  font-size: 12px;
  color: #737373;
}

.category_search .s_content_h {
  height: 26px;
}

.category_search .s_content {
  width: 900px;
}

.category_search div,
.condition_search div {
  float: left;
}

.category_search div,
.condition_search div {
  float: left;
}

.s_item_selected {
  background: #2583d8;
  color: #fff !important;
}

.s_item {
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  color: #737373;
}
.multi-manage-box {
  float: right;
  color: #999;
  margin: 20px 0;
}
.multi-manage {
  width: 86px;
  height: 26px;
  border: 1px solid #ff681d;
  color: #ff681d;
  background: #fff;
  display: inline-block;
}
.fr {
  float: right;
}
.operation-box {
  margin-right: 30px;
  display: none;
  margin-top: 5px;
}
.fr {
  float: right;
}
.operation-box .link {
  margin-left: 40px;
  color: #6c6c6c;
  float: left;
}
.manage {
  float: right !important;
}
</style>
