(() => {
  'use strict';

  const ACCENT = '#C8102E';
  const SECONDARY = '#EFAA00';

  const reviewsData = [
    { quote: '항상 팀의 관점에서 함께 가는 방향을 생각하는 팀원입니다. 그렇기에 개인의 성장도 빨랐지만, 그만큼 팀이 함께 성장하는 속도도 빠르게 만들어주는 없어서는 안될 팀원이자, 팀의 소리더로서 역할을 해주어 팀을 이끄는 데 많은 도움을 받았습니다.', person: '- [Manager] THE CSR 이OO 팀장' },
    { quote: '다른 컨설턴트들과도 업무를 해보았지만, 정은채 SPL님은 집요한 컨설턴트라고 표현할 수 있습니다. 안될 것 같은 상황에서도 적당히 하기보다 집요하게 파고들어 언제나 솔루션을 제시해주었습니다. 덕분에 3년 간 많은 도움을 받았고, 어느 곳에서든 잘 해내실 분이라 생각하여 항상 응원합니다.', person: '- [Client] 롯데건설 한OO 책임' },
    { quote: '프로젝트 기간이 길지 않아 쉽지 않았는데, 꼼꼼히 업무 현황을 챙겨주시고, 끝까지 해볼 수 있는 것들을 함께 해주신 덕분에 좋은 결과로 프로젝트 마무리할 수 있었습니다.', person: '- [Client] 한세그룹 김OO 파트장' },
    { quote: '업무 시 실제로 수행할 사람까지 생각해서 명료하게 전달해 주시고, 기획자의 의도를 디자이너가 디자인에 명확하게 반영할 수 있도록 꼼꼼히 소통해주셔서 정은채 SPL님과 업무를 하게 되면 더 잘하고 싶어집니다. 윈윈할 수 있는 결과물을 도출하게끔 하고, 효과적인 결과물을 도출해 내기에 항상 협업하고 싶은 리더였습니다.', person: '- [협력사] 박OO 디자이너' },
    { quote: '배려, 낙천성, 꼼꼼함의 3가지 결이 만나는 다름을 존중하고, 도전을 두려워하지 않으며, 성장을 멈추지 않는 동료였습니다. 나아가 한번 마음먹은 목표는 끝까지 결과물로 만들어내는 사람이었습니다. 함께 일하는 사람이 편안함과 동시에, 목표를 향한 확실한 동기부여까지 느낄 수 있게 한 동료입니다.', person: '- [Peer] THE CSR 이OO PL' },
    { quote: '처음 팀에 합류했을 때부터 팀원들에게 인사이트를 주시고, 컨설턴트로서 업무를 해내시는 모습에 많이 의지하고 영감을 받았습니다. 함께 일한 경험이 가장 큰 수확이라고 느끼게 해주신 사수입니다.', person: '- [Peer] THE CSR 조OO 컨설턴트' },
    { quote: '어떤 프로젝트든 책임감있게 수행하는 연구원입니다. 특히 내부 커뮤니케이션을 통해 결과물이 최상의 결과물로 마무리될 수 있는 방향을 끊임없이 고민하고, 완수해 왔습니다. 그렇기에 누구에게든 자신있게 소개할 수 있는 연구원이었고, 자신의 조직에서 언제나 최선을 다해 노력할 것입니다.', person: '- [Manager] 아이큐비타민 김OO 원장' },
    { quote: '수많은 동기들 중 연구 파트너로서 언제나 함께 하고 싶은 동기입니다. 꼼꼼하게 연구의 빈 공백을 채우는 것부터 최상의 결과물을 도출하기 위해 계속 고민하고 검토하고 다시 생각해보는 점에서 어떤 연구든지 은채와 함께라면 자신있다는 생각이 들게 만든 동료였습니다.', person: '- [Peer] 이화여자대학교 최OO 박사' },
  ];

  const resumeSections = [
    {
      label: '학력', title: 'Education', cols: 2, color: SECONDARY, kind: 'list',
      items: [
        { period: '2017.03 - 2019.08', title: '이화여자대학교 교육학 석사', desc: '미술치료교육학 전공' },
        { period: '2013.03 – 2017.02', title: '삼육대학교 미술학/문학사 학사', desc: '미술컨텐츠학 전공, 상담심리학 복수전공' },
      ],
    },
    {
      label: '경력', title: 'Career', note: '* 석사 2년 6개월을 제외한 4대 보험 적용 경력 산정 시 총 6년 5개월', cols: 2, color: ACCENT, kind: 'list',
      items: [
        { period: '2022.11~2026.05 (3년 7개월)', title: '(주)더씨에스알: ESG전략공시컨설팅팀 / SPL', desc: '· 10건 이상의 ESG 공시 및 지속가능경영보고서 발간\n· ESG 전략 수립 컨설팅' },
        { period: '2020.03~2022.07 (2년 5개월)', title: '(주)아이큐비타민: 기획팀 / 책임 연구원', desc: '· 심리학 기반 콘텐츠 기획 및 학술 연구\n· 심리학 기반 콘텐츠 제품 투자처 확보를 위한 기업 PT 준비 및 진행' },
        { period: '2019.10~2020.02 (5개월)', title: '킴스케어 심리상담센터: 총무팀 / 미술치료사', desc: '· 유아동 및 청소년/성인/부모 대상 미술치료 프로그램 기획 및 운영\n· 심리검사 분석\n· 심리상담센터 운영 전반 지원' },
        { period: '2017.03~2019.08 (2년 6개월)', title: '이화여자대학교 미술치료사', desc: '· 복지관/가정폭력 피해 아동청소년 보호센터/청소년 단기 쉼터/고등학교/암센터 등 임상 미술치료 진행\n· (아동, 청소년, 성인, 치매노인)' },
      ],
    },
    {
      label: '강점', title: 'Strength', color: '#111', kind: 'strength',
      items: [
        { title: 'Problem Solver', desc: '표면 너머를 보고 현상 뒤에 숨은 구조와 작동 원리를 읽어 문제의 본질을 정의하고, 솔루션을 설계합니다.', bg: SECONDARY },
        { title: 'Value Connector', desc: '심리적 안전감을 바탕으로 단순히 좋은 일이 아닌, 대상과 문제, 사회적 가치를 연결합니다.', bg: '#fff' },
        { title: 'Impact Architect', desc: '정해진 답이 없는 문제 속에서 통합적 시각으로 가치가 지속적으로 이어질 수 있는 구조를 만듭니다.', bg: SECONDARY },
      ],
    },
    {
      label: '스킬', title: 'Skill', color: SECONDARY, kind: 'chips',
      items: [
        { title: '콘텐츠 기획 및 프로그램 설계' }, { title: '이해관계자 리서치' },
        { title: '프로그램 임상 진행' },
        { title: '대상 공감 기획' }, { title: '협력적 커뮤니케이션' }, { title: '문제 구조화 및 솔루션 도출' },
      ],
    },
    {
      label: '자격', title: 'Certificate', cols: 3, color: ACCENT, kind: 'list',
      items: [
        { period: '2021.11', title: '임상미술심리상담사 2급', desc: '보건복지부' },
        { period: '2019.09', title: '미술심리전문가', desc: '이화여자대학교 교육대학원' },
        { period: '2017.01', title: '상담심리지도사 1급', desc: '전국대학상담학과협의회' },
      ],
    },
    {
      label: '교육', title: 'Education&conference', cols: 3, color: SECONDARY, kind: 'list',
      items: [
        { period: '2026.05', title: '실질적 사회공헌의 현실', desc: '행복나눔재단 20주년 기념 컨퍼런스' },
        { period: '2025.07', title: '사회공헌 전략과 기획', desc: '한국사회복지협의회' },
        { period: '2022.03', title: '윤리적 연구 수행을 위한 인간 대상 연구자 교육', desc: '국가생명윤리교육원', titleNowrap: true },
      ],
    },
    {
      label: '연구', title: 'Study', cols: 2, color: ACCENT, kind: 'list',
      items: [
        { period: '2022', title: '정서적 불안정성 완화를 위한 색채 반응 연구', desc: '한국예술치료학회, 22(1), 87-107.' },
        { period: '2021', title: '자기 보고형 웰빙 척도 문항 개발을 위한 예비 연구', desc: '아동심리치료학회, 1(16), 35-64.' },
        { period: '2020', title: '국내 아동·청소년의 회복탄력성 증진 미술치료 프로그램의 효과에 관한 \n메타분석', desc: '한국조형교육학회, (74), 285-312.' },
        { period: '2019', title: '자립을 준비하는 쉼터 거주 청소년의 낙관성을 위한 \n미술치료 질적 사례 연구', desc: '한국조형교육학회, (71), 325-353.' },
      ],
    },
  ];

  const projects = [
    {
      tag: '청년 자립 · 콘텐츠 기획 및 운영', title: '쉼터 거주 청년 자립 프로젝트: 오롯이, 나',
      desc: '쉼터 거주 청년이 마주하는 자립의 사각지대를 발견하고, 낙관성에 근거해 심리적 회복을 돕고 스스로 자립할 수 있는 심리적 자원을 발견하는 자립 지원 프로그램을 기획·운영',
      color: ACCENT, category: 'social', detailPage: 'projects/project-1.html',
    },
    {
      tag: '아동 웰빙 증진 · 척도 개발', title: '자기 보고형 아동 웰빙 척도 개발 프로젝트',
      desc: '한국 아동의 낮은 웰빙 지수라는 문제에서 출발하여 아동이 스스로 답변할 수 있는 자기 보고형 웰빙 척도를 개발하고, 증가하는 아동 돌봄 공백을 해결하기 위한 새로운 공간에의 도입 제안',
      color: ACCENT, category: 'social', detailPage: 'projects/project-2.html',
    },
    {
      tag: 'ESG · 임팩트 리포트', title: '포니정재단 20주년 임팩트 리포트 발간 및 성과 아카이빙',
      desc: '재단 설립 20주년을 맞아 20년 간의 사업 성과를 데이터화한 임팩트 리포트를 발간하고, 포니정 정신의 재정의를 통해 미래 재단 방향성 재수립',
      color: SECONDARY, category: 'esg',
      background: '재단 설립 20주년을 맞아, 지난 20년의 궤적을 되짚고 다음 20년의 방향을 세워야 하는 지점에 서 있었습니다. 그러나 20년간 쌓인 사업 성과는 사업별로 흩어져 있었고, 재단의 뿌리인 \'포니정 정신(현대 포니 자동차를 개발하던 시절 정세영 명예회장이 보여준 도전과 개척의 정신)\'은 창립 세대에게는 선명했지만, 현재와 미래에 어떤 가치로 이어져야 하는지는 불분명했습니다. ',
      findings: [
        '1. 재단에 부족한 것은 성과가 아니라, 그 성과들을 하나로 꿰는 정체성이다.',
        '2. 20년의 활동이 20개의 개별 프로젝트로 분산된 데이터로 남아있다.',
        '3. 다음 세대가 무엇을 계승해야 할지 알기 어렵고, 이에 따라 재단의 사업도 다소 다양화된 경향이 있다.',
      ],
      resolution: '과거의 정신을 오늘의 언어로 재정의하고, 흩어진 성과를 그 정신 아래 재배열하여 핵심 사업을 구분하고, 지속 관리할 수 있는 체계와 연동한다.',
      processSteps: [
        { title: '이해관계자의 기억을 데이터로: 15인의 이해관계자 인터뷰', desc: '포니정 정신을 재단 내부의 추측이 아니라 실제 목격자들의 언어로 재구성하기 위해, 정세영 명예회장의 최측근 관계자와 재단 수혜자 등 약 15명을 심층 인터뷰했습니다. 창립 세대가 기억하는 정신과, 수혜자가 실제로 체감한 재단의 가치 사이의 접점을 찾는 것이 핵심이었습니다.' },
        { title: '흩어진 언어를 정신의 키워드로: 텍스트마이닝', desc: '인터뷰와 설문에서 수집한 방대한 정성 데이터를 텍스트마이닝으로 분석해, 반복적으로 등장하는 핵심 키워드를 추출했습니다. 이를 통해 \'포니정 정신\'을 하나의 상징적 문구가 아니라, 여러 목소리가 공통으로 가리키는 몇 개의 구체적 가치로 재정의할 수 있었습니다.' },
        { title: '20년의 산발적 성과를 하나의 논리로: 변화이론 적용', desc: '재단이 20년간 투입한 자원(Input)과 그 결과물(Output)이, 실제로 어떤 변화(Outcome)로 이어졌는지를 변화이론 프레임으로 재구성했습니다. 사업별로 따로 보고되던 성과를, 재정의한 포니정 정신이라는 하나의 축 아래 연결해 재단 활동 전체를 관통하는 하나의 서사로 정립했습니다.' },
        { title: '측정 가능한 미래로: KPI 체계 설계', desc: '재정의된 정신과 성과 구조를 바탕으로, 재단의 핵심 사업들을 관리할 수 있는 KPI 지표를 새로 발굴하고 제안했습니다. 앞으로의 활동이 다시 흩어지지 않도록, 정신과 성과와 지표가 하나의 체계 안에서 맞물리게 설계한 것입니다.' },
      ],
      outcomeSteps: [
        { title: '재단 비전하우스 수립', desc: '재정의된 포니정 정신을 중심으로, 재단이 지향하는 가치와 방향을 체계화한 비전하우스를 완성했습니다. 이제 재단의 어떤 신규 사업이든, 이 비전하우스에 비추어 \'우리다운 사업인가\'를 판단할 수 있는 기준이 생겼습니다.' },
        { title: '20년 성과의 아카이빙 · 임팩트 리포트 초안', desc: '산재해 있던 20년간의 사업 성과를 변화이론 구조로 재정리해, 재단 20년사를 하나의 흐름으로 읽을 수 있는 임팩트 리포트 초안을 작성했습니다. 이는 단순한 연혁 정리가 아니라, 무엇을 투입해 무엇을 바꾸어 왔는지를 논증하는 자료로 남았습니다.' },
        { title: '지속가능한 KPI 체계', desc: '재단 핵심 사업별 KPI 지표를 구축해, 앞으로의 성과도 같은 언어와 기준으로 축적될 수 있는 발판을 마련했습니다.' },
      ],
    },
    {
      tag: 'ESG 전략 · 공시', title: '롯데건설 ESG 대응 전략 과제 및 보고서 고도화',
      desc: '글로벌 ESG 공시 규제에 따라 롯데건설만의 ESG 대응 전략을 수립 및 실행하고 지속가능경영보고서를 통해 이해관계자에게 투명하게 공시',
      color: '#111', category: 'esg',
      background: '글로벌 ESG 규제와 해외 바이어사의 요구로 자사만의 공급망 ESG 관리 체계를 세워야 하는 과제를 안고 있었습니다. 그러나 복잡한 밸류체인 안에서 이 일을 감당할 조직도, 방법론도 없었습니다. 저는 외부 컨설턴트로 이 프로젝트에 합류하며 단순히 체계를 만들고 끝나는 것이 아닌, 롯데건설의 공급망에서 발생할 수 있는 리스크를 식별해내는 실제로 작동하는 체계를 만들고자 했습니다.',
      findings: [
        '1. 체계를 누가, 왜, 지속적으로 운영할 것인가에 대한 공백이 존재해 체계를 만들더라도 서류로만 남을 가능성이 있다.',
        '2. 공급망에 존재할 수 있는 다양한 ESG 문제가 부서별로 분산 관리되고 있다.',
        '3. 공급망 관리를 왜 해야 하는지 내부적으로도 중요하게 생각하고 있지 않다.',
      ],
      resolution: '다양한 이해관계자의 의견을 청취하고, 각 이해관계와 공급망 관리가 가진 연계점을 찾아 스스로, 지속가능하게 작동하게끔 한다. ',
      processSteps: [
        { title: '이해관계자 간담회 기반 운영 체계 뼈대 수립', desc: '원청의 책임 범위가 확대되는 규제 동향을 근거로 해당 과업이 일시적 유행이 아님을 설득하면서 각 부서별로 안고 있는 공급망 관련 부담을 청취하는 간담회를 실시했습니다. 그 결과, 협력사 선정은 사업부서에 있고, 직접 협력사와 컨택하는 조달 부서는 단기 기준에 맞춰 협력사를 선정할 뿐 ESG를 요구할 권한이 없음을 확인하였습니다. 이에, 전사를 아우르는 전략기획 부서와 조달 부서의 TF를 구성햐 특정 부서에만 쏠리는 부담을 1차적으로 낮추고, 조달 부서의 기존 업무인 동반성장지수 관리에 협력사 ESG 지원이 연결된다는 접점을 찾아 업무의 당위성을 세웠습니다. 이러한 뼈대를 세운 뒤, UN와 IRO 등 국제 기구에서 요구하는 공급망 관리 가이드라인에 따라 롯데건설만의 공급망 ESG 자가체크 문항을 개발하고, 협력사 ESG 관리 정책을 통해 실행 주체와 관리 방안, 모니터링 방안을 명문화했습니다.' },
        { title: '현장의 목소리 수집을 통한 개선점 발굴', desc: '1년차에 만든 평가 체계를 현장에 처음 적용하니, 협력사의 반발과 담당자별 이해도 차이로 문서상의 점수만 남고 정작 롯데건설 공급망이 지닌 진짜 리스크는 드러나지 않는 문제가 발생했습니다. 이를 현장의 데이터로 받아들여 협력사 특성별로 문항을 달리해야 한다는 것, 모든 협력사가 아닌 고위험 협력사 등 평가 대상을 세분화하는 기준 수립이 필요하다는 것, 담당자별 이해도 간극을 줄이기 위한 교육이 필요하다는 것을 개선 과제화하였습니다. 또한, 현장에서 얻은 이 발견들을 결과 보고서로 정리해 임원 보고까지 지원하며, 차년도 개선과제로 이어질 수 있도록 했습니다.' },
        { title: '현장 수준에 맞춘 체계 재설계 및 정착', desc: '리스크 발생 가능성과 재무적 영향도를 기준으로 수천 개의 협력사 중 20개 사를 평가 대상으로 선별하였습니다. 이들을 대상으로 협력사 담당자 사전 교육을 실시하여 기업 간 이해도 격차를 줄이고, 전년도 평가에서의 어려움과 개선 요구 사항을 수집했습니다. 이를 토대로 건설 공정 특성에 따라 다른 문항이 노출될 수 있도록 문항 체계를 재구조화하고, 협력사 의견을 수렴해 워딩 수정 및 증빙 자료의 세분화 예시를 함께 제공하였습니다. 나아가 평가에서 끝내지 않고, 리스크 점수가 높게 나온 협력사에는 관련 영역에 대한 컨설팅을 제공하여 협력사의 자발적인 문제 개선이 롯데건설 공급망의 건정성으로 이어진다는 동반성장의 목표까지 이룰 수 있도록 수행했습니다.' },
      ],
      outcomeSteps: [
        { title: '협력사 문의 약 90% 감소', desc: '2년차 대비 3년차에 평가 기간 중 협력사 문의가 대폭 줄었고, 전 협력사가 기한 내 증빙자료까지 갖춰 제출을 완료했습니다. 재구조화한 평가 체계가 협력사에게도 이해 가능한 수준으로 변화했다는 신호였습니다.' },
        { title: '모니터링 체계로서의 정착', desc: '재무 영향별/공정별/ESG 영역별로 협력사 간 차이와 평균 등을 포함한 엑셀 기반 대쉬보드를 구축하여 롯데건설 공급망 모니터링 체계를 구축했습니다. 이를 통해 공급망에서 발생할 수 있는 리스크를 사전에 식별하는 근거 자료 및 경영진 보고 자료로 활용하면서 매년 평가를 통해 업데이트할 수 있는 내부 모니터링 체계로 정착시켰습니다.' },
      ],
    },
    {
      tag: 'ESG 체계 구축', title: '신원 전사 ESG 전략 체계 수립 및 최초 보고서 발간',
      desc: 'ESG 경영 체계가 부재했던 신원에 전사적 ESG 거버넌스 및 관리 체계를 신규 구축하고, 지속할 수 있도록 ESG KPI 체계를 도입',
      color: '#111', category: 'esg',
      background: '신원은 ESG를 처음 시작하는 기업이었습니다. 전략도, 지표도, 심지어 이 일을 누구의 업무로 봐야 할지에 대한 조직 내 합의조차 없는 상태였습니다. 이런 기업에서 가장 흔한 실패는 컨설턴트가 그럴듯한 전략 문서를 만들어 놓고 떠나면, 외부에서 만들어준 자료만 남아 누구의 일도 되지 못한 채 방치되는 것입니다.',
      findings: [
        '1. ESG 관련 활동은 존재했지만 부서별로 산재해 있어 전사 차원의 관리 주체가 없다.',
        '2. 데이터를 수집·관리하는 표준 프로세스가 없어 공시 시점마다 데이터를 새로 취합해야 한다.',
        '3. 임직원의 ESG 이해도가 낮아, 체계를 만들어도 현장에서 지속되기 어려운 구조를 가지고 있다.',
      ],
      resolution: 'ESG 현황 진단을 통해 동종사와의 격차를 파악하고, 조직원들이 ESG를 자신의 업무로 받아들일 수 있도록 전사 거버넌스 조직과 부서별 데이터 관리 프로세스를 함께 설계해, 전사의 언어가 되도록 한다.',
      processSteps: [
        { title: 'ESG 현황 진단: 신원만의 우선순위 탐색', desc: '사업 부문별(브랜드 리테일, OEM/ODM) 특성을 반영한 이중 중대성평가로 신원이 실제로 관리해야 할 ESG 이슈를 추려냈습니다. 동종사 공시 Gap 분석을 통해, 무엇부터 당장 실행 가능한지 Quick-win 과제도 함께 도출했습니다.' },
        { title: 'R&R 정립: 전사의 언어로 번역', desc: '전사 부서 인터뷰를 통해 기존 현업 업무와 중요 ESG 이슈를 연계하여 부서별 ESG R&R을 수립했습니다. 현업 부서가 이미 하고 있는 업무와 ESG 지표가 맞닿는 지점을 찾아 연결해, "우리가 새로 해야 할 일"이 아니라 "우리가 하던 일의 연장"으로 느껴지도록 설계했습니다.' },
        { title: 'KPI 관리: 현장의 변화에 기반한 목표 재수립', desc: '부서 KPI와 ESG KPI를 연계해 진척도를 지속적으로 점검하고, 목표에 미달한 지점은 곧바로 개선과제로 전환했습니다. 처음 세운 로드맵을 고집하지 않고, 현장이 실제로 소화할 수 있는 속도에 맞춰 계속 조율해 나갔습니다.' },
        { title: '전사 인식 관리: ESG 교육', desc: '구축한 체계가 문서로만 남지 않도록, 임직원 대상 ESG 교육을 함께 진행해 현장의 이해도를 높였습니다.' },
      ],
      outcomeSteps: [
        { title: '2년 만의 자체 ESG 관리 체계 구축', desc: '전사 거버넌스와 데이터 관리 체계를 갖춰, 기업 스스로 ESG를 점검하고 실행할 수 있는 체계를 완성했습니다.' },
        { title: '외부 평가 등급 상승', desc: '대외 ESG 평가에서 통합 등급이 두 단계 상승하며, 내부 체계의 실질적 개선이 외부에서도 검증받았습니다.' },
      ],
    },
  ];

  const persona = [
    '문제 해결을 통한 가치 창출에 관심이 많은 Problem Solver',
    '사업의 방향성과 프로젝트의 성과를 연결해 가치를 극대화하는 Value Connector',
  ];
  const goal = [
    '기업과 사회의 공존을 위한 CSV 구조 구축',
    '제도의 사각지대에 있는 사회문제 발견 및 해결',
  ];

  const stages = [
    {
      title: '학업 및 연구 / 미술치료 임상 치료', color: SECONDARY, step: 1,
      experience: ['쉼터 거주 청년의 자립 사각지대 발견', '자립 지원 프로그램 기획·운영'],
      insight: '1대 1 상담을 넘어 콘텐츠(프로그램)를 통한 문제 해결의 긍정적 영향력을 발견',
      range: '개인', vision: '[Next Plan] 다양한 사회문제와 대상에게 맞는 콘텐츠 기획력 확보',
    },
    {
      title: '콘텐츠 기획 / 개발', color: ACCENT, step: 2,
      experience: ['심리학 기반 콘텐츠 기획 및 개발', '재무적 성과-사회 문제 해결의 상호작용 고려'],
      insight: '콘텐츠의 지속가능성을 위한 기업의 영향력 및 비즈니스 관점의 확보 필요성 실감',
      range: '집단', vision: '[Next Plan] 재무적 성과와 사회적 영향력을 종합적으로 고려하는 ESG 전문성 확보로 비즈니스 관점 장착',
    },
    {
      title: 'ESG 경영', color: '#111', step: 3,
      experience: ['글로벌 규제 기반의 ESG 경영 방향성 분석', '10건의 ESG 공시로 약 20개 사 지원'],
      insight: '리스크 관리와 밸류 창출을 통합한 전략적 사고방식 습득',
      range: '조직', vision: '[Next Plan] 사회문제 해결 활동의 지속가능성 확보와 가치창출체계 구축',
    },
  ];

  const homeIndex = [
    { label: 'Resume', page: 'resume' },
    { label: 'Career Journey', page: 'career' },
    { label: 'Project', page: 'project' },
    { label: 'Partner Review', page: 'partner' },
  ];

  // ---------- helpers ----------

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function esc(str) {
    return String(str ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function nl2br(str) {
    return esc(str).replace(/\n/g, '<br>');
  }

  // ---------- state ----------

  let state = { page: 'home', selectedProjectIndex: null };

  // ---------- render: static lists ----------

  function renderHomeIndex() {
    const holder = $('#home-index-list');
    holder.innerHTML = '';
    homeIndex.forEach((idx, i) => {
      const item = document.createElement('div');
      item.className = 'home-index-item';
      item.innerHTML = `<span>${esc(idx.label)}</span>`;
      item.addEventListener('click', () => goPage(idx.page));
      holder.appendChild(item);
    });
  }

  function renderResume() {
    const holder = $('#resume-sections');
    holder.innerHTML = resumeSections.map((sec) => {
      let body = '';
      if (sec.kind === 'list') {
        body = `<div class="resume-list" style="grid-template-columns: repeat(${sec.cols}, 1fr);">` +
          sec.items.map((it) => `
            <div class="resume-list-item">
              <div class="period">${esc(it.period)}</div>
              <div class="title" style="white-space:${it.titleNowrap ? 'nowrap' : 'normal'};">${esc(it.title)}</div>
              <div class="desc">${nl2br(it.desc)}</div>
            </div>`).join('') + `</div>`;
      } else if (sec.kind === 'chips') {
        body = `<div class="resume-chips">` +
          sec.items.map((it) => `<div class="resume-chip">${esc(it.title)}</div>`).join('') + `</div>`;
      } else if (sec.kind === 'strength') {
        body = `<div class="resume-strength">` +
          sec.items.map((it) => `
            <div class="resume-strength-item" style="background:${it.bg};">
              <div class="title">${esc(it.title)}</div>
              <div class="desc">${esc(it.desc)}</div>
            </div>`).join('') + `</div>`;
      }
      return `
        <div class="resume-section">
          <div class="resume-head">
            <span class="resume-tag" style="background:${sec.color};">${esc(sec.label)}</span>
            <span class="resume-title">${esc(sec.title)}</span>
          </div>
          ${sec.note ? `<div class="resume-note">${esc(sec.note)}</div>` : ''}
          ${body}
        </div>`;
    }).join('');
  }

  function projectCard(p, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="tag" style="background:${p.color};">${esc(p.tag)}</div>
      <div class="title">${esc(p.title)}</div>
      <div class="desc">${esc(p.desc)}</div>`;
    card.addEventListener('click', () => openProject(index));
    return card;
  }

  function renderProjectList() {
    const social = $('#social-projects');
    const esgHolder = $('#esg-projects');
    social.innerHTML = '';
    esgHolder.innerHTML = '';
    projects.forEach((p, i) => {
      const card = projectCard(p, i);
      if (p.category === 'social') social.appendChild(card);
      else esgHolder.appendChild(card);
    });
  }

  function renderCareer() {
    const personaHolder = $('#persona-list');
    personaHolder.innerHTML = persona.map((p) => `<div class="pg-list-item">· ${esc(p)}</div>`).join('');
    const goalHolder = $('#goal-list');
    goalHolder.innerHTML = goal.map((g) => `<div class="pg-list-item" style="white-space:normal;">· ${esc(g)}</div>`).join('');

    const stagesHolder = $('#stages-grid');
    stagesHolder.innerHTML = stages.map((s) => `
      <div class="stage-card">
        <div>
          <div class="stage-step" style="background:${s.color};">STEP ${s.step}</div>
          <div class="stage-title">${esc(s.title)}</div>
        </div>
        <div>
          <div class="stage-subhead">경험</div>
          ${s.experience.map((e) => `<div class="stage-exp-item">· ${esc(e)}</div>`).join('')}
        </div>
        <div>
          <div class="stage-subhead">인사이트</div>
          <div class="stage-insight">${esc(s.insight)}</div>
        </div>
        <div class="stage-footer">
          <div class="stage-range">영향의 범위: ${esc(s.range)}</div>
          <div class="stage-vision">${esc(s.vision)}</div>
        </div>
      </div>`).join('');
  }

  function renderReviews() {
    const holder = $('#review-cards');
    holder.innerHTML = reviewsData.map((r) => `
      <div class="review-card">
        <div class="review-quote">"${esc(r.quote)}"</div>
        <div class="review-person">${esc(r.person)}</div>
      </div>`).join('');
  }

  // ---------- project detail ----------

  function renderGenericDetail(p) {
    const holder = $('#project-detail-generic');
    const stepsHtml = (steps, barColor) => steps.map((s) => `
      <div class="pg-step">
        <div class="pg-step-bar" style="background:${barColor};"></div>
        <div>
          <div class="pg-step-title">${esc(s.title)}</div>
          <div class="pg-step-desc">${esc(s.desc)}</div>
        </div>
      </div>`).join('');

    holder.innerHTML = `
      <div class="pg-tag" style="background:${p.color};">${esc(p.tag)}</div>
      <div class="pg-title">${esc(p.title)}</div>

      <div class="pg-block">
        <div class="pg-block-label">Background</div>
        <div class="pg-body">${esc(p.background)}</div>
      </div>

      ${p.findings ? `
      <div class="pg-findings">
        <div class="pg-findings-title">[발견한 문제점]</div>
        ${p.findings.map((f) => `<div class="pg-body">${esc(f)}</div>`).join('')}
        <div class="pg-resolution-title">[해결점]</div>
        <div class="pg-body">${esc(p.resolution)}</div>
      </div>` : ''}

      <div class="pg-block">
        <div class="pg-block-label accent">Process</div>
        ${p.processSteps ? stepsHtml(p.processSteps, ACCENT) : ''}
        ${p.process ? `<div class="pg-body" style="white-space:pre-line;">${esc(p.process)}</div>` : ''}
      </div>

      <div>
        <div class="pg-block-label tag-color" style="background:${p.color};">Outcome</div>
        ${p.outcomeSteps ? stepsHtml(p.outcomeSteps, SECONDARY) : ''}
        ${p.outcome && !p.outcomeSteps ? `<div class="pg-body">${esc(p.outcome)}</div>` : ''}
      </div>`;
  }

  function openProject(index) {
    state.selectedProjectIndex = index;
    location.hash = `#project/${index}`;
  }

  function closeProject() {
    state.selectedProjectIndex = null;
    location.hash = '#project';
  }

  let activeDetailIframe = null;

  function resizeIframeToContent(iframe) {
    try {
      const doc = iframe.contentDocument;
      if (!doc) return;
      const height = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
      if (height > 0) iframe.style.height = height + 'px';
    } catch (e) {
      // Cross-origin iframe content: keep the CSS fallback height.
    }
  }

  window.addEventListener('resize', () => {
    if (activeDetailIframe) resizeIframeToContent(activeDetailIframe);
  });

  function renderProjectDetail() {
    const p = projects[state.selectedProjectIndex];
    const listView = $('#project-list-view');
    const detailView = $('#project-detail-view');
    const iframeHolder = $('#project-detail-iframe-holder');
    const genericHolder = $('#project-detail-generic');

    if (!p) {
      listView.style.display = '';
      detailView.classList.remove('active');
      return;
    }

    listView.style.display = 'none';
    detailView.classList.add('active');

    if (p.detailPage) {
      genericHolder.hidden = true;
      iframeHolder.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.src = p.detailPage;
      iframe.loading = 'lazy';
      iframe.scrolling = 'no';
      iframe.addEventListener('load', () => {
        resizeIframeToContent(iframe);
        // Re-measure shortly after in case fonts/images settle late.
        setTimeout(() => resizeIframeToContent(iframe), 300);
      });
      iframeHolder.appendChild(iframe);
      activeDetailIframe = iframe;
    } else {
      iframeHolder.innerHTML = '';
      genericHolder.hidden = false;
      activeDetailIframe = null;
      renderGenericDetail(p);
    }
  }

  // ---------- page nav ----------

  function goPage(page) {
    location.hash = page === 'home' ? '' : `#${page}`;
  }

  function applyRoute() {
    const hash = location.hash.replace(/^#/, '');
    const [page, arg] = hash.split('/');
    state.page = page || 'home';
    state.selectedProjectIndex = (page === 'project' && arg !== undefined) ? Number(arg) : null;

    $$('.page').forEach((p) => p.classList.toggle('active', p.dataset.page === state.page));
    $$('.nav-item').forEach((n) => n.classList.toggle('active', n.dataset.nav === state.page));

    if (state.page === 'project') renderProjectDetail();

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  // ---------- wiring ----------

  function initNav() {
    $$('[data-nav]').forEach((btn) => {
      btn.addEventListener('click', () => goPage(btn.dataset.nav));
    });
    $$('[data-close-project]').forEach((btn) => {
      btn.addEventListener('click', closeProject);
    });
    window.addEventListener('hashchange', applyRoute);
  }

  function syncHeaderHeightVar() {
    const header = $('.site-header');
    if (!header) return;
    document.documentElement.style.setProperty('--header-h', header.getBoundingClientRect().height + 'px');
  }

  function init() {
    renderHomeIndex();
    renderResume();
    renderProjectList();
    renderCareer();
    renderReviews();
    initNav();
    applyRoute();
    syncHeaderHeightVar();
    window.addEventListener('resize', syncHeaderHeightVar);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
