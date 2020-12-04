import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getSticker } from '../../redux/sticker/sticker.action'
import { useLocation } from 'react-router-dom'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'
import StickerNav from '../../components/stickerNav/StickerNav'

function AdminSticker(props) {

  const { search } = useLocation()
  const query = new URLSearchParams(search) 
  const queryText = query.get('sticker') 

  const stickers = useSelector((state) => state.sticker.stickers)
  const emojis = useSelector((state) => state.sticker.emojis)
  const themes = useSelector((state) => state.sticker.themes)
  const [selectStickers, setSelectStickers] = useState(stickers)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSticker())
  }, [dispatch])

  useEffect(() => {
    if (queryText === 'emoji') {
      setSelectStickers(emojis)
    } else if (queryText === 'theme') {
      setSelectStickers(themes)
    } else {
      setSelectStickers(stickers)
    }
  }, [selectStickers, stickers, emojis, themes, queryText])

  const tableTitles = [
    '序列',
    '貼圖名稱',
    '價格',
    '縮圖',
    '管理'
  ]

  return (
    <div className="pageContainer max-width-big-desktop">
      <AdminPageTitle title="管理貼圖" addBottom="新增貼圖" link="/admin/sticker/add" />
      <StickerNav query={queryText} />
      <AdminTable tableTitles={tableTitles}>
        {
          selectStickers.map((sticker, index) => {
            return <AdminTableItem key={sticker.id} tableTitles={tableTitles} td1={index + 1} td2={sticker.name} td3={sticker.price} td4={sticker.image.single} />
          })
        }
      </AdminTable>
    </div>
  );
}

export default AdminSticker;