import { createStore } from 'vuex';

import seedModule from '@/store/modules/seed';
import userModule from '@/store/modules/seed';
import authModule from '@/store/modules/seed';

export default createStore({
  modules: {
    seed: seedModule,
    userSeed: userModule,
    auth: authModule
  }
});
