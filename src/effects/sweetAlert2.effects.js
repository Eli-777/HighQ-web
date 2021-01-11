import Swal from 'sweetalert2'

export const NoInput = (text)=> Swal.fire({
  icon: 'warning',
  title: '新增失敗!',
  text: `${text}尚未填寫！`
})

export const addSuccess = (text)=> Swal.fire({
  icon: 'success',
  title: `${text}新增成功!`,
  timer: '2000',
  showConfirmButton: false
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

export const deleteSuccess = ()=> Swal.fire({
  icon: 'success',
  title: `刪除成功!`,
  timer: '2000',
  showConfirmButton: false
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

export const loginFail = ()=> Swal.fire({
  icon: 'error',
  title: '無法登入',
  text: `請確認 email 或是密碼有無登打錯誤`,
})

export const loginNoInput = (text)=> Swal.fire({
  icon: 'warning',
  title: '登入失敗!',
  text: `${text}尚未填寫！`
})

