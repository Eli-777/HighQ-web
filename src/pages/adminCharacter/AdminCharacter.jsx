import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getCharacter } from '../../redux/character/character.action'

import AdminPageTitle from '../../components/adminPageTitle/AdminPageTitle'
import AdminTable from '../../components/adminTable/AdminTable'
import AdminTableItem from '../../components/adminTableItem/AdminTableItem'

function AdminCharacter(props) {

  const characters = useSelector((state) => state.character.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCharacter())
  }, [dispatch])

  const tableTitles = [
    '序列',
    '角色名稱',
    '角色介紹',
    '縮圖',
    '管理'
  ]

  return (
    <div className="pageContainer max-width-big-desktop">
      <AdminPageTitle title="管理角色" addBottom="新增角色" link="/admin/character/add" />
      <AdminTable tableTitles={tableTitles}>
        {
          characters.map((character, index) => {
            return <AdminTableItem key={character.id} tableTitles={tableTitles} td1={index+1} td2={character.name} td3={character.intro.intro1} td4={character.characterImg} id={character.id} page="character" />
          })
        }
      </AdminTable>
    </div>
  );
}

export default AdminCharacter;