import S from '@/routes/landing/component/LandingLogo.module.css';

import Icon from '@/components/Icon/Icon';

function LandingLogo() {
  return (
    <div className={S.component}>
      <Icon id="Logo_m" width={87} height={32.09} />
      <h2>간편한 만남, 건강한 즐거움</h2>
    </div>
  );
}

export default LandingLogo;
