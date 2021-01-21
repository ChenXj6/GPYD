<template>
  <div data-v-2c1fbd4d="" class="layout-common">
    <section data-v-985e2336="" data-v-2c1fbd4d="" class="app-main">
      <div data-v-985e2336="" class="findPass-passport">
        <div class="header-passport">
          <div class="header-logo">
            <div class="header-warpper">
              <div class="header-l">
                <router-link tag="a" to="/"
                  ><img
                    src="../../assets/image/login.png"
                /></router-link>
              </div>
              <span class="line"></span>
              <div class="header-r">
                <div class="header-r-l"><span>找回密码</span></div>
                <div class="header-r-r" style="display: none;">
                  <span>已有账号,</span>
                  <a href="/passport/login?t=1591951774477" class=""><router-link to="/login">请登录</router-link></a>
                </div>
                <div class="header-r-r" style="display: none;">
                  <span>没有账号,</span>
                  <a href="/passport/register?t=1591951774478" class=""
                    ><router-link to="/register">请注册</router-link></a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </section>
    <div data-v-2c1fbd4d="" class="footer-passport">
      <div class="footer-content">
        <div class="icon-wrap">
          <div class="wrap">
            <div class="pItem">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkQ3OUQyQTAwN0UzMTFFOUJDRDdBNjkxRjc5QUY4QUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkQ3OUQyOUYwN0UzMTFFOUJDRDdBNjkxRjc5QUY4QUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DkapOgAAA/VJREFUeNrEl39MjVEYx99bXbdUIiJKJGtmfuTXyq+aFGZaozYaZsN//MEW14/xT5Oujdn43/xhjCUbIgu1Kyo/0jLDRn7MEIt+aFfi9T1vz+HpeN973/KHZ/uc+77nPO89zznPOc9zjkMv0exKMMgAKWAeSAbhoAe8APXgHqjR3Hqr3T912DBgOCgEa8FYG//ZAS6B7TDkQyDlkADte4EbRJq0fQddwAVCWb3QLQBBYM1ADRgBLoD5Sn0V8IIroJkMGARiQTa5KIc6vzVQF4wCD+lPpVwE+6m+r7j1vu8exziU0ahvYHUxxhpy6+8DGRABnoA4ev8CNoNSyyGoBqjicaShvEGLOAv6Xt4cpKhfY523gZl+O7cnC0EYuaoaBg21MmArmEvP3dR5M2s/ACrAdIuRhoJScB4MYy3HmOsc4LSVAYfY8zra21ImgT1gCbgPpiqdO1HeBavASrCeuciHcjnTXgb9VNWAQpomIXXgnDI+sZ/fsIBUCyazzoVfpzD9WmWdvEO5j9UcURfhWzCG6sTUN5hM8khwGyTRu9iC+WR8JtPLRoeVFm4SizqK3sZD71UQ+VR2/syicyEtFH5l+2BQzjoXBs2y7LxXytjzUumCFFZZGWBF/wTp4KlS32b41q0/CPA9X4AZMhJOY5Ves2BFIXkjcNJMhCk6YiAlmOJ4eq839N16h6InXPiNwnei/DCZKTSZGCD2bxF9EE9rJEHRiaQMmUDk085Rg1Ynyo/sG8MAF1PpMjGg28hsmtZKmU7Sw3S+Km2nwGMLN3TTr0u6wMcaw00+ELH2KMHlMtvfEzC6FpuR0ckNCaEFlUOVYi8/svgwltYDzxtSJsL/wcq+N9uGYoAx7NxgGNCkxO0zJgvsLMjzM6oapaPnKBeYZL80dnZ4Kf+8kSlkWpwZ8vqZgJJYUuNSwJ6r5Z83UiSMo5WbouR94atcsIXCsFgTP8AcI+//2V6dLLR7Tc8OvblCSgUPxTvFxLFckGZjlOKQsoKeozDd7QHOBbtQHvwdJ9x6Kk9Gh9luEA2rbRgQqSxQf53Hsc6FbFOzoZjSHUrITOzHebItgO5V9lyO0d8xOw8cp3O9DL8PTCKepoyizDg7+Dt+exzXlVS9wd+ZcAjFBTmlIvptohNy/86EHofIMScodEtZBP0qf2fCdiOlatoneo+mUZb+dQqyHnEMKKbdxTvPVTv3dzOKpVU+W6kX03mTfPqacoCLolsWWEx5nof0TmO3uPXqgVzNiuhm5DRp8zEDIiy+Pwl2W4Zmm3fDeIoTIsWOtuEEH90Ni/tcTv7BAI2lz3SKgDNo2p20hT/ThabOiIomNyBrA3Rd+5/yS4ABAFWRCY8D0na7AAAAAElFTkSuQmCC"
                alt="point1"
              />
              <span>13%增税</span>
            </div>
            <div class="pItem">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjBFQUIzMzkwN0U0MTFFOUFEQzNBOTZDQTY0RDY0ODMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjBFQUIzMzgwN0U0MTFFOUFEQzNBOTZDQTY0RDY0ODMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jFIpsAAAA/ZJREFUeNrEV1lsTkEUvkOttS+piiCWB0IoQtAQYk0s8VA8iCWWhiDxoBeJBInlvoiklsS+hwgajQYR+xZLFLWLIJaoXTW2cn0z/3fbMZ3/+v+WmOSbMzN35syZOcucK3zfd/5nSYh5pidqoe4HpAFdgCZAVX79CTwFrgO7gWOO6z+Pha344w14oi7qBUA6UCWOw20HFkOQO2UXwBNjUa8EanLkErAVOAu8BN5zPBFoBKQA44C+Gpc5EMKLXwBPrEM9ib0sYCkYXYxRXa1QzwKmceQIMBzrv8QmgCey1IJIGYeFW8tkYZ4YiHozbycP6Apen/UpFSyL1nPzt0C7Mm8ui+sfRt0euKV4Oc4Jc0oFY/ORqCfSqlPB4Kb1VJ7oEIcQr9XJHeeFop5YahfAEzVQ72BvNBbejsLyEA0xnpsoRD2o2Cg90dQWB5axfxQL9vyBpW/cikA9AehEfRfyxLvAK5dCXMe8ZUoAx5EGPrBEAE9I/55KdukxnOm90a8MbLDMKwBytf48CjAAezaHUI+CGxhEddzE4EPjdMmolwCNtcjXCePSoD4Al4FMjudifQq+yflzgRxDFT7dezJdNCOh2NUiJdNyis7AeGNMBqbebA+jn0vDDVxsFGmehd9aCiANPiMwwm6kJy0LikgH4wSC7QtsrwniCe3iE/st1Old/7uF333SZroXJJG+CTG4QotQ37THyFHh2RN92N4ZxSOk2vJNN6xIJgW2cE36wSLAF0PQH8BQ9m+EGPHjaM+xH6KCLTjdC7aloR2gfXw1BL1Kmszn2VZ+2CKhbNcIUUFHZQeRUpsnlZ6h67m+8v1IGRFyA41NAV6R1glJWvprRniO7VWG0PVpeNI2xkZ5oKqjbmoKEOirS4jUhZYr/GrMSSRdAVRTwaZ0aaYfOhBgE+nMECOsYnlDKhtzAiE7aDHCLEFM2a8zyibtwRRML5VIj+NbYPU92Z6ueZF+Iy2ZIz6zCDCDdHWJABHfzOKH5cYCmYZtJJXP8z7gIN/4U8B84B6FaEh+rdVVu/5eQ//pSjVS5a5/7feMKPJEBv7ZHRMuxJH5JNAbXmNdwyhzGvCFTFC25vpXfndD13+CenaxSkqrIuy9L6I6JobMyubmu4LN7TmhJ+R70Au4rd4I1y8o99+HJ3IYQ/LBLyk8J5T+HtF1G6UrT/Qsx8YtgNPc/KNSbYxZcSJTr1SOLFK+7frv4rCJKQxUsjwAhmD93Xh/TOQPRYYWfDYxH7wLZvnG3Hp0vzSmZw34ZZuyDfvTHNOvWQqzmzTjS77m5/W0CBeUM8BCbHy0fP+GJYLIvH6MukrHaatFP708UEmtvCXXP/93fk7/cfklwAAnW0Tvl+GWaAAAAABJRU5ErkJggg=="
                alt="point2"
              />
              <span>量大包邮</span>
            </div>
            <div class="pItem">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENEMjc4QUQwN0U0MTFFOTg5ODlENDdEMTY3QjJFQTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENEMjc4QUMwN0U0MTFFOTg5ODlENDdEMTY3QjJFQTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bziQOwAAAotJREFUeNrsl1+ITUEcx+/sXfmf1p941saGojyIJyLlQXmQ5IEktfsiKzltWZRYg0gUijwID17wjJDCPqw2u6TsPiAS2xaFte0dnzn3d7dpnOOee+9xb2Lq+51zz+/3m9/cmfn95neUMSZTy1aXqXGr+QTqy7bUqgluBzPAoUxg7pczjCr5DGjVAB8D2zzJPbCLiTz9c1ug1Vb4VYRz25aDLnQOp78CWk2DL4M1nuQ0eA98p8/BBlajt/IV0GoT/MJz/lYc7AAdPC8G7hmYB3qw3V/+CmjVCJ8Aaz3JKdCG428RNi3wUTDJedsDWtG/nWwCWk2Ht4ODIOtI7oK9DPSoyIrNsgw2e5KLoAP7vvgJaLUCvgkmOzof5B9cK/HALoOPg6WepJmxzsdNoFf2r9DOgT0YfKkgX7TKIR03+i4wKu4QjkhvHa5CsaUi53lnJ+E54JkzdmwUfJf+I4Z3Usu3gXkDd8qv4SSpeAxLl8VwxFnK1Y7NJ2SdJU5jSnl3gVZj4cdgkff+CJNoq8ZtWPeL83xbUJ3b0CYcrebztBGYcHvsFuQjpErXcWBsbt/3DxckWs0OLx8Sl6TnAXCBlRl2dKx8roSZ1XmYpEhJEgXj4ZcRuivBetFphs9G2C4pFq5JtiAH+iLev3aeB2LsvqYRBUP8k4VSD+RGo8Bd3sBcR8eGaqNsQX2YOwLzLq0oGIJvFNHphrv/+ijIen3hMNmqaIsTBYNhwRKYfpFPhA/IrVeIggdyE/pjq99NYKr0MyXr2cEnwLciJt/kFBs7wW5Pvg7bLuesNHh95BbYKvdzWMkEJifvfoArco8PSm+rpEteudbv6TyREr7QzkgKv1rZh8n/j9OU208BBgCX7NKcd2KWbwAAAABJRU5ErkJggg=="
                alt="point3"
              />
              <span>库存充足</span>
            </div>
            <div class="pItem">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYTdlMTQ2YS05MGE0LTMxNDktOTNkYS00YTc3ZDZkYWM1N2MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ5MTk0NUEwN0UzMTFFOUFCM0JDRDk5RTZGNTRDNzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ5MTk0NTkwN0UzMTFFOUFCM0JDRDk5RTZGNTRDNzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZDYwMzY3N2YtZjdhZi1iZTQwLWFmMjEtNTZjMGUzNDVhOTY1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTA2ZjhkYzAtZWQ1ZC0xMWU4LTg0YzQtYTJkMTFkZjc4NzNiIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+znsYKwAAA25JREFUeNq0l3tozWEYx3/nOEabSTSaMbLchjVkUcTmlnJvlkhNuURJyVJCFFlq7jVNLn8gd5lS5PKHPyRlLtkIZczmftlpLts5O75PfX/19HN+5/zes3nq0/u+v97L83vf532e5/VFSi0T6QxGg0EgF6SDJPAZ1JAn4K3XCQMe+40Ci0kvD/3PgjPgYryOvjg7kAnKQKHj+yPwDnwFraArFcsBKarfU7AOXE9kB4rAMZCsFpW/ugyqXcaIIvPAbDAfDAPXwE6w0WQHtoBtrH8B68Fxy0zk2HaDiWzfBFOcnfxRBq5Vi8vWDUlgcZEHYBLYzvZk7kZMBeaAvazLVk+nhbdFNoMVrE8DJ90U6AbOsX4XzLXaTw6DEtYX0T7+sQHptAyEQXfQyO/ZYBboRIv3Ij7Oc5s/Y8stkA8+8dZE7FuQwcVF1qjFRUqpQCIiV7WPai8EDSANrASHAmpRix6s3DHJJlDL4wqrY5P6cFAA3vP4/GoHIuC8Y66PsihYzWtZIUfgo6HJtm9VN8CLTOVNucG6FxkMnrGeJxpncXGRIzEG5tIxjVPfMlSM8CrPQRXrBX41oZxNXYyBYsXFdK1OCRvaxkOWY8QGRrJRG2fQL5ZNLl7vDujA8xdCYBeojNL/Mcu0gNrGujgKhBylllQwPsr3YhcFGlh2CVBby+COR5PXYI+aqyMIglMu/e0j84kC9Q6DSkRegv0G/XuyDPoZs0X6tkGBZMP+OSx/+JWrlOSjR4xBTVGM8BvLZkMFcllWBZjHtfDclqhoqP26uNPebKdT2Qidip2I9Fe3wB5Xp26PLTJPnp0j2MGoAiynMtmOAffUgERkIG1Ex5YNdMuZtu8uYzmUKZXTwMRqf4LvPIJW8pvfguwTUoS5SIuaK4kJj8gB8EeH4ytgptrSoBqYwkATMfhzvyOqWgxYhfwJOYpGnZTKEbxhDtjqYoBtkSKVXZfYymkFJKT2Y7IQstpXZjCjtpPTcrecsOE/LC6Pmausv2CeGTMr1jIA7FC2YSIS5o+CE2xX8zaFTZ5m8h5Yxbo8s06DC3HixliwwBG2LzEdazZ9muXQMeWrb/VMKCR8v+KkGbzvWcrL2SmehOSDib4NbZE0eqnBUdQwe9oXz037DJ/n8koaASbwr1PpfsUhfWCmc9+RiseUvwIMACWA0l6sUWKnAAAAAElFTkSuQmCC"
                alt="point4"
              />
              <span>正品保证</span>
            </div>
          </div>
        </div>
      </div>
      <div class="link-wrapper">
        <div class="link">
          <router-link tag="a" to="/webhelp">帮助中心&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a" to="/payMethod"
             style="color: rgb(115, 115, 115);">支付方式&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a" to="/deliverMethod"
             style="color: rgb(115, 115, 115);">配送方式&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a" to="/aboutUs"
             style="color: rgb(115, 115, 115);">关于我们&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a" to="/newsCenter?id=1"
             style="color: rgb(115, 115, 115);">新闻中心&nbsp;</router-link>
        </div>
        &nbsp;
        <div class="link">
          <span class="links-split"
                style="color: rgb(194, 194, 194);"></span>&nbsp;&nbsp;
          <router-link tag="a" to="/webhelp" 
             style="color: rgb(115, 115, 115);">网站地图&nbsp;</router-link>
        </div>
      </div>
      <div class="credit-wrapper">
        <div class="credit"
             style="color: rgb(115, 115, 115);">
          © 2015-2025 www.gpyd.cn 版权所有
          <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32059002002946"
             target="_blank"
             style="border-right: none; padding-right: 0px;"><img src="https://passport.gpyh.com/static/img/police.d0289dc.png"
                 alt="police"
                 style="position: relative; height: 15px; width: 15px; top: 3px;" />
            备案号 &nbsp;</a>
          <a href="http://beian.miit.gov.cn"
             target="_blank">闽ICP备19024395号</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components:{
  }
}
</script>

<style scope></style>
