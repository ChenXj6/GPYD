<template>
  <section data-v-b1f20ae6="" data-v-29774714="" class="app-main">
    <div data-v-9e077c34="" data-v-b1f20ae6="" class="deadstock">
      <div data-v-9e077c34="" class="wrap">
        <div data-v-9e077c34="" class="breadcrumb-row">
          <div
            data-v-9e077c34=""
            aria-label="Breadcrumb"
            role="navigation"
            class="el-breadcrumb breadcrumb"
          >
            <span data-v-9e077c34="" class="el-breadcrumb__item"
              ><span role="link" class="el-breadcrumb__inner"
                ><a data-v-9e077c34="" href="https://www.gpyh.com"
                  >首页</a
                ></span
              ><i class="el-breadcrumb__separator el-icon-arrow-right"></i
            ></span>
            <span
              data-v-9e077c34=""
              class="el-breadcrumb__item"
              aria-current="page"
              ><span role="link" class="el-breadcrumb__inner">尾货清仓</span
              ><i class="el-breadcrumb__separator el-icon-arrow-right"></i
            ></span>
          </div>
          <span data-v-9e077c34="" class="breadcrumb-amount">共3889件</span>
        </div>
      </div>
      <div data-v-9e077c34="" class="banner">
        <a
          data-v-9e077c34=""
          href="https://site.gpyh.com/article/843.html"
          target="_blank"
        ></a>
      </div>
      <div data-v-9e077c34="" class="wrap">
        <div data-v-9e077c34="" class="category">
          <a data-v-9e077c34="" href="#" class="fl active"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAxCAYAAABkvtHVAAAW9UlEQVRogc16eYwc153eV3d1dVXf0z3dPffB0UjkmJRIyTpGomRbXlErWJEVLhxtsjEUW/JagLFZaO0gigFurCSGAFtQHFtYID6hGIbX0i4XlqKDK1KURXJJasRjLs7Jnhn2fVZ1VXWd+WNYlTE1WnthJ8sHNAjMDF+/7/2u7/f9HuG6Lq7HJYoiNE2DKIpwHAeGYaQlSbp19+7dd46Ojt6USCR6RVGMuK7LKopil8tluVQqFarV6uLKyso527aP1+v1S7quqxzHodPpgLjewQaDQQSDwQOZTOa/JhKJic9+9rN44IEHUK/X0Wg0YFkWOp0Oms0misUiisUiFEVBq9XSLly4cGx5efnVZrP5v1zXrV7XYFVVheu66Orq+uHBgwf/RNd1zMzMQJIk3HTTTZiYmADP87BtG7IsI5/Po1QqwTAMdDodBAIBNJtNrK6unr9w4cK/v27BCoKATqczGo/Hv7B3794/jkajaUEQwLIsSqUSWJZFKpUCSZLgeR6WZUGSJIRCIei6juXlZayurkKSJFAUhVardf1aNhwO3zM6OvqjnTt39t955504duwYcrkcxsfHEYvFYBgGWq0WisUiYrEYbr75Zqiqinq9jmq1ilAohFKphLW1NUQiEcRiMZlwXReyLINhGLz22muQJAnNZhM7d+6EIAgoFAro6urC7OxsQhCELEmSfyjLctCyLJ6iKFAU5VAU5VIU5ZIk6VAU5XAc1wmFQov1ev2wKIqOJEltWZZhWRYYhkGtVkMgEICu60in0xgZGfkQ2Lvvvns5m80OmqaJQCAAiqKQzWahqip0XUehUIAkSbAsC11dXYhEIjBNE7ZtI5FI4PTp0zh//jzGxsYwNjaGer1eobe7VYIgwLIsqtVqqlQqffrSpUv3EwRxd61Wk0iSjPA8D47jwDAMKIoCy7IgSRIkSYKiKDiOg2azCY7jVk3T1BuNxvMA/hpA9be1rGVZOsdxUFUVly9fBsMwaLVaoCgKiUQC+/btA8MwIAgCpmmiVCohn8+jUChAlmV0dXXh4MGDmJiYwKVLl3D27FniQ2BpmoZlWeLU1NSThULhCYZhRliWBU3T4HkePM8DAGzbhmVZsG0bJEmC4zgEAgFwHAdBEEDTNGzbHrh6CS8C+JJpmt9zXfdvHccp/Caw5XK5FI/Hx8PhMCYmJlAsFtFqtTA2NgZN0/DGG2/AdV1QFAWaptHf34+xsTHs378fPT09yGazYBgGv/zlL3Hy5EnEYjHQAPwgZxgG+Xz+vmq1+ucA/iAQCJDeZoFAAO12GwsLC2g0GnAcBzRNw3VdMAwDQRAQCARA0zQYhkFfXx/6+/tBkiRs2wbDMB9jWfZF13Uf43n+Kdu2FwmCUD8KLMuyuuu6KBaLSCaTGB4ehiAICAaDCIfD2L9/PyRJQiQSQTgcRiAQAACYpglFUXDixAmcOnUK4XAY4+PjOH/+/CZYWZYxPT1Nr6+v/4Wqqv+W5/lRlmXhXQRN05iamsLc3BwMw4AoiohEIhAEASRJ+hZ2XReqqqJareL8+fPo7+/H/v37EY1GYVkWAICiqMmenp53V1ZWXjQM4xskSba2A2sYhubFI03TME0TpmmiUqlA13W/vGiahlKp5HtarVZDpVJBNBrF/fffj+npaeRyuU1vA4BarUb85Cc/eTyTyTwTi8UCXob24vDUqVO4cOECaJoGSZIAAFEUnVAodIXjOJVhGJthGI6iqKDruknXdQmKorC6uoo333wTDz74IILBIAiCAEEQsCxLGhwcfPrChQtMu93+CwDmtWBd15VZlkW5XEYikUAmk4EkSeB53rdwKBTyQ8ZxHADAwMAAyuUyZmZmcOLECYRCIXR3d2+eHwByudwkSZL/JRaLBSzL8t2TpmnfSo7jIBwO67t27TqRTqd/ZNv24q5duy5Ho1GZpmlbURS+XC6HNjY2sslk8uGlpaU/arVa2VKphOnpaUxOTkLXdf+yaJpGOp3+d7Va7SUAZ64Fa5qm0+l0EI1GIUkSKpUKWq0WYrEYTNOEZVlwXRemaYKiKFiWhUqlgmazCZZl0dPTg66uLuTzeeRyOUiStAn2nXfe+ZwkSTEA/u1fdTkYhgHHcdxdu3b977179z5LkuSvkskk5ubm4DgObNsGQRBwHEdxXbdC0/Ryb2/v8Z07d35zYWHhz86cOfMllmXDXjJxXdfPoJFIRHQc56HtwFqWVWYYBu12GwCQzWbR19cHQRBAURQ4joMoigiHwwiFQuB5HqZpolAoYH19HZVKBcViEQzDoLu7G9PT074bh6LRqA/UA2uaJsLhMB599NG/v/322w8wDINCoYBgMIj9+/cjk8mgVCqBIAj09vZCEASEQiEkEgkYhlGanJz8D5FIZKSrq+tR0zT90PD2J0kS0WjU2i5mXdclOp2OD8Z1XayursK2bUiShFgshkgkglarBdu2oeu6XwavJkTs2bMHFy9eRKlU2kyeAMBxnJ7L5TA0NOTXSc+VBUEAx3FDtVrty7FY7GcURVUURUF3dzcCgYDPX1OplJ+JaZrG2tpawjCML2YymU8zDONb1ANpWRbC4TDOnz+fHhwc/BDYTqdTYFkWmqaBoigEg0HEYjEkEgn/AjwXpygKuq6jXq9D0zRomoZcLoeTJ0+ip6cHqqqiVCptgs1ms8qlS5ewsrKC0dFR2LbtfylBEDAMY7BQKHyn2Ww+QVHUS6Iorui6vqqqat627QIAV9f1AcuyEpZlJer1+j2SJN3PsuwNJEmyjuOAoigQBOHVX3AchytXruDVV1+N7t+//0NgSZJ0NU1DKBSCJEkwTROqqqJSqUBRFJTLZUiSBFEUEQwGwTAMFEVBtVpFu91Gb28v4vE4pqenoWkaeJ7fBLtjx44PlpaW3OXlZYIgCPT39/vkwXVdkCQJlmXhOM4ugiD+W7vdxuLiorO6uqrQNH2KJElnfn7+dpqmJZZlCa9uA5vkw2NYDMOg2WxC13UEAgF861vfQl9f37nt3FjX9SJN0yAIAtVqFdlsFrFYDKIogqZpBINBH6zH5hKJBKLRKHK5HGZmZuA4DtLpNHK5HDqdzibY7u7u12688cYLy8vLExsbGzBNE5lMBpFIBAzDbL1tXOXDoGmaZBgmRBDEpyiK8qmjF/Mes6LpTZKmqio2NjZQq9XQ6XRw7NgxLCwsFB577LGXtwNLkqTlZd1UKgWO45DP5yGKIgRBgGVZfsi5rgvHcSDLMnRdRyQSwdDQEHRdx+LiIrwKQwNAPB4v9Pb2Pi/L8vdpmoamadjY2ICu64hGowgEAj7QrQnGc0/Xdf1SQBAEXNcFx3HwLFMul5HL5ZDL5bC+vo6FhQXU63X1M5/5zH/q6em5tB1Y0zQbnjfIsgySJJFOp5FKpZBIJCCKIiRJQjgchiAIMAwD5XIZ5XIZtVoN5XIZuq6jv78fs7OzME3Ttyzi8fiParVaot1u/ynLsgMAoGkaXNdFIBDAVn7McZz/IUkSgUDAdydBECAIgu/Ga2trWFhYwNTUFC5fvoxmswnXdev33HPPfxwcHPyfhmFshxUkSXZs23Y6nQ7pkQeKolCpVFCr1RAMBiGKIkKhEILBIDwi5JGLHTt2oFgsYn5+HjzPb+YLL654nndSqdRzlmVN5/P5bzmOM8ayLFiWBUVRsG0bjuNs+v5VriyKIhiG8cuN67pot9uo1+soFAqYmZnBwsICNjY2IMsyXNdFd3f3iYceeug/W5b1mq7r2wIFAMuyFMdxCEEQoKoqAoGAXwpjsRhCoZBPWb3KoSgKAKBer2NqagrpdBpDQ0OYm5v7v2C9GzEMA6Ojo6/eeeed02+99da9tm1/jiCIewRB4LybNQwDmqah1WqhXq/j8uXLOH/+vE8UTNOEpmmQZRmtVguqqgJAbWBg4OLo6OgPBgcH/2ZiYqJx9OjRX8sH1y7btjsANFVVhWg0inA4DNM00W634fF2L3x4noeu66hWq3BdF729vRBFEcvLy2i3257lxQ+1eI7jQBTFy4lE4oeJROJnDMPcValUbmJZ9o8BdDmOQxIEkSIIgnEcB5Zl+U3z1Q6oJgiCxTCMEYlEjouiOMUwzBujo6NzgUCgU6vV8I9Z1FtdXV20ZVk8x3EAgHK5jHg8jng8jlAo5NfZUCgEhmHgOA6CwSCWl5cxOzsLgiCQSCT8xKZp2tltm3fbtmHbNiiK0qLR6JvhcPjNTCbznaWlJalWqzF9fX27VVXdq2kaa5om6TiOS9O0FQqFGvl8/oimadrw8LASi8XK586dg0cOPHf7bZbruhuWZZ0jCGKPaZqIRqOIx+OwLAvFYtGXX8LhsN9Le7oUwzAwDAO5XA6hUAgURa3Oz89/+brVoCKRCFiWvfvWW2/9/sDAwDDDMOA4DpIk+XQxmUwiGAz67Z2maWg0GlBVFQRBIJPJuO++++7xl19++SuKonxw3YKNxWLgeR6apo329/f/6eTk5EMjIyPD4XAYoiiC53kEAgG/cb/K9NDpdNBoNMrvvffesdnZ2ZdfeeWVX9xwww1Gs9nEtm58PS2KohbOnTv3Z6FQ6PlTp07t6urq+tj4+PjY0NBQIpPJCLZtQ1EUNZfLVebn5xenp6en77rrrosvvPDC0i233GKFQiF/r+vWsv8vFvnPfYD/n+u6dOPh4WE0m00cOHAAPM/DcUns2DEKUeB3JJOJG9LpVH8sEknJSkvSNI2SpJBqW3bFtJ01w7AWDcs5NzV1zjj9D6cQj0fx0ksvod1ug9Y0Dd/73vdw8ODB7uPHj3+s0+msr6+vz0YiEadQKKBYLPq9qkfVRkZGoCgKarWaX+S7urpgmiaee+45zM3N4d133yWazeaBtbW1A/l8fp4kyZ+qqlq+5ZZboCgKlpeXQdM0Dh8+/CGwXumTlTYYlu8aG+l54u7bJ/4wEYvuA2zS6HSgyQVwFAUhxMJ1VPAcBYZmQdIBgKSXYI28tZZb+VGpXDvhUVL6Knm/QRTFN0VR7CFJUkun02dkWT4F4ASAkwCu/FMs47ouIQjC07Va7Zv5fB6qqkIQhE8TBPGF32Yv13VhWjYYmjz41Bc+98OxHYMB0zSxunoZpWIRrZYMwzTgug4IkFtavk2ZJplKDt83ecvwvj3jT/zVD3724l//3P4SANAcx8UefvjhV8vlcs+OHTtgmmZA1/VJWZYn2+02Wq2WWSqVZiuVykkAvwJwGsAlAPZHHZZl2S9WKpVvzszMgOM4ZDIZlMvlA7IsP0IQxHd+E9hHHnkE9YY8cfcdu3+257Y9aFWbOHLkbeQ31hGORDa1aMuCCxckQYAgXHQ6OmzbQrFYwOrqCvbcsg+9w304+MgDT07PLecr5eJf0r/4xS8ekyRp0CPz3iQsHo/DNE3ous7ouj6hKMpEs9n84tX2abnVap3EpuVPALhIUVSnXC7j7NmztxqG8e2FhQVIkoShoSEMDAygXq+j1Wo9D+CPGo3G3wL4HwC07cCWy2UIQvBfx7p6sLq4DpZ2MDTYB9cxUSwU0TFMBMUQCIKC49qwZQ2GUUI4LCKVSiGZTIKhCDi6C5cOQxLFf1OtlP6SPn78+G3ZbBbNZguRSBjJZNLvGz2NxyP5niitadqQLMtDzWbzX1WrVbdWqxXy+fyvSJI8oWnarfl8PgAAo6OjGB8fR61Wg23byGazlOu6d83Pz9/lOM5OAE8A6FwL9vLly6AoSh8fH8d9n/gUQlIQmYEJ7Lq5iYX5GahtFcnuLBiGg2XbkOUmauUixGAAI2PjEEJJACR0vYPDf/cSZmYuyoIggN63b98cTdMoFkvQdQ1LS0uYnZ0FwzCIRCLIZDLo7e1FOp1GNBpFKpUCABiGAVVV0W63CVmW05VK5VFJkh7NZrM4c+YMxsfHMTEx4XNYTyc6ffo0Go0GUqnUnzSbzX8A8N1rwSaTSRSLxdVXXnkZ6+truPe+T2JgYBBdXQncsOv2fzQEFEXF7PwSFi5dwpG33sDZs2cBoLaysgLiG9/4Rnc6nZ4Kh8PdlmXBMAzoug5ZlqEoClRVhWmavsbjzXCy2Syi0SgYhvHFsHg8jsOHD+PIkSN48MEHwbIs1tbWfBF7enoG5859AJZlcccdd6BQKEy98MILN1974GeeeWZHLBY79vbbb3fPzs7Ca/EikQii0RhCPmUMgGUYgACMTgf1Rh3lUhm1WtUX34LBIA4cOOCurKw8QRw6dAjtdvvGycnJZwuFwsd5nu/2dCavx22322g2m2i1WtA0DY7jQBAEJJNJ9Pf3Y2hoCIODg5iZmcHrr78Ox3H84VdPT4/fWy4tLfnC+t69exEMBpe++tWvfmg4Ozk5+Vd9fX1f2L17NxRFwWuvvebPmDxNC8CvieWeOkKSJHRdx8bGBlKpFPbu3YvZ2VkUi8WG9z9nAPwLALyu63fatn0vTdOfoCjqYwzDBDy91rOgLMtoNpvY2NjA0tISjh496gvZiUQCNE2jVquhVquhWq2Cpml4opxXQw3DQCKRiG/nivF4vL62toZCoYDnnnsOn//85/Hzn/8cFy9eRKPRQCAQQDQa9XOKt68syzBNE6lUCgcPHsTQ0BAOHTqEubk5xOPxK9cyKB3AEYIgjnQ6nWd0Xe/mef5ekiTvIUnyExzHDQuCQEiShO7ubi9moaoqCoUCKIpCKBSCoiigKMrvRrz+0pvkecKc4zjbEnPXdWuxWAzVahVPPvkkjh49iqeffhoA0Gq18MEHH2B5eRmt1uYA0MstIyMjGBgY8Pd5/PHH8f7772N4eBiO4zR/E10sAPgpSZI/bbVahOu6NzIM8ymWZT/BMMwkz/NhjuMQi8X8Jzqe+u84jq9CEgSJrbg8vchxnNpHgJU9L1ldXcVXvvIVPPvss1hZWcGZM2dw5coV1Ot1GIbhD+A8A+zevRv79u3Dj3/8Y7z99tu48cYbPVlX+6dwYxfANIBpkiSfX1xcjJIkeUckErlP1/V7DcOYSKVSFADfiiRJXlUmXDiO7cuwJEnCcRxUq9XT230Ry7KKrutwXRf9/f1YWlrC448/Dk3T/CrhKZtXR6Aol8tYXV3F8ePHkclksLS05FnUu0D1d+l66gB+CeDPOY77+G233fZMMBiEZVl+IvOW9/bBA3/TTTfh4Ycfhm3br3wEWHerNOrJsul0Gul02pdVt77j4DgO8XgcfX19v/bOY4uWTf1OLZ7ruuB5Hl/72teMycnJxUajAU3TfJnVsiw4joNIJOJPz9vtNj75yU+ip6dHm5mZeX27fRVF+cBTHr3DbrWk9+/Wz9afMQyzxas2F0VR7/9OYEmSxFNPPeVtVgwEAmi1WkgmkxgfH0dvb69PSBiGgaqqGB0dRXd3N77//R98W9f1bd9UNBqNC7quv+gJdN6hvfGK993XAvZAbwV69e8rAA793pp3iqLWo9Go7M1cXNf1y5E3ReN5Hrfddhveeecd7b33fvUdmqY/9LwAAIrFItbW1r7U6XSWrrXwR1nW+3gjl63Db1mW/6BWq5m/U/NOURQOHTrkHabAcdx3Y7HYV6+Sfr8mK4oCQRCQzWbx+uuvGxzHHXAcJ/9R+4bDYViWhWazuS+ZTP49QRC7vWni1lnTVit7ywN7dQZsAPiXyWTyrOM4vz9ZhiAITdO0/762tnbce7WytLR0cW1t7YFSqXRfo9F4iSCId8rl8sdN0zzqHXS7RdO0N4asFwqFPYqifFkUxfevatn+Q5atbruVtJimud5qtb49MzPTz/P8YW+USX/961//feEFgA0Ad3/E797+bTfx6jRFUd5s6bssy3633W6PWZZ1K8uyO2iazlIUFSJJknQcp+04Tsm27WVFUd4PBoMnOp0OZFn2RzaWZeH/AIme6/u5UjF7AAAAAElFTkSuQmCC"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">全部</p>
              <p data-v-9e077c34="">(3889)</p>
            </div></a
          >
          <a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p3.gpyh.com/web/image/dzp/Category/1184105763category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">螺钉</p>
              <p data-v-9e077c34="">(1408)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p3.gpyh.com/web/image/dzp/Category/1184117407category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">螺母</p>
              <p data-v-9e077c34="">(198)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p5.gpyh.com/web/image/dzp/Category/1184010769category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">垫圈</p>
              <p data-v-9e077c34="">(170)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p3.gpyh.com/web/image/dzp/Category/1184050117category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">紧定</p>
              <p data-v-9e077c34="">(380)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p5.gpyh.com/web/image/dzp/Category/1183910754category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">铆接类</p>
              <p data-v-9e077c34="">(65)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p5.gpyh.com/web/image/dzp/Category/1184952514category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">钻尾</p>
              <p data-v-9e077c34="">(17)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p5.gpyh.com/web/image/dzp/Category/1183953589category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">挡圈</p>
              <p data-v-9e077c34="">(130)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p3.gpyh.com/web/image/dzp/Category/1184028518category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">键</p>
              <p data-v-9e077c34="">(40)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p4.gpyh.com/web/image/dzp/Category/1184242888category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">螺栓</p>
              <p data-v-9e077c34="">(702)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p2.gpyh.com/web/image/dzp/Category/1184222306category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">螺柱</p>
              <p data-v-9e077c34="">(30)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p3.gpyh.com/web/image/dzp/Category/1185126307category.png"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">销</p>
              <p data-v-9e077c34="">(645)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p2.gpyh.com/web/image/dzp/Category/1185038812category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">牙棒</p>
              <p data-v-9e077c34="">(26)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p1.gpyh.com/web/image/dzp/Category/1185359660category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">非标平垫圈</p>
              <p data-v-9e077c34="">(49)</p>
            </div></a
          ><a data-v-9e077c34="" href="#" class="fl"
            ><div data-v-9e077c34="">
              <img
                data-v-9e077c34=""
                src="//p1.gpyh.com/web/image/dzp/Category/1185212405category.jpg"
              />
            </div>
            <div data-v-9e077c34="">
              <p data-v-9e077c34="">其它</p>
              <p data-v-9e077c34="">(29)</p>
            </div></a
          >
          <div data-v-9e077c34="" class="dpd-hover fr has-deadstock">
            <div data-v-9e077c34="" class="trigger">我有尾货</div>
            <div data-v-9e077c34="" class="dpd-layer">
              <div data-v-9e077c34="" class="has-deadstock-content">
                <h5 data-v-9e077c34="">我要发布</h5>
                <div data-v-9e077c34="" class="release-instructions">
                  <a
                    data-v-9e077c34=""
                    href="https://www.gpyh.com/article/detail?newsType=news&amp;typeId=4&amp;newsSunListId=502"
                    target="_blank"
                    class="fl"
                    >PC端操作说明</a
                  >
                  <a
                    data-v-9e077c34=""
                    href="https://www.gpyh.com/article/detail?newsType=news&amp;typeId=4&amp;newsSunListId=895"
                    target="_blank"
                    class="fr"
                    >微信端操作说明</a
                  >
                </div>
                <div
                  data-v-9e077c34=""
                  class="clear"
                  style="margin-bottom: 20px;"
                >
                  联系周小姐：15371827391
                </div>
                <h5 data-v-9e077c34="">一次性卖掉</h5>
                <div data-v-9e077c34="">联系王先生：13761777991</div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-9e077c34="" class="search-keyword" style="display: none;">
          搜索“”
        </div>
        <div data-v-9e077c34="" class="filter-block deadstock-filter-block">
          <div class="filter-block-wrap">
            <!---->
            <div class="filter-table">
              <div class="filter-table-fld table">
                <div class="td filter-fld-name">材质</div>
                <div class="td">
                  <div class="filter-fld-list">
                    <span><label>304</label></span
                    ><span><label>316</label></span
                    ><span><label>8.8级</label></span
                    ><span><label>A2-70</label></span
                    ><span><label>A4-80</label></span
                    ><span><label>10.9级</label></span
                    ><span><label>8级</label></span
                    ><span><label>4级</label></span
                    ><span><label>10级</label></span
                    ><span><label>316L</label></span
                    ><span><label>45H</label></span
                    ><span><label>65Mn</label></span
                    ><span><label>12.9级</label></span
                    ><span><label>铝/铁</label></span
                    ><span><label>304/304</label></span
                    ><span><label>40CR/10.9级</label></span
                    ><span><label>Q235/4.8级</label></span
                    ><span><label>SUS410</label></span
                    ><span><label>04级</label></span
                    ><span><label>1008</label></span
                    ><span><label>1022</label></span
                    ><span><label>1022渗碳钢</label></span
                    ><span><label>10B21</label></span
                    ><span><label>1215</label></span
                    ><span><label>12级</label></span
                    ><span><label>201</label></span
                    ><span><label>20钢</label></span
                    ><span><label>22H</label></span
                    ><span><label>2H</label></span
                    ><span><label>304/304（全钢）</label></span
                    ><span><label>304/420</label></span
                    ><span><label>304/Q235</label></span
                    ><span><label>33H</label></span
                    ><span><label>35#</label></span
                    ><span><label>4.8级</label></span
                    ><span><label>40Cr</label></span
                    ><span><label>40CR/45H</label></span
                    ><span><label>410</label></span
                    ><span><label>45#</label></span
                    ><span><label>45#淬火</label></span
                    ><span><label>5.8级</label></span
                    ><span><label>59铜</label></span
                    ><span><label>6.8级 </label></span
                    ><span><label>60Si2Mn</label></span
                    ><span><label>65Mn/Q195</label></span
                    ><span><label>667</label></span
                    ><span><label>6级</label></span
                    ><span><label>70#</label></span
                    ><span><label>A193B7</label></span
                    ><span><label>A2</label></span
                    ><span><label>A3</label></span
                    ><span><label>HRC38-45</label></span
                    ><span><label>HV100</label></span
                    ><span><label>HV140</label></span
                    ><span><label>HV160</label></span
                    ><span><label>HV200</label></span
                    ><span><label>HV300</label></span
                    ><span><label>ML08AL</label></span
                    ><span><label>PE</label></span
                    ><span><label>Q195</label></span
                    ><span><label>Q235</label></span
                    ><span><label>SCM435</label></span
                    ><span><label>SCM435/12.9</label></span
                    ><span><label>SWRCH22A</label></span
                    ><span><label>黄铜</label></span
                    ><span><label>黄铜H59</label></span
                    ><span><label>铝</label></span
                    ><span><label>铝/铁芯</label></span
                    ><span><label>美制2级</label></span
                    ><span><label>美制5级</label></span
                    ><span><label>美制8级</label></span
                    ><span><label>塑料</label></span
                    ><span><label>碳钢</label></span
                    ><span><label>碳钢</label></span
                    ><span><label>铁</label></span
                    ><span><label>铁/铁</label></span
                    ><span><label>轴承钢</label></span>
                  </div>
                  <div class="btn-wrapper">
                    <button class="btn btn-fld-confirm">确定</button>
                    <button class="btn btn-fld-cancel">取消</button>
                  </div>
                </div>
                <div class="td filter-fld-operate">
                  <a href="javascript:;" class="filter-multi"></a>
                  <a href="javascript:;" class="filter-open"></a>
                </div>
              </div>
              <div class="filter-table-fld table">
                <div class="td filter-fld-name">品名</div>
                <div class="td">
                  <div class="filter-fld-list">
                    <span><label>DIN125</label></span
                    ><span><label>DIN912</label></span
                    ><span><label>DIN933</label></span
                    ><span><label>DIN934</label></span
                    ><span><label>GB5782</label></span
                    ><span><label>GB5783</label></span
                    ><span><label>GB6170</label></span
                    ><span><label>GB97</label></span
                    ><span><label>DIN985</label></span
                    ><span><label>GB70</label></span
                    ><span><label>GB70-76</label></span
                    ><span><label>GB70.1</label></span
                    ><span><label>GB818</label></span
                    ><span><label>GB819</label></span
                    ><span><label>GB845</label></span
                    ><span><label>ANSI B18.2.2</label></span
                    ><span><label>ANSI B18.21.1-09 Table3</label></span
                    ><span><label>ANSI B18.3</label></span
                    ><span><label>ANSIB18.2.1</label></span
                    ><span><label>ANSIB18.2.2</label></span
                    ><span><label>ANSIB18.2.2四方螺母</label></span
                    ><span><label>ANSIB18.21.1</label></span
                    ><span><label>ANSIB18.22.1(USS)</label></span
                    ><span><label>ANSIB18.3BT</label></span
                    ><span><label>ANSIB18.3F</label></span
                    ><span><label>ANSIB18.3SH</label></span
                    ><span><label>ANSIB18.3SH(滚花)</label></span
                    ><span><label>ANSIB18.3SH滚花</label></span
                    ><span><label>ANSIB18.5</label></span
                    ><span><label>ANSIB18.6.3</label></span
                    ><span><label>ANSIB18.6.3F</label></span
                    ><span><label>ANSIB18.6.3P</label></span
                    ><span><label>ANSIB18.6.3P</label></span
                    ><span><label>ANSIB18.6.3P细牙</label></span
                    ><span><label>ANSIB18.6.4</label></span
                    ><span><label>ASME B18.3</label></span
                    ><span><label>ASMEB18.3</label></span
                    ><span><label>BSO盲孔压铆螺母柱</label></span
                    ><span><label>DIN125B</label></span
                    ><span><label>DIN128A</label></span
                    ><span><label>DIN137A</label></span
                    ><span><label>DIN137B</label></span
                    ><span><label>DIN1587</label></span
                    ><span><label>DIN3017A</label></span
                    ><span><label>DIN316</label></span
                    ><span><label>DIN433</label></span
                    ><span><label>DIN434</label></span
                    ><span><label>DIN436</label></span
                    ><span><label>DIN439</label></span
                    ><span><label>DIN439-2</label></span
                    ><span><label>DIN463</label></span
                    ><span><label>DIN471</label></span
                    ><span><label>DIN472</label></span
                    ><span><label>DIN508</label></span
                    ><span><label>DIN571</label></span
                    ><span><label>DIN603</label></span
                    ><span><label>DIN6325</label></span
                    ><span><label>DIN6796</label></span
                    ><span><label>DIN6797A</label></span
                    ><span><label>DIN6798A</label></span
                    ><span><label>DIN6798J</label></span
                    ><span><label>DIN6912</label></span
                    ><span><label>DIN6916</label></span
                    ><span><label>DIN6921</label></span
                    ><span><label>DIN6923</label></span
                    ><span><label>DIN6925</label></span
                    ><span><label>DIN6926</label></span
                    ><span><label>DIN71412</label></span
                    ><span><label>DIN7349</label></span
                    ><span><label>DIN7500PE</label></span
                    ><span><label>DIN7504K</label></span
                    ><span><label>DIN7504P</label></span
                    ><span><label>DIN7516</label></span
                    ><span><label>DIN7981</label></span
                    ><span><label>DIN7982</label></span
                    ><span><label>DIN7984</label></span
                    ><span><label>DIN7985</label></span
                    ><span><label>DIN7985HP</label></span
                    ><span><label>DIN7985TX</label></span
                    ><span><label>DIN7991</label></span
                    ><span><label>DIN9021</label></span
                    ><span><label>DIN906</label></span
                    ><span><label>DIN908</label></span
                    ><span><label>DIN910</label></span
                    ><span><label>DIN912弹垫组合</label></span
                    ><span><label>DIN912平弹垫组合</label></span
                    ><span><label>DIN913</label></span
                    ><span><label>DIN914</label></span
                    ><span><label>DIN916</label></span
                    ><span><label>DIN9250</label></span
                    ><span><label>DIN928</label></span
                    ><span><label>DIN929</label></span
                    ><span><label>DIN93</label></span
                    ><span><label>DIN931</label></span
                    ><span><label>DIN934反牙</label></span
                    ><span><label>DIN936</label></span
                    ><span><label>DIN939</label></span
                    ><span><label>DIN963</label></span
                    ><span><label>DIN964</label></span
                    ><span><label>DIN965</label></span
                    ><span><label>DIN967</label></span
                    ><span><label>DIN968</label></span
                    ><span><label>DIN975</label></span
                    ><span><label>DIN976</label></span
                    ><span><label>DIN980M</label></span
                    ><span><label>DIN980V</label></span
                    ><span><label>DIN982</label></span
                    ><span><label>F436</label></span
                    ><span><label>GB/T12615.1</label></span
                    ><span><label>GB/T16674.1-2004</label></span
                    ><span><label>GB10</label></span
                    ><span><label>GB102</label></span
                    ><span><label>GB109</label></span
                    ><span><label>GB1096</label></span
                    ><span><label>GB117</label></span
                    ><span><label>GB118</label></span
                    ><span><label>GB119</label></span
                    ><span><label>GB119.2</label></span
                    ><span><label>GB119.2A</label></span
                    ><span><label>GB12</label></span
                    ><span><label>GB120</label></span
                    ><span><label>GB12615</label></span
                    ><span><label>GB12616</label></span
                    ><span><label>GB12617</label></span
                    ><span><label>GB12618</label></span
                    ><span><label>GB13680</label></span
                    ><span><label>GB13806.2A</label></span
                    ><span><label>GB13806.2B</label></span
                    ><span><label>GB14</label></span
                    ><span><label>GB15856.1</label></span
                    ><span><label>GB15856.4</label></span
                    ><span><label>GB16824.1</label></span
                    ><span><label>GB16824.2</label></span
                    ><span><label>GB21</label></span
                    ><span><label>GB24425.3</label></span
                    ><span><label>GB2670.1</label></span
                    ><span><label>GB2670.2</label></span
                    ><span><label>GB2671.1</label></span
                    ><span><label>GB2672</label></span
                    ><span><label>GB2672 带柱</label></span
                    ><span><label>GB2672平弹垫组合</label></span
                    ><span><label>GB2673</label></span
                    ><span><label>GB2674</label></span
                    ><span><label>GB27</label></span
                    ><span><label>GB29.2</label></span
                    ><span><label>GB30</label></span
                    ><span><label>GB31.3</label></span
                    ><span><label>GB32.1</label></span
                    ><span><label>GB35</label></span
                    ><span><label>GB37</label></span
                    ><span><label>GB51</label></span
                    ><span><label>GB52</label></span
                    ><span><label>GB5281</label></span
                    ><span><label>GB5287</label></span
                    ><span><label>GB54</label></span
                    ><span><label>GB55</label></span
                    ><span><label>GB56</label></span
                    ><span><label>GB5780</label></span
                    ><span><label>GB5781</label></span
                    ><span><label>GB5785</label></span
                    ><span><label>GB5786</label></span
                    ><span><label>GB5787</label></span
                    ><span><label>GB5789</label></span
                    ><span><label>GB6171</label></span
                    ><span><label>GB6172</label></span
                    ><span><label>GB6172.1</label></span
                    ><span><label>GB6173</label></span
                    ><span><label>GB6175</label></span
                    ><span><label>GB6176</label></span
                    ><span><label>GB6177</label></span
                    ><span><label>GB6178</label></span
                    ><span><label>GB6181</label></span
                    ><span><label>GB6182</label></span
                    ><span><label>GB6184</label></span
                    ><span><label>GB6187</label></span
                    ><span><label>GB62 </label></span
                    ><span><label>GB62.2</label></span
                    ><span><label>GB65</label></span
                    ><span><label>GB65-85</label></span
                    ><span><label>GB6560</label></span
                    ><span><label>GB6561</label></span
                    ><span><label>GB6563</label></span
                    ><span><label>GB6564</label></span
                    ><span><label>GB67</label></span
                    ><span><label>GB67-76</label></span
                    ><span><label>GB68</label></span
                    ><span><label>GB70.1弹垫组合</label></span
                    ><span><label>GB70.1平弹垫组合</label></span
                    ><span><label>GB70.1三组合</label></span
                    ><span><label>GB70.2</label></span
                    ><span><label>GB70.3</label></span
                    ><span><label>GB71</label></span
                    ><span><label>GB7244</label></span
                    ><span><label>GB73</label></span
                    ><span><label>GB75</label></span
                    ><span><label>GB77</label></span
                    ><span><label>GB79</label></span
                    ><span><label>GB799</label></span
                    ><span><label>GB8</label></span
                    ><span><label>GB80</label></span
                    ><span><label>GB801</label></span
                    ><span><label>GB810</label></span
                    ><span><label>GB812</label></span
                    ><span><label>GB818-76</label></span
                    ><span><label>GB818-85</label></span
                    ><span><label>GB818复合槽</label></span
                    ><span><label>GB819-76</label></span
                    ><span><label>GB820</label></span
                    ><span><label>GB822</label></span
                    ><span><label>GB823</label></span
                    ><span><label>GB825</label></span
                    ><span><label>GB827</label></span
                    ><span><label>GB83</label></span
                    ><span><label>GB834</label></span
                    ><span><label>GB837</label></span
                    ><span><label>GB845(BT型)</label></span
                    ><span><label>GB845(BT型)</label></span
                    ><span><label>GB845-76</label></span
                    ><span><label>GB845-F</label></span
                    ><span><label>GB845平尾</label></span
                    ><span><label>GB845平尾割尾</label></span
                    ><span><label>GB846</label></span
                    ><span><label>GB846-76</label></span
                    ><span><label>GB847</label></span
                    ><span><label>GB848</label></span
                    ><span><label>GB849</label></span
                    ><span><label>GB850</label></span
                    ><span><label>GB853</label></span
                    ><span><label>GB858</label></span
                    ><span><label>GB859</label></span
                    ><span><label>GB862.1</label></span
                    ><span><label>GB862.2</label></span
                    ><span><label>GB867</label></span
                    ><span><label>GB872</label></span
                    ><span><label>GB873</label></span
                    ><span><label>GB875</label></span
                    ><span><label>GB879</label></span
                    ><span><label>GB879-86</label></span
                    ><span><label>GB879.1</label></span
                    ><span><label>GB879.2</label></span
                    ><span><label>GB881</label></span
                    ><span><label>GB882</label></span
                    ><span><label>GB889</label></span
                    ><span><label>GB889.1</label></span
                    ><span><label>GB889.2</label></span
                    ><span><label>GB893</label></span
                    ><span><label>GB894</label></span
                    ><span><label>GB894.1</label></span
                    ><span><label>GB896</label></span
                    ><span><label>GB897</label></span
                    ><span><label>GB898</label></span
                    ><span><label>GB899</label></span
                    ><span><label>GB901</label></span
                    ><span><label>GB902.3</label></span
                    ><span><label>GB9074</label></span
                    ><span><label>GB9074.11</label></span
                    ><span><label>GB9074.12</label></span
                    ><span><label>GB9074.13</label></span
                    ><span><label>GB9074.14</label></span
                    ><span><label>GB9074.17</label></span
                    ><span><label>GB9074.18</label></span
                    ><span><label>GB9074.2</label></span
                    ><span><label>GB9074.24</label></span
                    ><span><label>GB9074.26</label></span
                    ><span><label>GB9074.3</label></span
                    ><span><label>GB9074.4</label></span
                    ><span><label>GB9074.5</label></span
                    ><span><label>GB9074.6</label></span
                    ><span><label>GB9074.7</label></span
                    ><span><label>GB9074.8</label></span
                    ><span><label>GB91</label></span
                    ><span><label>GB923</label></span
                    ><span><label>GB93</label></span
                    ><span><label>GB93-76</label></span
                    ><span><label>GB95</label></span
                    ><span><label>GB955</label></span
                    ><span><label>GB956.2</label></span
                    ><span><label>GB96</label></span
                    ><span><label>GB97.1</label></span
                    ><span><label>GB97.2</label></span
                    ><span><label>GB973</label></span
                    ><span><label>IFI-111 </label></span
                    ><span><label>ISO10642</label></span
                    ><span><label>ISO14579</label></span
                    ><span><label>ISO14585</label></span
                    ><span><label>ISO7053</label></span
                    ><span><label>ISO7380</label></span
                    ><span><label>ISO7380.2</label></span
                    ><span><label>ISO7380内梅花</label></span
                    ><span><label>JB4763</label></span
                    ><span><label>JIS1111B</label></span
                    ><span><label>JIS1122 </label></span
                    ><span><label>JISB1111F</label></span
                    ><span><label>JISB1111P弹垫组合</label></span
                    ><span><label>JISB1111T</label></span
                    ><span><label>JISB1122P</label></span
                    ><span><label>JISB1122T</label></span
                    ><span><label>JISB1122T(BT型)</label></span
                    ><span><label>JISB1122T平尾</label></span
                    ><span><label>JISB1122平尾割尾</label></span
                    ><span><label>JISB1188</label></span
                    ><span><label>JISB1256</label></span
                    ><span><label>K帽</label></span
                    ><span><label>NFE25-511M</label></span
                    ><span><label>NFE25-513L</label></span
                    ><span><label>Q1980830(QC/T598)</label></span
                    ><span><label>TA(粤标)</label></span
                    ><span><label>TM(粤标)</label></span
                    ><span><label>T型螺母</label></span
                    ><span><label>T型螺栓</label></span
                    ><span><label>U型螺栓</label></span
                    ><span><label>YB818</label></span
                    ><span><label>YB819</label></span
                    ><span><label>YB846</label></span
                    ><span><label>矮颈马车螺丝</label></span
                    ><span><label>凹凸垫圈</label></span
                    ><span><label>扁平头内六角螺钉</label></span
                    ><span><label>车修壁虎</label></span
                    ><span><label>沉头内六角自攻钉</label></span
                    ><span><label>大扁头复合槽自攻钉</label></span
                    ><span><label>大扁头内梅花机螺钉</label></span
                    ><span><label>带介内外牙螺母</label></span
                    ><span><label>点焊螺钉</label></span
                    ><span><label>调节脚杯</label></span
                    ><span><label>非标大扁头内六角台阶机螺钉</label></span
                    ><span><label>非标弹垫</label></span
                    ><span><label>非标复合槽大扁头螺钉</label></span
                    ><span><label>非标菱形机螺钉</label></span
                    ><span><label>非标螺母</label></span
                    ><span><label>非标美制盘头十一字机螺钉</label></span
                    ><span><label>非标米子沉头纤维板钉</label></span
                    ><span><label>非标盘头内梅花防盗带垫机螺钉</label></span
                    ><span><label>非标盘头平尾自攻</label></span
                    ><span><label>非标平垫圈</label></span
                    ><span><label>非标十字盘头带垫双底径平尾自攻钉</label></span
                    ><span><label>非标外六角螺栓</label></span
                    ><span><label>非标外六角十字导向</label></span
                    ><span><label>复合槽小盘头带垫半牙机螺钉</label></span
                    ><span><label>钢珠紧定</label></span
                    ><span><label>共享单车防盗盖母</label></span
                    ><span><label>管夹</label></span
                    ><span><label>海马钉</label></span
                    ><span><label>皇冠螺钉</label></span
                    ><span><label>皇冠螺丝</label></span
                    ><span><label>卡式螺母</label></span
                    ><span><label>拉爆</label></span
                    ><span><label>六角华司钻尾</label></span
                    ><span><label>六角头割尾自攻钉</label></span
                    ><span><label>螺母</label></span
                    ><span><label>铆螺母</label></span
                    ><span><label>梅花盘头带垫自攻钉</label></span
                    ><span><label>梅花圆柱头滚花螺钉</label></span
                    ><span><label>梅花圆柱头自攻钉</label></span
                    ><span><label>美制尖端紧定</label></span
                    ><span><label>美制六角法兰螺栓</label></span
                    ><span><label>美制尼帽</label></span
                    ><span><label>米字纤维板钉</label></span
                    ><span><label>内六角三组合螺丝</label></span
                    ><span><label>内六角圆柱头自攻螺钉</label></span
                    ><span><label>盘帽</label></span
                    ><span><label>盘头梅花槽三角牙自攻</label></span
                    ><span><label>盘头梅花带柱螺丝</label></span
                    ><span><label>膨胀螺栓</label></span
                    ><span><label>平头内外半六角盲孔铆螺母</label></span
                    ><span><label>平头内外半六角铆螺母</label></span
                    ><span><label>十字凹穴法兰面螺钉</label></span
                    ><span><label>十字扁平头自攻钉</label></span
                    ><span><label>十字大扁头机螺钉</label></span
                    ><span><label>十字盘头钻尾螺丝</label></span
                    ><span><label>十字外六角凹穴自攻钉</label></span
                    ><span><label>十字小盘头自攻钉</label></span
                    ><span><label>双叠自锁垫圈</label></span
                    ><span><label>双头钉</label></span
                    ><span><label>四方垫圈</label></span
                    ><span><label>四方螺母（非标）</label></span
                    ><span><label>碗形垫圈</label></span
                    ><span><label>五角带柱防盗螺栓</label></span
                    ><span><label>小沉头内外半六角盲孔铆螺母</label></span
                    ><span><label>压铆螺母</label></span
                    ><span><label>一字槽钢珠紧定</label></span
                    ><span><label>中美式喉箍</label></span>
                  </div>
                  <div class="btn-wrapper">
                    <button class="btn btn-fld-confirm">确定</button>
                    <button class="btn btn-fld-cancel">取消</button>
                  </div>
                </div>
                <div class="td filter-fld-operate">
                  <a href="javascript:;" class="filter-multi"></a>
                  <a href="javascript:;" class="filter-open"></a>
                </div>
              </div>
              <div class="filter-table-fld table">
                <div class="td filter-fld-name">表面处理</div>
                <div class="td">
                  <div class="filter-fld-list">
                    <span><label>彩锌</label></span
                    ><span><label>发黑</label></span
                    ><span><label>黄锌</label></span
                    ><span><label>三价白锌</label></span
                    ><span><label>洗白</label></span
                    ><span><label>洗光</label></span
                    ><span><label>本色</label></span
                    ><span><label>热镀锌</label></span
                    ><span><label>三价彩锌</label></span
                    ><span><label>三价蓝白锌</label></span
                    ><span><label>达克罗</label></span
                    ><span><label>环保达克罗</label></span
                    ><span><label>三价黑锌</label></span
                    ><span><label>白镍</label></span
                    ><span><label>白锌</label></span
                    ><span><label>本色/蓝白锌</label></span
                    ><span><label>不锈钢清洗</label></span
                    ><span><label>打蜡</label></span
                    ><span><label>电镀锡</label></span
                    ><span><label>电泳黑</label></span
                    ><span><label>镀白锌</label></span
                    ><span><label>镀彩</label></span
                    ><span><label>镀铬</label></span
                    ><span><label>镀黑锌</label></span
                    ><span><label>镀镍</label></span
                    ><span><label>镀铜</label></span
                    ><span><label>镀锌</label></span
                    ><span><label>钝化</label></span
                    ><span><label>黒氮氧化</label></span
                    ><span><label>黑磷化</label></span
                    ><span><label>黑色达克罗</label></span
                    ><span><label>黑锌</label></span
                    ><span><label>灰磷化</label></span
                    ><span><label>机械镀锌</label></span
                    ><span><label>蓝白锌</label></span
                    ><span><label>蓝灰黑红绿黄</label></span
                    ><span><label>蓝锌</label></span
                    ><span><label>铝+铁镀锌</label></span
                    ><span><label>磨光</label></span
                    ><span><label>耐落</label></span
                    ><span><label>镍</label></span
                    ><span><label>镍/黑锌</label></span
                    ><span><label>抛光</label></span
                    ><span><label>热处理本色</label></span
                    ><span><label>热镀锌(缩胚)</label></span
                    ><span><label>三价蓝白</label></span
                    ><span><label>三价蓝锌</label></span
                    ><span><label>锌镍合金(黑色)</label></span
                    ><span><label>锌镍合金(灰色)</label></span>
                  </div>
                  <div class="btn-wrapper">
                    <button class="btn btn-fld-confirm">确定</button>
                    <button class="btn btn-fld-cancel">取消</button>
                  </div>
                </div>
                <div class="td filter-fld-operate">
                  <a href="javascript:;" class="filter-multi"></a>
                  <a href="javascript:;" class="filter-open"></a>
                </div>
              </div>
              <div class="filter-table-fld table">
                <div class="td filter-fld-name">品牌</div>
                <div class="td">
                  <div class="filter-fld-list">
                    <span><label>CYI(晋亿)</label></span
                    ><span><label>FST(法思特)</label></span
                    ><span><label>TD(腾达)</label></span
                    ><span><label>THE(东明)</label></span
                    ><span><label>TUZ(茂异)</label></span
                    ><span><label>奥展</label></span
                    ><span><label>中新/新悦</label></span
                    ><span><label>CS(常标)</label></span
                    ><span><label>HDW(哈迪威)</label></span
                    ><span><label>HJ(华杰)</label></span
                    ><span><label>SC(元立)</label></span
                    ><span><label>SFC(上标)</label></span
                    ><span><label>SV(标五)</label></span
                    ><span><label>XXD(新迅达)</label></span
                    ><span><label>EG(鹏驰)</label></span
                    ><span><label>安字</label></span
                    ><span><label>瓦标</label></span
                    ><span><label>TNE</label></span
                    ><span><label>超越</label></span
                    ><span><label>SFC</label></span
                    ><span><label>自营</label></span
                    ><span><label>广易</label></span
                    ><span><label>SKL</label></span
                    ><span><label>STS</label></span
                    ><span><label>法思特</label></span
                    ><span><label>航标</label></span
                    ><span><label>HB</label></span
                    ><span><label>多种</label></span
                    ><span><label>REYO</label></span
                    ><span><label>SM</label></span
                    ><span><label>定制</label></span
                    ><span><label>吉固</label></span
                    ><span><label>华广</label></span
                    ><span><label>上海迎冉</label></span
                    ><span><label>TG</label></span
                    ><span><label>HK</label></span
                    ><span><label>邢宁</label></span
                    ><span><label>HE</label></span
                    ><span><label>其他</label></span
                    ><span><label>SC</label></span
                    ><span><label>圣迪威</label></span
                    ><span><label>苏州产</label></span
                    ><span><label>温州产</label></span
                    ><span><label>ATC(奥达科)</label></span
                    ><span><label>BL</label></span
                    ><span><label>CL</label></span
                    ><span><label>CO</label></span
                    ><span><label>CS</label></span
                    ><span><label>CS2(常力）</label></span
                    ><span><label>DG(东港)</label></span
                    ><span><label>DJ</label></span
                    ><span><label>DURASOK</label></span
                    ><span><label>DY</label></span
                    ><span><label>E</label></span
                    ><span><label>EBT</label></span
                    ><span><label>EG</label></span
                    ><span><label>EGM(鹏驰)</label></span
                    ><span><label>FD</label></span
                    ><span><label>GL</label></span
                    ><span><label>GP</label></span
                    ><span><label>GT</label></span
                    ><span><label>HA</label></span
                    ><span><label>HD</label></span
                    ><span><label>HG</label></span
                    ><span><label>HX</label></span
                    ><span><label>JJ</label></span
                    ><span><label>JQY</label></span
                    ><span><label>LB</label></span
                    ><span><label>LH</label></span
                    ><span><label>LT</label></span
                    ><span><label>MAON</label></span
                    ><span><label>MEV(茂异)</label></span
                    ><span><label>MLF</label></span
                    ><span><label>S</label></span
                    ><span><label>SBL</label></span
                    ><span><label>SD</label></span
                    ><span><label>sdw</label></span
                    ><span><label>SDW(圣迪威)</label></span
                    ><span><label>SM(上标)</label></span
                    ><span><label>SMS</label></span
                    ><span><label>SSDW</label></span
                    ><span><label>SZ</label></span
                    ><span><label>TBF(天宝)</label></span
                    ><span><label>TCHT</label></span
                    ><span><label>THE</label></span
                    ><span><label>TUZ</label></span
                    ><span><label>UNBRAKO</label></span
                    ><span><label>VTR</label></span
                    ><span><label>W</label></span
                    ><span><label>WF</label></span
                    ><span><label>XN</label></span
                    ><span><label>ZJ</label></span
                    ><span><label>安宝扣（Unbrako）</label></span
                    ><span><label>承泰（SCT）</label></span
                    ><span><label>东驰</label></span
                    ><span><label>方达</label></span
                    ><span><label>工品一号</label></span
                    ><span><label>固德</label></span
                    ><span><label>金鼎</label></span
                    ><span><label>紧恒</label></span
                    ><span><label>紧商</label></span
                    ><span><label>锦乾亿</label></span
                    ><span><label>三联盛</label></span
                    ><span><label>深沪(SH)</label></span
                    ><span><label>斯科鲁</label></span
                    ><span><label>温州</label></span
                    ><span><label>无</label></span>
                  </div>
                  <div class="btn-wrapper">
                    <button class="btn btn-fld-confirm">确定</button>
                    <button class="btn btn-fld-cancel">取消</button>
                  </div>
                </div>
                <div class="td filter-fld-operate">
                  <a href="javascript:;" class="filter-multi"></a>
                  <a href="javascript:;" class="filter-open"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-9e077c34="" class="deadstock-goods-wrap">
          <div data-v-9e077c34="" class="deadstock-side">
            <div data-v-9e077c34="" class="deadstock-side-header">商品精选</div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=8013&amp;t=1591953237257"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p4.gpyh.com/web/image/dzp/product/1094622578.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥225.6/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=8013&amp;t=1591953237257"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">Q235&nbsp;</span>
                    <span data-v-9e077c34="">GB97&nbsp;</span>
                    <span data-v-9e077c34="">∮27&nbsp;</span>
                    <span data-v-9e077c34="">彩锌&nbsp;</span>
                    <span data-v-9e077c34="">平垫圈&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：无</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;北京市</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=2568&amp;t=1591953237257"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p2.gpyh.com/web/image/dzp/product/1114416381.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥300/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=2568&amp;t=1591953237257"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">8级&nbsp;</span>
                    <span data-v-9e077c34="">GB6170&nbsp;</span>
                    <span data-v-9e077c34="">M16&nbsp;</span>
                    <span data-v-9e077c34="">机械镀锌&nbsp;</span>
                    <span data-v-9e077c34="">1型六角螺母&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：无</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;浙江省</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=6315&amp;t=1591953237257"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p5.gpyh.com/web/image/dzp/product/1140604069.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥2760/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=6315&amp;t=1591953237257"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">304&nbsp;</span>
                    <span data-v-9e077c34="">GB5782&nbsp;</span>
                    <span data-v-9e077c34="">M12*170&nbsp;</span>
                    <span data-v-9e077c34="">洗光&nbsp;</span>
                    <span data-v-9e077c34="">六角头螺栓&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：TD(腾达)</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;山东省</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=6609&amp;t=1591953237257"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p4.gpyh.com/web/image/dzp/product/1104205923.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥8.2/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=6609&amp;t=1591953237257"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">4级&nbsp;</span>
                    <span data-v-9e077c34="">DIN934&nbsp;</span>
                    <span data-v-9e077c34="">M4&nbsp;</span>
                    <span data-v-9e077c34="">镀黑锌&nbsp;</span>
                    <span data-v-9e077c34="">六角螺母&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：无</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;江苏省</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=7443&amp;t=1591953237257"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p5.gpyh.com/web/image/dzp/product/1105717104.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥25/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=7443&amp;t=1591953237257"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">4级&nbsp;</span>
                    <span data-v-9e077c34="">GB6170&nbsp;</span>
                    <span data-v-9e077c34="">M6&nbsp;</span>
                    <span data-v-9e077c34="">镀镍&nbsp;</span>
                    <span data-v-9e077c34="">1型六角螺母&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：CYI(晋亿)</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;浙江省</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=8016&amp;t=1591953237257"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p3.gpyh.com/web/image/dzp/product/1101033608.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥297.6/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=8016&amp;t=1591953237257"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">Q235&nbsp;</span>
                    <span data-v-9e077c34="">GB97&nbsp;</span>
                    <span data-v-9e077c34="">∮30&nbsp;</span>
                    <span data-v-9e077c34="">发黑&nbsp;</span>
                    <span data-v-9e077c34="">平垫圈&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：无</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;北京市</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=9200&amp;t=1591953237258"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p1.gpyh.com/web/image/dzp/product/1101818105.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥50/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=9200&amp;t=1591953237258"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">8级&nbsp;</span>
                    <span data-v-9e077c34="">GB6170&nbsp;</span>
                    <span data-v-9e077c34="">M8&nbsp;</span>
                    <span data-v-9e077c34="">热镀锌&nbsp;</span>
                    <span data-v-9e077c34="">1型六角螺母&nbsp;</span></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：CYI(晋亿)</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;浙江省</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-item">
              <a
                data-v-9e077c34=""
                href="/deadstock/detail?id=6750&amp;t=1591953237258"
                class="img-w"
                target="_blank"
                ><img
                  data-v-9e077c34=""
                  src="//p1.gpyh.com/web/image/dzp/product/1141911595.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                />
                <!----></a
              >
              <div data-v-9e077c34="" class="item-info">
                <p data-v-9e077c34="" class="price">
                  <span data-v-9e077c34="">￥1280/千支</span>
                </p>
                <h4 data-v-9e077c34="">
                  <a
                    data-v-9e077c34=""
                    href="/deadstock/detail?id=6750&amp;t=1591953237258"
                    class=""
                    target="_blank"
                    style="color: rgb(51, 51, 51); word-break: break-all;"
                    ><span data-v-9e077c34="">A2-70&nbsp;</span>
                    <span data-v-9e077c34="">GB9074.17&nbsp;</span>
                    <span data-v-9e077c34="">M10*80&nbsp;</span>
                    <span data-v-9e077c34="">洗白&nbsp;</span>
                    <span data-v-9e077c34=""
                      >六角头螺栓平弹垫组合&nbsp;</span
                    ></a
                  >
                </h4>
                <div data-v-9e077c34="">
                  <p data-v-9e077c34="" class="info-text">
                    <span data-v-9e077c34="">品牌：无</span
                    ><span data-v-9e077c34="" class="fr"
                      ><i data-v-9e077c34="" class="fa fa-map-marker fa-lg"></i
                      >&nbsp;广东省</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div data-v-9e077c34="" class="deadstock-content">
            <div data-v-9e077c34="" class="sortbar">
              <div data-v-9e077c34="" class="sort-item active">综合排序</div>
              <div data-v-9e077c34="" class="sort-item sort-price">
                <span data-v-9e077c34="">价格排序</span>
                <span data-v-9e077c34="" class="sort-icon"
                  ><i data-v-9e077c34="" class="fa fa-sort-asc"></i>
                  <i data-v-9e077c34="" class="fa fa-sort-desc"></i
                ></span>
              </div>
              <div data-v-9e077c34="" class="choose-location">
                <div data-v-9e077c34="">
                  商品所在地<span
                    data-v-9e077c34=""
                    id="currentCity"
                    style="margin-left: 10px;"
                  ></span
                  ><i data-v-9e077c34="" class="fa fa-angle-down"></i>
                </div>
                <div data-v-9e077c34="" class="citypicker-container">
                  <div data-v-9e077c34="" class="citypicker-wrap">
                    <div data-v-9e077c34="">
                      <label data-v-9e077c34="">同城</label>
                      <a data-v-9e077c34="" class="area">太原市</a>
                    </div>
                    <div data-v-9e077c34="">
                      <label data-v-9e077c34="">城市群</label>
                      <a data-v-9e077c34="" href="javascript:;" class="area"
                        >江浙沪</a
                      ><a data-v-9e077c34="" href="javascript:;" class="area"
                        >京津冀</a
                      >
                    </div>
                    <div data-v-9e077c34="">
                      <label data-v-9e077c34="">所在城市</label>
                      <a
                        data-v-9e077c34=""
                        href="javascript:;"
                        class="area active"
                        >全国</a
                      >
                      <div data-v-9e077c34="" class="city-picker">
                        <div class="tabs">
                          <span class="select-province on">请选择</span>
                          <span class="select-city">请选择</span>
                        </div>
                        <ul class="province">
                          <li class="">北京市</li>
                          <li class="">天津市</li>
                          <li class="">河北省</li>
                          <li class="">山西省</li>
                          <li class="">内蒙古</li>
                          <li class="">辽宁省</li>
                          <li class="">吉林省</li>
                          <li class="">黑龙江省</li>
                          <li class="">上海市</li>
                          <li class="">江苏省</li>
                          <li class="">浙江省</li>
                          <li class="">安徽省</li>
                          <li class="">福建省</li>
                          <li class="">江西省</li>
                          <li class="">山东省</li>
                          <li class="">河南省</li>
                          <li class="">湖北省</li>
                          <li class="">湖南省</li>
                          <li class="">广东省</li>
                          <li class="">广西</li>
                          <li class="">海南省</li>
                          <li class="">重庆市</li>
                          <li class="">四川省</li>
                          <li class="">贵州省</li>
                          <li class="">云南省</li>
                          <li class="">西藏</li>
                          <li class="">陕西省</li>
                          <li class="">甘肃省</li>
                          <li class="">青海省</li>
                          <li class="">宁夏</li>
                          <li class="">新疆</li>
                          <li class="">台湾省</li>
                          <li class="">香港</li>
                          <li class="">澳门</li>
                        </ul>
                        <ul class="city" style="display: none;"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="paging-mini">
                <span data-v-9e077c34=""
                  >共&nbsp;<span data-v-9e077c34="" class="orange">3889</span
                  >&nbsp;件商品</span
                >
                <div data-v-9e077c34="" style="display: inline-block;">
                  <span
                    data-v-9e077c34=""
                    class="fa fa-angle-left fa-lg disabled"
                  ></span>
                  <span data-v-9e077c34="" class="orange">1</span>/<span
                    data-v-9e077c34=""
                    >195</span
                  >
                  <span
                    data-v-9e077c34=""
                    class="fa fa-angle-right fa-lg"
                  ></span>
                </div>
              </div>
            </div>
            <div data-v-9e077c34="" class="deadstock-list" style="">
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9631&amp;t=1591953237259"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p3.gpyh.com/web/image/dzp/product/1134523107.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥390/千支</span>
                    <span data-v-9e077c34="" class="packageDeliver-mark"
                      >整包装购买</span
                    >
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9631&amp;t=1591953237259"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><!---->
                      <span data-v-9e077c34="">8.8级&nbsp;</span>
                      <span data-v-9e077c34="">GB10&nbsp;</span>
                      <span data-v-9e077c34="">M10*45&nbsp;</span>
                      <span data-v-9e077c34="">达克罗&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">沉头方颈螺栓&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：4.2K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;江苏省</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.6K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="4.2"
                            min="0.15"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="4.2"
                            aria-valuemin="0.15"
                            aria-valuenow="0.6"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9630&amp;t=1591953237260"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p2.gpyh.com/web/image/dzp/product/1132139851.JPG?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥105/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9630&amp;t=1591953237260"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304/304（全钢）&nbsp;</span>
                      <span data-v-9e077c34="">GB12618&nbsp;</span>
                      <span data-v-9e077c34="">Φ2.4*8&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34=""
                        >开口型扁圆头抽芯铆钉&nbsp;</span
                      ></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：10K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="10"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="10"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9629&amp;t=1591953237261"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p5.gpyh.com/web/image/dzp/product/1132224364.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥120/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9629&amp;t=1591953237261"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304/304（全钢）&nbsp;</span>
                      <span data-v-9e077c34="">GB12618&nbsp;</span>
                      <span data-v-9e077c34="">Φ2.4*10&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34=""
                        >开口型扁圆头抽芯铆钉&nbsp;</span
                      ></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：10K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="10"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="10"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9628&amp;t=1591953237261"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p5.gpyh.com/web/image/dzp/product/1153318714.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥5000/千支</span>
                    <span data-v-9e077c34="" class="packageDeliver-mark"
                      >整包装购买</span
                    >
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9628&amp;t=1591953237261"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><!---->
                      <span data-v-9e077c34="">8级&nbsp;</span>
                      <span data-v-9e077c34="">GB6171&nbsp;</span>
                      <span data-v-9e077c34=""
                        >M36*1.5（8级淬火蓝白锌）&nbsp;</span
                      >
                      <span data-v-9e077c34="">蓝白锌&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">细牙六角螺帽&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：0.6K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;浙江省</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span
                          role="button"
                          class="el-input-number__decrease is-disabled"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="0.6"
                            min="0.1"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="0.6"
                            aria-valuemin="0.1"
                            aria-valuenow="0.1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9627&amp;t=1591953237261"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p1.gpyh.com/web/image/dzp/product/1152505825.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥30/千支</span>
                    <span data-v-9e077c34="" class="packageDeliver-mark"
                      >整包装购买</span
                    >
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9627&amp;t=1591953237262"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><!---->
                      <span data-v-9e077c34="">4级&nbsp;</span>
                      <span data-v-9e077c34="">DIN6923&nbsp;</span>
                      <span data-v-9e077c34=""
                        >M5左旋（法兰盘宽度和厚度有加大）带花齿&nbsp;</span
                      >
                      <span data-v-9e077c34="">蓝白锌&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">六角法兰螺母&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：78K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;浙江省</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：10K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="78"
                            min="2"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="78"
                            aria-valuemin="2"
                            aria-valuenow="10"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9625&amp;t=1591953237262"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p5.gpyh.com/web/image/dzp/product/1090549789.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥200/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9625&amp;t=1591953237262"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><!---->
                      <span data-v-9e077c34="">10.9级&nbsp;</span>
                      <span data-v-9e077c34="">ISO7380&nbsp;</span>
                      <span data-v-9e077c34="">M10*10&nbsp;</span>
                      <span data-v-9e077c34="">发黑&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34=""
                        >内六角平圆头机螺钉&nbsp;</span
                      ></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：7.2K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.45K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="7.2"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="7.2"
                            aria-valuemin="0"
                            aria-valuenow="0.45"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9624&amp;t=1591953237262"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p3.gpyh.com/web/image/dzp/product/1202034567.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥4200/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9624&amp;t=1591953237262"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark">GT</span>
                      <span data-v-9e077c34="">SCM435&nbsp;</span>
                      <span data-v-9e077c34="">DIN912&nbsp;</span>
                      <span data-v-9e077c34="">M10*230&nbsp;</span>
                      <span data-v-9e077c34="">发黑&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">内六角圆柱头螺钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：0.8K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.05K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="0.8"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="0.8"
                            aria-valuemin="0"
                            aria-valuenow="0.05"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9623&amp;t=1591953237262"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p3.gpyh.com/web/image/dzp/product/1201906597.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥4000/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9623&amp;t=1591953237262"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark">GT</span>
                      <span data-v-9e077c34="">SCM435&nbsp;</span>
                      <span data-v-9e077c34="">DIN912&nbsp;</span>
                      <span data-v-9e077c34="">M10*220&nbsp;</span>
                      <span data-v-9e077c34="">发黑&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">内六角圆柱头螺钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：1.7K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.05K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="1.7"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="1.7"
                            aria-valuemin="0"
                            aria-valuenow="0.05"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9622&amp;t=1591953237263"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p2.gpyh.com/web/image/dzp/product/1201630451.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥2600/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9622&amp;t=1591953237263"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark">GT</span>
                      <span data-v-9e077c34="">SCM435&nbsp;</span>
                      <span data-v-9e077c34="">DIN912&nbsp;</span>
                      <span data-v-9e077c34="">M10*200&nbsp;</span>
                      <span data-v-9e077c34="">发黑&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">内六角圆柱头螺钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：1.8K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="1.8"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="1.8"
                            aria-valuemin="0"
                            aria-valuenow="0.1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9621&amp;t=1591953237266"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p2.gpyh.com/web/image/dzp/product/1201312426.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥330/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9621&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark">GT</span>
                      <span data-v-9e077c34="">SCM435&nbsp;</span>
                      <span data-v-9e077c34="">DIN912&nbsp;</span>
                      <span data-v-9e077c34="">M4*80&nbsp;</span>
                      <span data-v-9e077c34="">发黑&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">内六角圆柱头螺钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：24K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：0.5K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="24"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="24"
                            aria-valuemin="0"
                            aria-valuenow="0.5"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9620&amp;t=1591953237267"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p5.gpyh.com/web/image/dzp/product/1201124844.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥270/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9620&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark">GT</span>
                      <span data-v-9e077c34="">SCM435&nbsp;</span>
                      <span data-v-9e077c34="">DIN912&nbsp;</span>
                      <span data-v-9e077c34="">M4*70&nbsp;</span>
                      <span data-v-9e077c34="">发黑&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">内六角圆柱头螺钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：22K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="22"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="22"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9619&amp;t=1591953237267"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p3.gpyh.com/web/image/dzp/product/1153921457.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥155/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9619&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >FST(法思特)</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">点焊螺钉&nbsp;</span>
                      <span data-v-9e077c34="">M6*35 &nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">点焊螺钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：20.757K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;福建省</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="20.757"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="20.757"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9618&amp;t=1591953237267"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p3.gpyh.com/web/image/dzp/product/1144623162.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥38/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9618&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304/Q235&nbsp;</span>
                      <span data-v-9e077c34="">GB12617&nbsp;</span>
                      <span data-v-9e077c34=""
                        >Φ3.2*5 半钢（不锈钢/铁芯）&nbsp;</span
                      >
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">沉头抽芯铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：20K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="20"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="20"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9617&amp;t=1591953237267"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p5.gpyh.com/web/image/dzp/product/1143733269.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥70/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9617&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB867&nbsp;</span>
                      <span data-v-9e077c34="">Φ5*12&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">半圆头实心铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：20K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="20"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="20"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9616&amp;t=1591953237267"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p1.gpyh.com/web/image/dzp/product/1143534580.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥27/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9616&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB867&nbsp;</span>
                      <span data-v-9e077c34="">Φ3*12&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">半圆头实心铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：10K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：2K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="10"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="10"
                            aria-valuemin="0"
                            aria-valuenow="2"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9615&amp;t=1591953237267"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p5.gpyh.com/web/image/dzp/product/1142955509.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥75/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9615&amp;t=1591953237267"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB109&nbsp;</span>
                      <span data-v-9e077c34="">Φ4*25&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">平头铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：5K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：1K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="5"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="5"
                            aria-valuemin="0"
                            aria-valuenow="1"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9614&amp;t=1591953237268"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p3.gpyh.com/web/image/dzp/product/1142834247.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥62/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9614&amp;t=1591953237268"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB109&nbsp;</span>
                      <span data-v-9e077c34="">Φ4*20&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">平头铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：10K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：2K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="10"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="10"
                            aria-valuemin="0"
                            aria-valuenow="2"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9613&amp;t=1591953237268"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p4.gpyh.com/web/image/dzp/product/1142613933.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥55/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9613&amp;t=1591953237268"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><!---->
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB109&nbsp;</span>
                      <span data-v-9e077c34="">Φ4*16&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">平头铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：10K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：2K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="10"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="10"
                            aria-valuemin="0"
                            aria-valuenow="2"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9612&amp;t=1591953237268"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p4.gpyh.com/web/image/dzp/product/1142433178.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥40/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9612&amp;t=1591953237268"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB109&nbsp;</span>
                      <span data-v-9e077c34="">Φ4*12&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">平头铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：40K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：2K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="40"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="40"
                            aria-valuemin="0"
                            aria-valuenow="2"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
              <div data-v-9e077c34="" class="deadstock-item fl">
                <a
                  data-v-9e077c34=""
                  href="/deadstock/detail?id=9611&amp;t=1591953237268"
                  class="img-w"
                  target="_blank"
                  ><img
                    data-v-9e077c34=""
                    src="//p4.gpyh.com/web/image/dzp/product/1142235368.jpg?x-oss-process=image/resize,m_pad,h_200,w_200,color_f6f6f6"
                    alt=""
                  />
                  <!----></a
                >
                <div data-v-9e077c34="" class="item-info">
                  <p data-v-9e077c34="" class="price priceTag">
                    <span data-v-9e077c34="">￥38/千支</span>
                    <!---->
                  </p>
                  <h4 data-v-9e077c34="">
                    <a
                      data-v-9e077c34=""
                      href="/deadstock/detail?id=9611&amp;t=1591953237268"
                      class=""
                      target="_blank"
                      style="color: rgb(51, 51, 51); word-break: break-all;"
                      ><span data-v-9e077c34="" class="brand-mark"
                        >承泰（SCT）</span
                      >
                      <span data-v-9e077c34="">304&nbsp;</span>
                      <span data-v-9e077c34="">GB109&nbsp;</span>
                      <span data-v-9e077c34="">Φ 4*10&nbsp;</span>
                      <span data-v-9e077c34="">洗白&nbsp;</span>
                      <!---->
                      <span data-v-9e077c34="">平头铆钉&nbsp;</span></a
                    >
                  </h4>
                  <div data-v-9e077c34="">
                    <p data-v-9e077c34="" class="info-text">
                      <span data-v-9e077c34="">库存：10K</span
                      ><span data-v-9e077c34="" class="fr"
                        ><i
                          data-v-9e077c34=""
                          class="fa fa-map-marker fa-lg"
                        ></i
                        >&nbsp;上海市</span
                      >
                    </p>
                    <p
                      data-v-9e077c34=""
                      class="info-text"
                      style="color: rgb(153, 153, 153);"
                    >
                      <span data-v-9e077c34="">起订量：2K</span>
                    </p>
                  </div>
                  <div data-v-9e077c34="" class="buy-w">
                    <span data-v-9e077c34="" class="amount-w"
                      ><div
                        data-v-9e077c34=""
                        class="deadstock-input-number el-input-number el-input-number--medium"
                      >
                        <span role="button" class="el-input-number__decrease"
                          ><i class="el-icon-minus"></i></span
                        ><span role="button" class="el-input-number__increase"
                          ><i class="el-icon-plus"></i
                        ></span>
                        <div class="el-input el-input--medium">
                          <!----><input
                            type="text"
                            autocomplete="off"
                            max="10"
                            min="0"
                            class="el-input__inner"
                            role="spinbutton"
                            aria-valuemax="10"
                            aria-valuemin="0"
                            aria-valuenow="2"
                            aria-disabled="undefined"
                          /><!----><!----><!---->
                        </div>
                      </div></span
                    >
                    <span data-v-9e077c34="" style="text-align: right;"
                      ><button data-v-9e077c34="" class="add-to-cart">
                        加入购物车
                      </button></span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div
              data-v-9e077c34=""
              onselectstart="return false"
              class="pagination pagination"
            >
              <ul>
                <li class="disabled">&lt;&lt;</li>
                <li class="disabled">&lt;</li>
                <li class="selected">1</li>
                <li class="">2</li>
                <li class="">3</li>
                <li class="">4</li>
                <li class="">5</li>
                <li class="">6</li>
                <li class="">7</li>
                <!---->
                <!---->
                <li>...</li>
                <!---->
                <li class="">195</li>
                <li>&gt;</li>
                <li>&gt;&gt;</li>
              </ul>
              <span class="total">共195页</span>
              <span>到第<input type="text" />页</span>
              <span><button>确定</button></span>
            </div>
          </div>
        </div>
      </div>
      <div
        data-v-9e077c34=""
        class="el-dialog__wrapper cartDialog"
        style="display: none;"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="温馨提示"
          class="el-dialog"
          style="margin-top: 30vh; width: 560px;"
        >
          <div class="el-dialog__header">
            <span class="el-dialog__title">温馨提示</span
            ><button
              type="button"
              aria-label="Close"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
          <!----><!---->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {} 
</script>

<style></style>
