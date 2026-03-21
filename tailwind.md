# Tailwind CSS 速查表

## 目录
- [布局](#布局)
- [间距](#间距)
- [颜色](#颜色)
- [字体](#字体)
- [边框](#边框)
- [定位](#定位)
- [响应式设计](#响应式设计)
- [状态变体](#状态变体)

---

## 布局

### Flexbox
| 类名 | 说明 |
|------|------|
| `flex` | display: flex |
| `inline-flex` | display: inline-flex |
| `flex-row` | flex-direction: row |
| `flex-col` | flex-direction: column |
| `flex-wrap` | flex-wrap: wrap |
| `flex-nowrap` | flex-wrap: nowrap |
| `justify-start` | justify-content: flex-start |
| `justify-center` | justify-content: center |
| `justify-end` | justify-content: flex-end |
| `justify-between` | justify-content: space-between |
| `items-start` | align-items: flex-start |
| `items-center` | align-items: center |
| `items-end` | align-items: flex-end |
| `gap-1` ~ `gap-96` | gap: 0.25rem ~ 24rem |
| `gap-x-4` | column-gap: 1rem |
| `gap-y-4` | row-gap: 1rem |

### Grid
| 类名 | 说明 |
|------|------|
| `grid` | display: grid |
| `inline-grid` | display: inline-grid |
| `grid-cols-1` ~ `grid-cols-12` | grid-template-columns: repeat(n, minmax(0, 1fr)) |
| `grid-rows-1` ~ `grid-rows-6` | grid-template-rows: repeat(n, minmax(0, 1fr)) |
| `col-span-2` ~ `col-span-12` | grid-column: span n / span n |
| `row-span-2` ~ `row-span-6` | grid-row: span n / span n |

---

## 间距

### Margin
| 类名 | 说明 |
|------|------|
| `m-0` ~ `m-96` | margin: 0 ~ 24rem |
| `mx-auto` | margin-left: auto; margin-right: auto |
| `my-auto` | margin-top: auto; margin-bottom: auto |
| `mt-4` | margin-top: 1rem |
| `mb-4` | margin-bottom: 1rem |
| `ml-4` | margin-left: 1rem |
| `mr-4` | margin-right: 1rem |
| `-mt-4` | margin-top: -1rem (负值) |

### Padding
| 类名 | 说明 |
|------|------|
| `p-0` ~ `p-96` | padding: 0 ~ 24rem |
| `px-4` | padding-left: 1rem; padding-right: 1rem |
| `py-4` | padding-top: 1rem; padding-bottom: 1rem |
| `pt-4` | padding-top: 1rem |
| `pb-4` | padding-bottom: 1rem |
| `pl-4` | padding-left: 1rem |
| `pr-4` | padding-right: 1rem |

### 间距数值参考
| 前缀 | 数值范围 | 示例值 |
|------|----------|--------|
| `0` | 0 | 0rem |
| `1` | 0.25rem | 4px |
| `2` | 0.5rem | 8px |
| `3` | 0.75rem | 12px |
| `4` | 1rem | 16px |
| `5` | 1.25rem | 20px |
| `6` | 1.5rem | 24px |
| `8` | 2rem | 32px |
| `10` | 2.5rem | 40px |
| `12` | 3rem | 48px |
| `16` | 4rem | 64px |
| `20` | 5rem | 80px |
| `24` | 6rem | 96px |
| `32` | 8rem | 128px |

---

## 颜色

### 文本颜色
| 类名 | 说明 |
|------|------|
| `text-black` | color: #000 |
| `text-white` | color: #fff |
| `text-gray-100` ~ `text-gray-900` | 灰色系 |
| `text-red-500` | 红色 |
| `text-blue-500` | 蓝色 |
| `text-green-500` | 绿色 |
| `text-yellow-500` | 黄色 |
| `text-purple-500` | 紫色 |
| `text-pink-500` | 粉色 |
| `text-transparent` | color: transparent |

### 背景颜色
| 类名 | 说明 |
|------|------|
| `bg-black` | background-color: #000 |
| `bg-white` | background-color: #fff |
| `bg-gray-100` ~ `bg-gray-900` | 灰色系 |
| `bg-red-500` | 红色背景 |
| `bg-blue-500` | 蓝色背景 |
| `bg-green-500` | 绿色背景 |
| `bg-yellow-500` | 黄色背景 |
| `bg-transparent` | background-color: transparent |

### 边框颜色
| 类名 | 说明 |
|------|------|
| `border-black` | border-color: #000 |
| `border-white` | border-color: #fff |
| `border-gray-100` ~ `border-gray-900` | 灰色系 |
| `border-red-500` | 红色边框 |
| `border-blue-500` | 蓝色边框 |

---

## 字体

### 字体大小
| 类名 | 说明 |
|------|------|
| `text-xs` | font-size: 0.75rem (12px) |
| `text-sm` | font-size: 0.875rem (14px) |
| `text-base` | font-size: 1rem (16px) |
| `text-lg` | font-size: 1.125rem (18px) |
| `text-xl` | font-size: 1.25rem (20px) |
| `text-2xl` | font-size: 1.5rem (24px) |
| `text-3xl` | font-size: 1.875rem (30px) |
| `text-4xl` | font-size: 2.25rem (36px) |
| `text-5xl` | font-size: 3rem (48px) |

### 字体粗细
| 类名 | 说明 |
|------|------|
| `font-thin` | font-weight: 100 |
| `font-light` | font-weight: 300 |
| `font-normal` | font-weight: 400 |
| `font-medium` | font-weight: 500 |
| `font-semibold` | font-weight: 600 |
| `font-bold` | font-weight: 700 |
| `font-extrabold` | font-weight: 800 |

### 字体样式
| 类名 | 说明 |
|------|------|
| `italic` | font-style: italic |
| `not-italic` | font-style: normal |
| `underline` | text-decoration: underline |
| `line-through` | text-decoration: line-through |
| `no-underline` | text-decoration: none |
| `uppercase` | text-transform: uppercase |
| `lowercase` | text-transform: lowercase |
| `capitalize` | text-transform: capitalize |
| `normal-case` | text-transform: none |

### 行高
| 类名 | 说明 |
|------|------|
| `leading-none` | line-height: 1 |
| `leading-tight` | line-height: 1.25 |
| `leading-snug` | line-height: 1.375 |
| `leading-normal` | line-height: 1.5 |
| `leading-relaxed` | line-height: 1.625 |
| `leading-loose` | line-height: 2 |

---

## 边框

### 边框宽度
| 类名 | 说明 |
|------|------|
| `border-0` | border-width: 0 |
| `border` | border-width: 1px |
| `border-2` | border-width: 2px |
| `border-4` | border-width: 4px |
| `border-8` | border-width: 8px |
| `border-t` | border-top-width: 1px |
| `border-b` | border-bottom-width: 1px |
| `border-l` | border-left-width: 1px |
| `border-r` | border-right-width: 1px |

### 圆角
| 类名 | 说明 |
|------|------|
| `rounded-none` | border-radius: 0 |
| `rounded-sm` | border-radius: 0.125rem |
| `rounded` | border-radius: 0.25rem |
| `rounded-md` | border-radius: 0.375rem |
| `rounded-lg` | border-radius: 0.5rem |
| `rounded-xl` | border-radius: 0.75rem |
| `rounded-2xl` | border-radius: 1rem |
| `rounded-3xl` | border-radius: 1.5rem |
| `rounded-full` | border-radius: 9999px |

### 阴影
| 类名 | 说明 |
|------|------|
| `shadow-sm` | box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) |
| `shadow` | box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1) |
| `shadow-md` | box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) |
| `shadow-lg` | box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1) |
| `shadow-xl` | box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1) |
| `shadow-2xl` | box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) |
| `shadow-none` | box-shadow: none |

---

## 定位

| 类名 | 说明 |
|------|------|
| `static` | position: static |
| `relative` | position: relative |
| `absolute` | position: absolute |
| `fixed` | position: fixed |
| `sticky` | position: sticky |
| `inset-0` | top: 0; right: 0; bottom: 0; left: 0 |
| `top-0` | top: 0 |
| `right-0` | right: 0 |
| `bottom-0` | bottom: 0 |
| `left-0` | left: 0 |
| `-top-4` | top: -1rem |
| `z-0` ~ `z-50` | z-index: 0 ~ 50 |
| `z-auto` | z-index: auto |

### 定位数值
| 前缀 | 数值 |
|------|------|
| `0` | 0 |
| `1` | 0.25rem (4px) |
| `2` | 0.5rem (8px) |
| `3` | 0.75rem (12px) |
| `4` | 1rem (16px) |
| `5` | 1.25rem (20px) |
| `6` | 1.5rem (24px) |
| `8` | 2rem (32px) |
| `10` | 2.5rem (40px) |

---

## 响应式设计

### 断点前缀
| 前缀 | 最小宽度 | 说明 |
|------|----------|------|
| `sm:` | 640px | 小屏幕 |
| `md:` | 768px | 中等屏幕 |
| `lg:` | 1024px | 大屏幕 |
| `xl:` | 1280px | 超大屏幕 |
| `2xl:` | 1536px | 2倍大屏幕 |

### 使用示例
```html
<!-- 移动端: flex-col, 桌面端: flex-row -->
<div class="flex flex-col md:flex-row">
  ...
</div>

<!-- 移动端隐藏, 桌面端显示 -->
<div class="hidden md:block">
  ...
</div>

<!-- 响应式文字大小 -->
<p class="text-sm md:text-base lg:text-lg">
  响应式文本
</p>
```

---

## 状态变体

### 交互状态
| 前缀 | 说明 |
|------|------|
| `hover:` | 鼠标悬停时 |
| `focus:` | 获得焦点时 |
| `active:` | 按下/激活时 |
| `disabled:` | 禁用状态 |
| `group-hover:` | 父元素hover时 |

### 使用示例
```html
<!-- 按钮悬停效果 -->
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2">
  按钮
</button>

<!-- 输入框焦点效果 -->
<input class="border-gray-300 focus:border-blue-500 focus:ring-2">
  ...
</input>

<!-- 组悬停效果 -->
<div class="group">
  <div class="group-hover:bg-gray-100">
    ...
  </div>
</div>
```

### 其他状态变体
| 前缀 | 说明 |
|------|------|
| `first:` | 第一个子元素 |
| `last:` | 最后一个子元素 |
| `odd:` | 奇数子元素 |
| `even:` | 偶数子元素 |
| `visited:` | 访问过的链接 |
| `selection:` | 选中的文本 |

---

## 常用组合示例

### 卡片组件
```html
<div class="max-w-sm bg-white rounded-xl shadow-lg p-6">
  <h2 class="text-xl font-bold text-gray-900">标题</h2>
  <p class="mt-2 text-gray-600">卡片内容</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    按钮
  </button>
</div>
```

### 响应式导航栏
```html
<nav class="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-white shadow">
  <div class="text-xl font-bold">Logo</div>
  <div class="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
    <a href="#" class="hover:text-blue-500">首页</a>
    <a href="#" class="hover:text-blue-500">关于</a>
    <a href="#" class="hover:text-blue-500">联系</a>
  </div>
</nav>
```

### 居中容器
```html
<!-- 水平居中 -->
<div class="mx-auto">...</div>

<!-- 完全居中 (flex) -->
<div class="flex items-center justify-center min-h-screen">
  <div>居中内容</div>
</div>

<!-- 完全居中 (absolute) -->
<div class="relative h-64">
  <div class="absolute inset-0 flex items-center justify-center">
    居中内容
  </div>
</div>
```
