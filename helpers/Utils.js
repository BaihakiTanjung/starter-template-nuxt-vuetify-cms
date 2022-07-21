import Swal from 'sweetalert2'
// import XLSX from 'xlsx'
// import { format, parseISO } from 'date-fns'

const showSuccessPopup = (titleMessage, textMessage) => {
  return Swal.fire({
    title: titleMessage,
    text: textMessage,
    icon: 'success',
    showConfirmButton: false,
    timer: 1500,
  })
}

const showFailedPopup = (titleMessage, textMessage) => {
  return Swal.fire({
    title: titleMessage,
    text: textMessage,
    icon: 'error',
    showConfirmButton: false,
    timer: 1500,
  })
}

const showConfirmPopup = (textMessage) => {
  return Swal.fire({
    title: 'Apakah kamu yakin?',
    text: textMessage,
    icon: 'warning',
    confirmButtonText: 'Ya, Lanjut',
    showCancelButton: true,
    cancelButtonText: 'Batal',
    confirmButtonColor: '#1abc9c',
  })
}

const downloadFile = (res, filename, extension) => {
  const url = window.URL.createObjectURL(new Blob([res.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${filename}.${extension}`)
  document.body.appendChild(link)
  link.click()
}

// const downloadToExcel = (data, name) => {
//   // export json to Worksheet of Excel
//   // only array possible
//   const dataWS = XLSX.utils.json_to_sheet(data)

//   // A workbook is the name given to an Excel file
//   const wb = XLSX.utils.book_new() // make Workbook of Excel

//   // add Worksheet to Workbook
//   // Workbook contains one or more worksheets
//   XLSX.utils.book_append_sheet(wb, dataWS, name) // sheetAName is name of Worksheet

//   // export Excel file
//   XLSX.writeFile(wb, `${name}.xlsx`) // name of the file is 'book.xlsx'
// }

// const formatDateSql = (dateParams) => {
//   return format(parseISO(dateParams), 'yyyy-MM-dd HH:mm:ss')
// }

// const formatDateYMD = (dateParams) => {
//   return format(parseISO(dateParams), 'yyyy-MM-dd')
// }

const removeDuplicateArray = (arr) => {
  const s = new Set(arr)
  const it = s.values()
  return Array.from(it)
}

const formatCurrency = (number) => {
  return (
    'Rp ' +
    Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}

export {
  showSuccessPopup,
  showFailedPopup,
  showConfirmPopup,
  // downloadToExcel,
  // formatDateSql,
  // formatDateYMD,
  removeDuplicateArray,
  formatCurrency,
  downloadFile,
}
