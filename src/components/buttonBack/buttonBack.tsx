import { MdOutlineArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export const ButtonBack = () => {
  const navigate = useNavigate() 
  const goBack = () => navigate(-1)

  return <button onClick={goBack}><MdOutlineArrowBack style={{fontSize: '30px'}} /></button>
}
