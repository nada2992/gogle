import SearchHeader from '@/components/SearchHeader'
import "./../globals.css"
type children = {
    children: any;
};
const layout = ({children}: children) => {
  return (
    <div>
      <SearchHeader/>
      {children}
    </div>
  )
}

export default layout
