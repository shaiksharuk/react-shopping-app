
import {categories} from '../../data/categories'
import Directory from '../../directory/directory.component';

const Home = () => {

    return(
      <div>
        <Directory categories={categories}/>
      </div>
    )
} 

export default Home;