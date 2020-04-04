import { authGuard } from '../../utils/guards';
import Pet from './Pet.vue';
import Create from './Create.vue';
import Buy from './Buy.vue';
import Adopt from './Adopt.vue';
import Details from './Details.vue';
import Edit from './Edit.vue';
import My from './My.vue';
import Search from './Search.vue';
import NoResult from './NoResult.vue';
import Category from './Category.vue';

export default [
    {
      path: '/pet',
      component: Pet,
      redirect: { name: 'create' },
      children: [
        {
            path: "/create", 
            component: Create   
          },
          {
            path: "/buy", 
            component: Buy
          },
          {
            path: "/adopt", 
            component: Adopt
          },
          {
            path: "/details/:id", 
            name: 'details', 
            component: Details
          },
          {
            path: "/edit/:id",
            name: 'edit', 
            component: Edit
          },
          {
            path: "/my", 
            component: My
          },
          {
            path: "/search/:search",
            name: 'search',            
            component: Search
          },
          {
            path: "/noResult", 
            component: NoResult
          },
          {
            path: "/category",
            name: 'category', 
            component: Category
          },           
      ],
      beforeEnter: authGuard     
    }
  ];