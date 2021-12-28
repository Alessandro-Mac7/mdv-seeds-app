import { createStore } from 'vuex';

import seedModule from '@/store/modules/seed';
import userModule from '@/store/modules/user';
import authModule from '@/store/modules/auth';

export default createStore({
  modules: {
    seed: seedModule,
    userSeed: userModule,
    auth: authModule
  }
});
