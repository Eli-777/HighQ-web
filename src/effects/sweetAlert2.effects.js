import Swal from 'sweetalert2'

export const NoInput = (text)=> Swal.fire({
  icon: 'warning',
  title: '新增失敗!',
  text: `${text}尚未填寫！`
})

export const addSuccess = (text)=> Swal.fire({
  icon: 'success',
  title: `${text}新增成功!`,
})

export const deleteWarning = ()=> Swal.fire({
  icon: 'warning',
  title: '確定要刪除？',
  text: `請確認是否要刪除，一但刪除資料將無法回復原狀`,
  showCancelButton: true,
  confirmButtonText:
    '刪除',
  cancelButtonText:
    '取消',
})

export const saveWarning = ()=> Swal.fire({
  icon: 'warning',
  title: '確定儲存變更？',
  text: `請確認資料是否正確無誤`,
  showCancelButton: true,
  confirmButtonText:
    '儲存',
  cancelButtonText:
    '取消',
})

export const blankWarning = ()=> Swal.fire({
  icon: 'warning',
  title: '請填寫留言',
  text: `留言處沒有任何文字，請勿只輸入空白`,
})

