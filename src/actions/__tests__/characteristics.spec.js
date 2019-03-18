import { testActionCreator } from 'utils/tests';
import { ADD_CHARACERISTIC, addCharaceristic } from '../characteristics';

[{ type: ADD_CHARACERISTIC, fn: addCharaceristic }].map(testActionCreator);
