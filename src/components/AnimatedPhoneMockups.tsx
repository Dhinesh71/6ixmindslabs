import './AnimatedPhoneMockups.css';

interface PhoneMockupProps {
  position: 'left' | 'right';
}

function PhoneMockup({ position }: PhoneMockupProps) {
  const isLeft = position === 'left';

  return (
    <div
      className={`phone-mockup ${isLeft ? 'phone-left' : 'phone-right'}`}
    >
      <div className="phone-frame">
        <div className="phone-body">
          <div className="phone-notch"></div>
          <div className="phone-content">
            {isLeft ? (
              // Left Phone Content
              <>
                <div className="phone-header">
                  <div className="header-text"></div>
                  <div className="header-badge"></div>
                </div>

                <div className="phone-cta">
                  <div className="cta-bar"></div>
                </div>

                <div className="phone-cards">
                  <div className="card card-1">
                    <div className="card-header">
                      <div className="card-title"></div>
                      <div className="card-meta"></div>
                    </div>
                    <div className="card-subtitle"></div>
                  </div>

                  <div className="card card-2">
                    <div className="card-header">
                      <div className="card-title"></div>
                      <div className="card-meta"></div>
                    </div>
                    <div className="card-subtitle"></div>
                  </div>

                  <div className="card card-3">
                    <div className="card-header">
                      <div className="card-title"></div>
                      <div className="card-meta"></div>
                    </div>
                    <div className="card-subtitle"></div>
                  </div>
                </div>

                <div className="phone-button">
                  <div className="button-bar"></div>
                </div>
              </>
            ) : (
              // Right Phone Content
              <>
                <div className="phone-header">
                  <div className="header-text header-text-long"></div>
                  <div className="header-badge badge-pink"></div>
                </div>

                <div className="phone-subheader">
                  <div className="subheader-title"></div>
                  <div className="subheader-subtitle"></div>
                </div>

                <div className="phone-list">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`list-item item-${i % 2}`}>
                      <div className="list-avatar"></div>
                      <div className="list-content">
                        <div className="list-title"></div>
                        <div className="list-subtitle"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnimatedPhoneMockups() {
  return (
    <div className="phones-container">
      <PhoneMockup position="left" />
      <PhoneMockup position="right" />
    </div>
  );
}
