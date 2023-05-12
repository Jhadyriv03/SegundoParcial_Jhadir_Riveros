import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AndroidApp.module.css';
import { Ellipse11Icon } from './Ellipse11Icon.js';
import { Ellipse19Icon } from './Ellipse19Icon.js';
import { Ellipse20Icon } from './Ellipse20Icon.js';
import { Line58Icon } from './Line58Icon.js';
import { Rectangle17Icon } from './Rectangle17Icon.js';
import { Rectangle18Icon } from './Rectangle18Icon.js';
import { Rectangle19Icon } from './Rectangle19Icon.js';
import { Rectangle22Icon } from './Rectangle22Icon.js';
import { Rectangle28Icon } from './Rectangle28Icon.js';
import { Rectangle31Icon } from './Rectangle31Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:2 */
export const AndroidApp: FC<Props> = memo(function AndroidApp(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle17}>
        <Rectangle17Icon className={classes.icon} />
      </div>
      <div className={classes.milkShakes}>Milk Shakes</div>
      <div className={classes.line58}>
        <Line58Icon className={classes.icon2} />
      </div>
      <div className={classes.rectangle18}>
        <Rectangle18Icon className={classes.icon3} />
      </div>
      <div className={classes.rectangle20}></div>
      <div className={classes.rectangle22}>
        <Rectangle22Icon className={classes.icon4} />
      </div>
      <div className={classes.ellipse11}>
        <Ellipse11Icon className={classes.icon5} />
      </div>
      <div className={classes.crunchyButterscotch}>Crunchy Butterscotch </div>
      <div className={classes.butterscotchCashews}>Butterscotch &amp; Cashews</div>
      <div className={classes.bs18}>Bs 18</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle19}>
        <Rectangle19Icon className={classes.icon6} />
      </div>
      <div className={classes.rectangle28}>
        <Rectangle28Icon className={classes.icon7} />
      </div>
      <div className={classes.ellipse19}>
        <Ellipse19Icon className={classes.icon8} />
      </div>
      <div className={classes.supermansSecret}>Supermans Secret</div>
      <div className={classes.peanutButterDryFruitWithVanill}>Peanut Butter . Dry fruit . With Vanilla Ice Cream</div>
      <div className={classes.bs21}>Bs 21</div>
      <div className={classes.rectangle29}></div>
      <div className={classes.rectangle30}></div>
      <div className={classes.rectangle31}>
        <Rectangle31Icon className={classes.icon9} />
      </div>
      <div className={classes.wonderWomanShake}>Wonder Woman Shake</div>
      <div className={classes.ellipse20}>
        <Ellipse20Icon className={classes.icon10} />
      </div>
      <div className={classes.saffronWithVanillaIceCream}>Saffron . With Vanilla Ice Cream</div>
      <div className={classes.bs19}>Bs 19</div>
      <div className={classes.line63}></div>
      <div className={classes.add}>Add</div>
      <div className={classes.add2}>Add</div>
      <div className={classes.add3}>Add</div>
    </div>
  );
});
