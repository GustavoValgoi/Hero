import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useApi } from '../service';
import { IHero } from '../interfaces/hero/hero.interface';
import { IPagination } from '../common/interfaces/pagination.interface';
import { StatusTypeEnum } from '../common/enums/status.enum';
import { ICreateHero } from '../interfaces/hero/create-hero.interface';
import { IUpdateHero } from '../interfaces/hero/update-hero.interface';

export interface HeroState {
  hero: IHero | null;
  heroes: IPagination<IHero> | null;
  loading: boolean;
  message: string;
  status: StatusTypeEnum | null;
}

const initialState: HeroState = {
  hero: null,
  heroes: null,
  status: null,
  loading: false,
  message: '',
};

export const findAll = createAsyncThunk(
  'hero/all',
  async (query: URLSearchParams, thunkAPI) => {
    try {
      const { useGET } = useApi();
      const res = await useGET(`/hero?${query}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.status) {
          return thunkAPI.rejectWithValue('Houve um problema com o servidor!');
        }

        return thunkAPI.rejectWithValue(
          Array.isArray(error.response?.data.message)
            ? error.response?.data.message[0]
            : error.response?.data.message,
        );
      }
    }
  },
);

export const findHeroById = createAsyncThunk(
  'hero/get',
  async (id: number, thunkAPI) => {
    try {
      const { useGET } = useApi();
      const res = await useGET(`/hero/${id}`);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.status) {
          return thunkAPI.rejectWithValue('Houve um problema com o servidor!');
        }

        return thunkAPI.rejectWithValue(
          Array.isArray(error.response?.data.message)
            ? error.response?.data.message[0]
            : error.response?.data.message,
        );
      }
    }
  },
);

export const createHero = createAsyncThunk(
  'hero/create',
  async (body: ICreateHero, thunkAPI) => {
    try {
      const { usePOST } = useApi();
      const res = await usePOST('/hero', body);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.status) {
          return thunkAPI.rejectWithValue('Houve um problema com o servidor!');
        }

        return thunkAPI.rejectWithValue(
          Array.isArray(error.response?.data.message)
            ? error.response?.data.message[0]
            : error.response?.data.message,
        );
      }
    }
  },
);

export const updateHero = createAsyncThunk(
  'hero/update',
  async (body: IUpdateHero, thunkAPI) => {
    try {
      const { usePUT } = useApi();
      const { id, ...data } = body;
      const res = await usePUT(`/hero/${id}`, data);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.status) {
          return thunkAPI.rejectWithValue('Houve um problema com o servidor!');
        }

        return thunkAPI.rejectWithValue(
          Array.isArray(error.response?.data.message)
            ? error.response?.data.message[0]
            : error.response?.data.message,
        );
      }
    }
  },
);

export const deleteHero = createAsyncThunk(
  'hero/delete',
  async (id: number, thunkAPI) => {
    try {
      const { useDELETE } = useApi();
      const res = await useDELETE(`/hero/${id}`);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (!error.status) {
          return thunkAPI.rejectWithValue('Houve um problema com o servidor!');
        }

        return thunkAPI.rejectWithValue(
          Array.isArray(error.response?.data.message)
            ? error.response?.data.message[0]
            : error.response?.data.message,
        );
      }
    }
  },
);

export const heroReducer = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    resetStates: state => {
      state.loading = false;
      state.message = '';
      state.status = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(findAll.pending, state => {
        state.loading = true;
        state.status = StatusTypeEnum.Pending;
        state.message = '';
      })
      .addCase(findAll.fulfilled, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Success;
        state.heroes = action.payload;
      })
      .addCase(findAll.rejected, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Error;
        state.message = action.payload as string;
      })
      .addCase(findHeroById.pending, state => {
        state.loading = true;
        state.status = StatusTypeEnum.Pending;
        state.message = '';
      })
      .addCase(findHeroById.fulfilled, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Success;
        state.hero = action.payload;
      })
      .addCase(findHeroById.rejected, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Error;
        state.message = action.payload as string;
      })
      .addCase(createHero.pending, state => {
        state.loading = true;
        state.status = StatusTypeEnum.Pending;
        state.message = '';
      })
      .addCase(createHero.fulfilled, state => {
        state.loading = false;
        state.status = StatusTypeEnum.Success;
        state.heroes = null;
        state.message = 'Herói cadastrado com sucesso!';
      })
      .addCase(createHero.rejected, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Error;
        state.message = action.payload as string;
      })
      .addCase(updateHero.pending, state => {
        state.loading = true;
        state.status = StatusTypeEnum.Pending;
        state.message = '';
      })
      .addCase(updateHero.fulfilled, state => {
        state.loading = false;
        state.status = StatusTypeEnum.Success;
        state.heroes = null;
        state.message = 'Herói atualizado com sucesso!';
      })
      .addCase(updateHero.rejected, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Error;
        state.message = action.payload as string;
      })
      .addCase(deleteHero.pending, state => {
        state.loading = true;
        state.status = StatusTypeEnum.Pending;
        state.message = '';
      })
      .addCase(deleteHero.fulfilled, state => {
        state.loading = false;
        state.status = StatusTypeEnum.Success;
        state.heroes = null;
        state.message = 'Herói excluído com sucesso!';
      })
      .addCase(deleteHero.rejected, (state, action) => {
        state.loading = false;
        state.status = StatusTypeEnum.Error;
        state.message = action.payload as string;
      });
  },
});

export const { resetStates } = heroReducer.actions;
export default heroReducer.reducer;
