import React, { useState } from 'react';
import { Select, Modal, Row, Col, Statistic, Typography } from 'antd';
import './index.scss';

export default function ClassSearch() {
  const [selectedClass, setSelectedClass] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [submittingClass, setSubmittingClass] = useState(false);
  const [customProfessor, setCustomProfessor] = useState('Enter Instructor');
  const OPTIONS = [
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 1100',
      Title: 'Introduction to Asian American Studies',
      Instructor: 'Derek Chang (dsc37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 2620',
      Title: 'Introduction to Asian American Literature',
      Instructor: 'Sunn Wong (ssw6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 3030',
      Title: 'Asians in the Americas: A Comparative Perspective',
      Instructor: 'Viranjini Munasinghe (vpm1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 4020',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Christine Balance (cbb84)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 4550',
      Title: 'Race and the University',
      Instructor: 'Derek Chang (dsc37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 4950',
      Title: 'Independent Study',
      Instructor: 'Sunn Wong (ssw6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AAS 6020',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Christine Balance (cbb84)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 1200',
      Title: 'Introduction to Business Management',
      Instructor: 'Stephen Sauer (sjs46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 1500',
      Title:
        'An Introduction to the Economics of Environmental and Natural Resources',
      Instructor: 'Catherine Kling (clk228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2000',
      Title: 'Contemporary Controversies in the Global Economy',
      Instructor: 'Chris Barrett (cbb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2010',
      Title: 'Spreadsheet Modeling for Management and Economics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2015',
      Title: 'The Business Case for Diversity and Inclusion',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2020',
      Title: 'Better Decisions for Life, Love and Money',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2025',
      Title: 'Work and Well-Being',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2050',
      Title: 'Introduction to Agricultural Finance',
      Instructor: 'Reza Moghimi (am2393)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2210',
      Title: 'Financial Accounting',
      Instructor: 'Reza Moghimi (am2393)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2220',
      Title:
        'Foundational Perspectives and Contemporary Issues in Entrepreneurship',
      Instructor: 'Jennifer Majka (jmm528)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2225',
      Title: 'Financial Accounting For Dyson Majors',
      Instructor: 'Suzanne Shu (sbs78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2240',
      Title: 'Finance for Dyson Majors',
      Instructor: 'Laura Niemi (ln279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2241',
      Title: 'Finance',
      Instructor: 'Christopher Wolf (caw364)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2300',
      Title: 'International Trade and Finance',
      Instructor: 'Marquise Riley (msr259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2310',
      Title: 'Business and Economics of Food',
      Instructor: 'Robert Karpman (rk395)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2420',
      Title: 'Marketing for Dyson Majors',
      Instructor: 'Marquise Riley (msr259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2480',
      Title: 'Food and Consumer Packaged Goods Industry Dynamics',
      Instructor: 'Marquise Riley (msr259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2601',
      Title: 'Strategy',
      Instructor: 'Jawad Addoum (jma369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2700',
      Title: 'Management Communication',
      Instructor: 'Jawad Addoum (jma369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2810',
      Title: 'The Economics of Vice and Corruption',
      Instructor: 'Jawad Addoum (jma369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2830',
      Title: 'VBA for Data Analysis and Business Modeling',
      Instructor: 'Rich Curtis (rtc3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2840',
      Title: 'Python Programming for Data Analysis and Business Modeling',
      Instructor: 'Rich Curtis (rtc3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 2850',
      Title: 'R Programming for Business Analytics and Data Visualization',
      Instructor: 'Arnab Basu (ab362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3000',
      Title: 'Grand Challenges Pre-Project Immersion',
      Instructor: 'Bradley Rickard (bjr83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3030',
      Title: 'Explorations in Analytic Modeling',
      Instructor: 'Suzanne Shu (sbs78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3040',
      Title: 'Dairy Markets and Policy',
      Instructor: 'Suzanne Shu (sbs78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3060',
      Title:
        "Practitioner's Overview of Securities Markets and Asset Management",
      Instructor: 'Daniel Hooker (dwh22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3100',
      Title: 'Business Statistics',
      Instructor: 'Sarah Wolfolds (sew276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3110',
      Title: 'Design and Innovation',
      Instructor: 'Sarah Wolfolds (sew276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3120',
      Title: 'Topics in Brand Management',
      Instructor: 'Daniela Scur (ds2338)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3205',
      Title: 'Ethics in Business and Organizations',
      Instructor: 'Daniela Scur (ds2338)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3230',
      Title: 'Managerial Accounting',
      Instructor: 'Jim Stafford (jrs625)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3251',
      Title: 'The Business Laboratory and New Venture Management',
      Instructor: 'David Lennox (dpl29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3260',
      Title: 'Cooperative Business Management',
      Instructor: 'David Lennox (dpl29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3370',
      Title: 'Corporate Financial Reporting II',
      Instructor: 'James Stapp (jas926)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3385',
      Title: "Social Entrepreneurship Practicum: Anabel's Grocery",
      Instructor: 'James Stapp (jas926)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3400',
      Title: 'Marketing Analytics Immersion',
      Instructor: 'James Stapp (jas926)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3520',
      Title: 'Financial Statements Analysis',
      Instructor: 'Jim Stafford (jrs625)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3601',
      Title: 'Impact Learning: Project Reflection, Completion and Presentation',
      Instructor: 'Garrick Blalock (gb78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 3605',
      Title: 'BREXIT: UK Study Trip',
      Instructor: 'Garrick Blalock (gb78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4005',
      Title: 'Rating Nations: Economic Performance and Other Indicators',
      Instructor: 'Garrick Blalock (gb78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4010',
      Title: 'Organizational Analytics and Leadership',
      Instructor: 'Reza Moghimi (am2393)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4015',
      Title: 'Customer Analytics and Strategy',
      Instructor: 'Reza Moghimi (am2393)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4060',
      Title: 'Risk Simulation and Monte Carlo Methods',
      Instructor: 'Todd Gerarden (tdg48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4140',
      Title: 'Behavioral Economics and Managerial Decisions',
      Instructor: 'Sarah Chalmers (skc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4160',
      Title: 'Strategic Pricing',
      Instructor: 'Sarah Chalmers (skc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4190',
      Title: 'Strategic Thinking',
      Instructor: 'Sarah Chalmers (skc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4200',
      Title: 'Dilemmas in Founding New Ventures',
      Instructor: 'Sarah Chalmers (skc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4210',
      Title: 'Futures, Options and Financial Derivatives',
      Instructor: 'Sarah Chalmers (skc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4225',
      Title: 'Systems and Analytics in Accounting',
      Instructor: 'Sarah Chalmers (skc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4290',
      Title: 'International Financial Management',
      Instructor: 'Donna Haeger (dlh266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4315',
      Title: 'Economics of Developing Countries',
      Instructor: 'Christopher Wolf (caw364)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4350',
      Title: 'Political Economy of the WTO',
      Instructor: 'A.J. Edwards (aje45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4355',
      Title: 'Healthcare Entrepreneurship: Perspectives and Controversies',
      Instructor: 'Cindy Van Es (clv1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4410',
      Title: 'Marketing Research',
      Instructor: 'Denise Ramzy (djr278)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4421',
      Title: 'Research and Strategy in Emerging Markets',
      Instructor: 'Denise Ramzy (djr278)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4460',
      Title: 'Food Marketing Fellows',
      Instructor: 'Patti Mandel (prm34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4510',
      Title: 'Environmental Economics',
      Instructor: 'John Doris (jmd378)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4532',
      Title: 'Fraud Examination',
      Instructor: 'Eric Lewis (eel33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4534',
      Title: 'Federal Income Taxation of Real Estate Ventures',
      Instructor: 'Eric Lewis (eel33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4550',
      Title: 'Economics of Advertising',
      Instructor: 'Eric Lewis (eel33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4560',
      Title: 'Federal Income Taxation of Business Entities, Estates and Trusts',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4570',
      Title: 'Corporate Finance',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4590',
      Title: 'Financial Markets And Institutions',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4600',
      Title: 'Predictive Analytics for Business Strategy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4615',
      Title: 'Digital Platform Strategy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4630',
      Title: 'Asset Pricing and Portfolio Management',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4650',
      Title: 'Strategic Management of Technology and Innovation',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4660',
      Title: 'Business Simulation',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4661',
      Title:
        'Business Simulation Capstone for Business Minors in Life Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4670',
      Title: 'Investments',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4700',
      Title: 'Dyson Leadership Development Program',
      Instructor: 'Robert Karpman (rk395)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4940',
      Title: 'Undergraduate Special Topics in Applied Economics and Management',
      Instructor: 'Todd Schmit (tms1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4960',
      Title: 'Applied Economics and Management Internship',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4970',
      Title: 'Individual Study in Applied Economics and Management',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4980',
      Title: 'Supervised Teaching Experience',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4990',
      Title: 'Undergraduate Research',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 4992',
      Title: 'Undergraduate Accounting and Tax Research',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5040',
      Title: 'Dairy Markets and Policy',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5110',
      Title: 'Design and Innovation',
      Instructor: 'Anke Wessels (akw7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5210',
      Title: 'Business and Economics of Food',
      Instructor: 'Anke Wessels (akw7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5225',
      Title: 'Systems and Analytics in Accounting',
      Instructor: 'Jura Liaukonyte (jl2545)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5241',
      Title: 'Finance',
      Instructor: 'Daniel Hooker (dwh22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5260',
      Title: 'Cooperative Business Management',
      Instructor: 'Yao Lu (yl2269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5290',
      Title: 'International Financial Management',
      Instructor: 'Yao Lu (yl2269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5305',
      Title: 'Global Citizenship Seminar',
      Instructor: 'Cindy Van Es (clv1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5315',
      Title:
        'Leadership and Management in Global Environments and Organizations',
      Instructor: 'Terence Alexander (ta425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5410',
      Title: 'Marketing Research',
      Instructor: 'Terence Alexander (ta425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5421',
      Title: 'Research and Strategy in Emerging Markets',
      Instructor: 'Kaushik Basu (kb40)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5480',
      Title:
        'From Labels to Lab-Grown Meat: Consumer Behavior and the Food Industry',
      Instructor: 'Donna Haeger (dlh266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5510',
      Title: 'Environmental Economics',
      Instructor: 'Young-Hoon Park (yp34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5570',
      Title: 'Corporate Finance',
      Instructor: 'Young-Hoon Park (yp34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5605',
      Title: 'Predictive Analytics for Business Strategy',
      Instructor: 'Calum Turvey (cgt6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5615',
      Title: 'Digital Platform Strategy',
      Instructor: 'Geoffrey Fisher (gwf25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5650',
      Title: 'Strategic Management of Technology and Innovation',
      Instructor: 'Geoffrey Fisher (gwf25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5670',
      Title: 'Investments',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 5840',
      Title: 'Python Programming for Data Analysis and Business Modeling',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6050',
      Title: 'Agricultural Finance and Development',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6061',
      Title: 'Risk Simulation and Monte Carlo Methods',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6150',
      Title: 'Applied Behavioral Economics in Finance and Marketing',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6300',
      Title: 'Policy Analysis: Welfare Theory, Agriculture, and Trade',
      Instructor: 'Jura Liaukonyte (jl2545)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6410',
      Title: 'Commodity Futures and Options',
      Instructor: 'Nancy Chau (hyc3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6480',
      Title: 'Food and Consumer Packaged Goods Industry Dynamics',
      Instructor: 'Matt Marx (mtm83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6600',
      Title: 'Natural Resources and Economic Development',
      Instructor: 'Calum Turvey (cgt6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6620',
      Title: 'Development Economics',
      Instructor: 'Eric Lewis (eel33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6670',
      Title: 'Topics in Economic Development',
      Instructor: 'Eric Lewis (eel33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6940',
      Title: 'Graduate Special Topics in Applied Economics and Management',
      Instructor: 'Sumudu Watugala (sww63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6960',
      Title: 'Perspectives in Global Development',
      Instructor: 'Brian Dillon (bmd28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6980',
      Title: 'Supervised Graduate Teaching Experience',
      Instructor: 'Harry de Gorter (hd15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6990',
      Title: 'M.P.S. Research',
      Instructor: 'Robert Karpman (rk395)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6992',
      Title: 'MPS Research Seminar II',
      Instructor: 'Geoffrey Fisher (gwf25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 6993',
      Title: 'CEMS Masters in International Management Project',
      Instructor: 'Fridah Mubichi-Kut (mfm96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7000',
      Title: 'Individual Study in Applied Economics and Management',
      Instructor: 'Daniel Hooker (dwh22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7020',
      Title: 'Applied Microeconomics II: Game Theory',
      Instructor: 'Ivan Rudik (ir229)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7021',
      Title: 'Applied Microeconomics III: Applied General Equilibrium Analysis',
      Instructor: 'Marquise Riley (msr259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7030',
      Title: 'Graduate Seminar',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7100',
      Title: 'Econometrics I',
      Instructor: 'Jura Liaukonyte (jl2545)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7151',
      Title: 'Applied Microeconomic Research II',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7350',
      Title: 'Public Finance: Resource Allocation and Fiscal Policy',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7500',
      Title: 'Resource Economics',
      Instructor: 'Scott Yonker (sey8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7620',
      Title: 'Microeconomics of International Development',
      Instructor: 'Scott Yonker (sey8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7650',
      Title: 'Development Microeconomics Graduate Research Seminar',
      Instructor: 'Peter Cziraki (pc567)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7852',
      Title:
        'Sustainable Environment, Energy and Resource Economics Research Seminar',
      Instructor: 'Chris Forman (cmf257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 7900',
      Title: 'Graduate-Level Thesis Research',
      Instructor: 'Chris Forman (cmf257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 8900',
      Title: "Master's Level Thesis Research",
      Instructor: 'Chris Forman (cmf257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEM 9900',
      Title: 'Doctoral-Level Thesis Research',
      Instructor: 'Chris Forman (cmf257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 1100',
      Title: 'Lasers and Photonics',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 2170',
      Title: 'Physics II: Electricity and Magnetism',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 2550',
      Title: 'Engineering Quantum Information Hardware',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 3200',
      Title: 'Introductory Mathematical Physics',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 3550',
      Title: 'Intermediate Electromagnetism',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 3620',
      Title: 'Intermediate Quantum Mechanics',
      Instructor: 'Chris Xu (cx10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 3630',
      Title: 'Electronic Circuits',
      Instructor: 'Chris Xu (cx10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 4340',
      Title: 'Fluid and Continuum Mechanics',
      Instructor: 'Chris Xu (cx10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 4400',
      Title: 'Nonlinear and Quantum Optics',
      Instructor: 'Chris Xu (cx10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 4450',
      Title: 'Electromagnetic and Optical Metamaterials',
      Instructor: 'Gregory Fuchs (gdf9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 4840',
      Title: 'Introduction to Controlled Fusion: Principles and Technology',
      Instructor: 'Bruce Kusse (brk2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 4900',
      Title: 'Independent Study in Engineering Physics',
      Instructor: 'Bruce Kusse (brk2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 4910',
      Title: 'Independent Study for Honors',
      Instructor: 'Lois Pollack (lp26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5100',
      Title: 'Introductory Mathematical Physics',
      Instructor: 'Lois Pollack (lp26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5340',
      Title: 'Fluid and Continuum Mechanics',
      Instructor: 'Frank Wise (fww1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5400',
      Title: 'Nonlinear and Quantum Optics',
      Instructor: 'Frank Wise (fww1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5500',
      Title: 'Applied Solid State: Physics of Renewable Energy',
      Instructor: 'Earl Kirkland (ejk14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5510',
      Title: 'Symmetry in Materials Physics',
      Instructor: 'Earl Kirkland (ejk14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5550',
      Title: 'Intermediate Electromagnetism',
      Instructor: 'Earl Kirkland (ejk14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 5620',
      Title: 'Intermediate Quantum Mechanics',
      Instructor: 'Lisa Wickham (lw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 7510',
      Title: 'M.Eng. Project',
      Instructor: 'Lisa Wickham (lw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 7540',
      Title: 'Special Topics in Applied Physics',
      Instructor: 'Jeffrey Moses (jam262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AEP 8200',
      Title: 'Graduate Thesis',
      Instructor: 'Francesco Monticone (fm428)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AGSCI 4960',
      Title: 'Internship in Agricultural Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 1110',
      Title: 'Indigenous Issues in Global Perspectives',
      Instructor: 'Troy Richardson (tar37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 1123',
      Title: 'FWS: The Rights of Indigenous Peoples in International Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 2720',
      Title: 'From the Swampy Land: Indigenous People of the Ithaca Area',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 3325',
      Title: 'Cayuga Language and Culture II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 4000',
      Title:
        'Critical Approaches to American Indian and Indigenous Studies: Intellectual History',
      Instructor: 'Urszula Piasta-Mansfield (ump4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 4970',
      Title: 'Independent Study',
      Instructor: 'Kurt Jordan (kj21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 6000',
      Title:
        'Critical Approaches to American Indian and Indigenous Studies: Intellectual History',
      Instructor: 'Jessica Martin (jlm556)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIIS 6970',
      Title: 'Independent Study in American Indian and Indigenous Studies',
      Instructor: 'Troy Richardson (tar37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 1102',
      Title: 'Heritage and Values of the United States Air Force II',
      Instructor: 'Philipp Wittmaack (pmw222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 1142',
      Title: 'Initial Military Experiences II',
      Instructor: 'Steven Lane (stl54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 2202',
      Title: 'Team and Leadership Fundamentals II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 2242',
      Title: 'Intermediate Military Experiences II',
      Instructor: 'Steven Lane (stl54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 3302',
      Title: 'Leading People and Effective Communication II',
      Instructor: 'Steven Lane (stl54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 3342',
      Title: 'Junior Officer Leadership Experiences II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AIRS 4442',
      Title: 'Precommissioning Laboratory',
      Instructor: 'Steven Lane (stl54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AKKAD 1411',
      Title: 'Elementary Akkadian II: Historical and Literary Texts',
      Instructor: 'Christopher Monroe (cmm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AKKAD 6411',
      Title: 'Elementary Akkadian II: Historical and Literary Texts',
      Instructor: 'Christopher Monroe (cmm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 1100',
      Title: "Veteran's Seminar",
      Instructor: 'Mary Fisk (mmf248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 1200',
      Title: "Information Chaos: Navigating Today's Information Landscape",
      Instructor: 'Ashley Shea (ald52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 2300',
      Title: 'CALS Global Fellows Program Pre-engagement Course',
      Instructor: 'Jessica Hawkey (jh2652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 2400',
      Title: 'Developing a Reflective Tutoring Practice',
      Instructor: 'Barbara Oh (yo56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 3920',
      Title: 'New York State Government Affairs',
      Instructor: 'Barbara Oh (yo56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 4100',
      Title: 'Community-Based Research in DC',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 4200',
      Title: 'Immersion and Engagement in DC',
      Instructor: 'Katie Beem (klb297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 4960',
      Title: 'Internship in Agriculture and Life Sciences',
      Instructor: 'Katie Beem (klb297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 4970',
      Title: 'Independent Study in Agriculture and Life Sciences',
      Instructor: 'Katie Beem (klb297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 4980',
      Title: 'Undergraduate Teaching Assistant',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 4990',
      Title: 'Undergraduate Research in Agriculture and Life Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 5211',
      Title:
        "Career Readiness: Engaged Learning for CALS Professional Master's Students",
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 5780',
      Title: 'International Teaching Assistant Program Course',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 5790',
      Title: 'International Teaching Assistant Development Program Course II',
      Instructor: 'Marjorie Mosereiff (mm2478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 5900',
      Title: "Project Development: CALS Professional Master's Programs",
      Instructor: 'Derina Samuel (dss279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 5910',
      Title: "Project Completion: CALS Professional Master's Programs",
      Instructor: 'Derina Samuel (dss279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ALS 6015',
      Title: 'The Practice of Teaching in Higher Education',
      Instructor: 'Derina Samuel (dss279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 1101',
      Title: 'Introduction to American Studies',
      Instructor: 'Adrienne Bitar (arj67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 1500',
      Title: 'Introduction to Africana Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 1540',
      Title: 'American Capitalism',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 1601',
      Title: 'Indigenous Issues in Global Perspectives',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 1820',
      Title: 'U.S. Borders, North and South',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 1951',
      Title: 'Foreign Policy as Subversion',
      Instructor: 'Olufemi Taiwo (ot48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2000',
      Title: 'Introduction to Visual Studies',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2001',
      Title: 'The First American University',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2092',
      Title:
        'A History of Human Trafficking in the Atlantic World, ca. 1400-1800',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2106',
      Title: 'Introduction to Latinx Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2152',
      Title: '(Im)migration and (Im)migrants: Then and Now',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2160',
      Title: 'Television',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2354',
      Title: 'African American Visions of Africa',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2391',
      Title:
        'From Terra Incognita to Territories of Nation-States: Early American History in Two Dozen Maps',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2460',
      Title: 'Contemporary Narratives by Latina Writers',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2512',
      Title: 'Black Women in the 20th Century',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2581',
      Title: 'Environmental History',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2620',
      Title: 'Introduction to Asian American Literature',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2675',
      Title: 'Cultures of the Cold War',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'Troy Richardson (tar37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2722',
      Title: 'History of Mental Health and Mental Illness in the United States',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2729',
      Title: 'From the Swampy Land: Indigenous People of the Ithaca Area',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2735',
      Title: "Children's Literature",
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2751',
      Title: 'Introduction to Humanities',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 2790',
      Title: 'Jewish Films and Filmmakers: Hollywood and Beyond',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3071',
      Title: 'Enduring Global and American Issues',
      Instructor: 'Maria Cristina Garcia (mcg20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3072',
      Title: 'The U.S. Constitution: Crisis, Change and Legitimacy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3122',
      Title: 'Democracy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3131',
      Title: 'The Nature, Functions, and Limits of Law',
      Instructor: 'Tamara Loos (tl14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3185',
      Title: 'Living in an Uncertain World: Science, Technology, and Risk',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3262',
      Title: 'The US Regime in Comparative and Historical Perspective',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3355',
      Title: 'Beyoncé Nation: The Remix',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3370',
      Title: 'Contemporary American Theatre on Stage and Screen',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3401',
      Title: 'The Whites are Here to Stay: US-Africa Policy from Nixon to Date',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3404',
      Title: 'A Maritime History of Early America, ca. 1450-1850',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3405',
      Title: 'Multicultural Issues in Education',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3442',
      Title:
        'Merchants, Whalers, Pirates, Sailors: American Maritime Literature from the 19th Century and Beyond',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3581',
      Title: 'Imagining Migration in Film and Literature',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3616',
      Title: 'Podcast, Radio, Gramophone: Literary Technologies of Sound',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3617',
      Title: 'Cornell Hip-Hop Collective',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3625',
      Title: 'Frederick Douglass and Frances E.W. Harper',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3661',
      Title: 'Reading the Nineteenth-Century American Novel',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3675',
      Title: 'The Environmental Imagination in American Literature',
      Instructor: 'Corey Earle (cre8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3703',
      Title: 'Asians in the Americas: A Comparative Perspective',
      Instructor: 'Casey Schmitt (cs2437)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3732',
      Title: 'Africans and African Americans in Literature',
      Instructor: 'John Kennedy (jwk258)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3734',
      Title: 'Whiteness in Literature and Popular Culture',
      Instructor: 'Sergio Garcia-Rios (sig35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3870',
      Title: 'The History of Consumption: From Wedgwood to Wal-Mart',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3980',
      Title: 'Independent Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 3990',
      Title: 'Readings in American Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4002',
      Title: 'Diasporic and Indigenous Health',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4021',
      Title: 'American Conservative Thought',
      Instructor: 'Nick Salvato (ngs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4022',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Russell Rickford (rr447)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4051',
      Title: 'Death Penalty in America',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4066',
      Title: 'Technological Change at Work',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4113',
      Title: 'August Wilson: the Cycle of Black Life',
      Instructor: 'Tamika Nunley (tyn4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4550',
      Title: 'Race and the University',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4603',
      Title: 'Black Speculative Fiction',
      Instructor: 'Aaron Sachs (as475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4615',
      Title:
        'Lovecraft Country: Blackness, Indigeneity, and Literary Racial Speculation',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4705',
      Title: 'Nightlife',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4757',
      Title: 'Be a Man! Masculinity, Race, and Nation',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4851',
      Title: 'Refugees',
      Instructor: 'Sunn Wong (ssw6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 4994',
      Title: 'Honors Essay Tutorial II',
      Instructor: 'Jeremy Braddock (jb358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 5710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6003',
      Title: 'Doing Research With Marginalized Populations',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6022',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6202',
      Title: 'Political Culture',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6338',
      Title: 'Public Humanities',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6615',
      Title: 'Disobedience, Resistance, Refusal',
      Instructor: 'Stephen Vider (sv484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6703',
      Title: 'Asians in the Americas: A Comparative Perspective',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AMST 6809',
      Title: 'Urban Justice',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 1105',
      Title: 'Careers in Animal Science',
      Instructor: 'Debbie Cherney (djc6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 2000',
      Title: 'Sustainable Food & Companion Animal Systems and Perspectives',
      Instructor: 'Nathalie Trottier (nlt35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 2100',
      Title: 'Practical Large Animal Handling',
      Instructor: 'Jessica Waltemyer (jrk272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 2210',
      Title: 'Principles of Animal Genetics',
      Instructor: 'Jessica Waltemyer (jrk272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 2400',
      Title: 'Biology of Reproduction',
      Instructor: 'Heather Huson (hjh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 2410',
      Title: 'Biology of Reproduction Lab',
      Instructor: 'Heather Huson (hjh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 2500',
      Title: 'Dairy Cattle Principles',
      Instructor: 'Heather Huson (hjh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3300',
      Title: 'Fish Physiology',
      Instructor: 'Heather Huson (hjh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3400',
      Title: 'Comparative Mammalian Reproduction',
      Instructor: 'Jeremy Allen (jja63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3410',
      Title: 'Biology of the Mammary Gland in Health and Disease',
      Instructor: 'Jeremy Allen (jja63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3450',
      Title: 'Reproductive Physiology and Management of Dairy Cattle',
      Instructor: 'Jeremy Allen (jja63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3510',
      Title: 'Dairy Herd Management',
      Instructor: 'Blake Nguyen (btn26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3511',
      Title: 'Junior Dairy Fellows',
      Instructor: 'Blake Nguyen (btn26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3550',
      Title: 'Dairy Cattle Nutrition',
      Instructor: 'Eugene Won (etw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3600',
      Title: 'Beef Cattle',
      Instructor: 'Susan Quirk (smq1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3700',
      Title: 'Immunology in Animal Health and Disease',
      Instructor: 'Yves Boisclair (yrb1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 3900',
      Title: 'Animal Welfare Science Journal Club',
      Instructor: 'Julio Giordano (jog25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4020',
      Title: 'Seminar in Animal Sciences',
      Instructor: 'Julio Giordano (jog25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4120',
      Title: 'Whole-Farm Nutrient Management',
      Instructor: 'Julio Giordano (jog25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4140',
      Title: 'Ethics and Animal Science',
      Instructor: 'Julio Giordano (jog25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4280',
      Title: 'Comparative Nutrition of the Horse and Pig',
      Instructor: 'Mike Van Amburgh (mev1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4290',
      Title: 'Current Topics in Cat and Dog Nutrition',
      Instructor: 'Thomas Overton (tro2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4410',
      Title: 'Nutritional Physiology and Biochemistry',
      Instructor: 'Thomas Overton (tro2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4560',
      Title: 'Dairy Management Fellowship',
      Instructor: 'Michael Baker (mjb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4940',
      Title: 'Special Topics in Animal Science',
      Instructor: 'Michael Baker (mjb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4960',
      Title: 'Internship in Animal Science',
      Instructor: 'Lindsay Goodale (lfg28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4970',
      Title: 'Individual Study in Animal Science',
      Instructor: 'Lindsay Goodale (lfg28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4980',
      Title: 'Undergraduate Teaching in Animal Science',
      Instructor: 'Susan Quirk (smq1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 4990',
      Title: 'Undergraduate Research in Animal Science',
      Instructor: 'Mike Van Amburgh (mev1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5140',
      Title: 'Ethics and Animal Science',
      Instructor: 'Mike Van Amburgh (mev1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5210',
      Title: 'Principles of Animal Genetics',
      Instructor: 'Debbie Cherney (djc6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5300',
      Title: 'Fish Physiology',
      Instructor: 'Debbie Cherney (djc6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5410',
      Title: 'Biology of the Mammary Gland in Health and Disease',
      Instructor: 'Nathalie Trottier (nlt35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5450',
      Title: 'Reproductive Physiology and Management of Dairy Cattle',
      Instructor: 'Nathalie Trottier (nlt35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5510',
      Title: 'Dairy Herd Management',
      Instructor: 'Nathalie Trottier (nlt35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5550',
      Title: 'Dairy Cattle Nutrition',
      Instructor: 'Joseph McFadden (jwm43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 5900',
      Title: 'Animal Welfare Science Journal Club',
      Instructor: 'Mike Van Amburgh (mev1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6120',
      Title: 'Whole-Farm Nutrient Management',
      Instructor: 'Mike Van Amburgh (mev1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6190',
      Title: 'Division of Nutritional Sciences Seminar',
      Instructor: 'Mike Van Amburgh (mev1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6220',
      Title: 'Graduate Student Research Updates',
      Instructor: 'Bruce Berggren-Thomas (bb66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6280',
      Title: 'Comparative Nutrition of the Horse and Pig',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6290',
      Title: 'Current Topics in Cat and Dog Nutrition',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6400',
      Title: 'Graduate-Level Individual Study in Animal Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6410',
      Title: 'Nutritional Physiology and Biochemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 6700',
      Title: 'Immunology in Animal Health and Disease',
      Instructor: 'Debbie Cherney (djc6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 7900',
      Title: 'Graduate-Level Thesis Research',
      Instructor: 'Debbie Cherney (djc6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 8900',
      Title: "Master's Level Thesis Research",
      Instructor: 'Heather Huson (hjh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANSC 9900',
      Title: 'Doctoral-Level Thesis Research',
      Instructor: 'Heather Huson (hjh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 1101',
      Title: 'FWS: Culture, Society, and Power',
      Instructor: 'Stacey Langwick (sal54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 1300',
      Title: 'Human Evolution: Genes, Behavior, and the Fossil Record',
      Instructor: 'Karlie Fox-Knudtsen (kf273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 1520',
      Title: 'Tamil Conversation in Context',
      Instructor: 'Amir Mohamed (am2456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2201',
      Title: 'Early Agriculture',
      Instructor: 'Simon Posner (sdp83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2285',
      Title: 'Egyptomania? Egypt and the Greco-Roman World',
      Instructor: 'Adam Arcadi (apc13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2400',
      Title: 'Cultural Diversity and Contemporary Issues',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2440',
      Title: 'The Social Life of Money',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2465',
      Title: 'Global Heritage',
      Instructor: 'Andrew Willford (acw24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2468',
      Title: 'Medicine, Culture, and Society',
      Instructor: 'Nerissa Russell (nr29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2720',
      Title: 'From the Swampy Land: Indigenous People of the Ithaca Area',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 2846',
      Title: 'Magic and Witchcraft in the Greco-Roman World',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3042',
      Title: 'Paleoethnobotany',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3235',
      Title: 'Bioarchaeology',
      Instructor: 'Magnus Fiskesjo (nf42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3245',
      Title:
        'Across the Seas: Contacts between the Americas and the Old World Before Columbus',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3255',
      Title: 'Ancient Mexico and Central America',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3325',
      Title: 'Food and Work',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3390',
      Title: 'Primate Behavior and Ecology with Emphasis on African Apes',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3405',
      Title: 'Multicultural Issues in Education',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3487',
      Title: 'Racial Capitalism',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3703',
      Title: 'Asians in the Americas: A Comparative Perspective',
      Instructor: 'Amiel Bize (abm252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 3950',
      Title: 'Humanities Scholars Research Methods',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4222',
      Title: 'Archaeological Ethics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4240',
      Title: 'Collecting Culture: Museums and Anthropology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4250',
      Title: 'Archaeological Research Design',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4264',
      Title: 'Zooarchaeological Interpretation',
      Instructor: 'Adam Smith (ats73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4401',
      Title: 'Advanced Documentary Production',
      Instructor: 'Alex Nading (amn242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4437',
      Title: 'Ethnographies of Development',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4470',
      Title: 'Race and Justice After DNA',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4478',
      Title: 'Taboo and Pollution',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4520',
      Title:
        'Society and Culture in the Nilgiris: Engaged Research in Rural South India',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4725',
      Title: 'American Indian Lands and Sovereignties',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4910',
      Title: 'Independent Study: Undergrad I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4920',
      Title: 'Independent Study: Undergrad II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4984',
      Title: 'Honors Thesis Write-Up',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 4992',
      Title: 'Honors Workshop II',
      Instructor: 'Kurt Jordan (kj21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6025',
      Title: 'Proseminar in Anthropology',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6042',
      Title: 'Paleoethnobotany',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6101',
      Title: 'Sense, Movement, Sociality',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6102',
      Title: 'Political Culture',
      Instructor: 'Maia Dedrick (mcd225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6235',
      Title: 'Bioarchaeology',
      Instructor: 'Maia Dedrick (mcd225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6245',
      Title:
        'Across the Seas: Contacts between the Americas and the Old World Before Columbus',
      Instructor: 'Matthew Velasco (mcv47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6250',
      Title: 'Archaeological Research Design',
      Instructor: 'John Henderson (jsh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6255',
      Title: 'Ancient Mexico and Central America',
      Instructor: 'John Henderson (jsh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6440',
      Title: 'Proposal Development',
      Instructor: 'Sarah Besky (sb2626)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6487',
      Title: 'Racial Capitalism',
      Instructor: 'Adam Arcadi (apc13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 6703',
      Title: 'Asians in the Americas: A Comparative Perspective',
      Instructor: 'Sofia Villenas (sav33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7222',
      Title: 'Archaeological Ethics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7240',
      Title: 'Collecting Culture: Museums and Anthropology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7264',
      Title: 'Zooarchaeological Interpretation',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7401',
      Title: 'Advanced Documentary Production',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7437',
      Title: 'Ethnographies of Development',
      Instructor: 'Amiel Bize (abm252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7470',
      Title: 'Race and Justice After DNA',
      Instructor: 'Viranjini Munasinghe (vpm1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7478',
      Title: 'Taboo and Pollution',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7520',
      Title: 'Southeast Asia: Readings in Special Problems',
      Instructor: 'Lori Khatchadourian (lk323)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7530',
      Title: 'South Asia: Readings in Special Problems',
      Instructor: 'Frederic Gleach (fwg1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7540',
      Title: 'Problems in Himalayan Studies',
      Instructor: 'Adam Smith (ats73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7550',
      Title: 'East Asia: Readings in Special Problems',
      Instructor: 'Nerissa Russell (nr29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7725',
      Title: 'American Indian Lands and Sovereignties',
      Instructor: 'Natasha Raheja (nr446)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7900',
      Title: 'Department of Anthropology Colloquium',
      Instructor: 'Marina Welker (maw82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7910',
      Title: 'Independent Study: Grad I',
      Instructor: 'Noah Tamarkin (nt383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7920',
      Title: 'Independent Study: Grad II',
      Instructor: 'Magnus Fiskesjo (nf42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ANTHR 7930',
      Title: 'Independent Study: Grad III',
      Instructor: 'Andrew Willford (acw24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARAB 1202',
      Title: 'Elementary Arabic II',
      Instructor: 'Abdel-Fattah Shahda (as3859)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARAB 2202',
      Title: 'Intermediate Arabic II',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARAB 2204',
      Title: 'Introduction to Quranic Arabic',
      Instructor: 'Abdel-Fattah Shahda (as3859)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARAB 3202',
      Title: 'Advanced Arabic II',
      Instructor: 'Bilal Al-Omar (bma57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARAB 4203',
      Title: 'Current Events in Arabic Media',
      Instructor: 'Bilal Al-Omar (bma57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARAB 5510',
      Title: 'Graduate Studies in Arabic',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 1102',
      Title: 'Design II',
      Instructor: 'Sasa Zivkovic (sz382)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 1502',
      Title: 'Representation II: Media of Representation',
      Instructor: 'Mustafa Faruki (maf359)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 1612',
      Title: 'Structural Concepts',
      Instructor: 'Mark Cruvellier (mrc14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 1802',
      Title: 'History of Architecture II',
      Instructor: 'Maria Gonzalez Pendas (mg995)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 1901',
      Title: 'FWS: Topics in Architecture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 2102',
      Title: 'Design IV',
      Instructor: 'Maria Gonzalez Pendas (mg995)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 2615',
      Title: 'Building Technology II: Structural Elements',
      Instructor: 'Maria Gonzalez Pendas (mg995)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 2616',
      Title: 'Environmental Systems II: Building Dynamics',
      Instructor: 'Maria Gonzalez Pendas (mg995)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3101',
      Title: 'Design V',
      Instructor: 'Maria Gonzalez Pendas (mg995)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3102',
      Title: 'Design VI',
      Instructor: 'Ecem Saricayir (es939)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3117',
      Title: 'Contemporary Italian Culture - Italian Cinema',
      Instructor: 'Michael Jefferson (mnj23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3197',
      Title: 'Special Investigations in Architectural Design',
      Instructor: 'Marta H. Wisniewska (mh2226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3308',
      Title: 'Special Topics in the Theory of Architecture I',
      Instructor: 'Jonathan Ochshorn (jo24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3397',
      Title: 'Special Investigations in the Theory of Architecture I',
      Instructor: 'Timur Dogan (tkd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3497',
      Title: 'Special Investigations in Architecture, Culture, and Society',
      Instructor: 'Suzanne Lettieri (stl27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3819',
      Title: 'Special Topics in the History of Architecture and Urbanism',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3820',
      Title:
        'The Topography and Urban History of Rome in Antiquity and the Middle Ages',
      Instructor: 'Suzanne Lettieri (stl27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3823',
      Title:
        'Urban Design, Architecture, and Art in Renaissance and Baroque Rome',
      Instructor: 'Mustafa Faruki (maf359)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 3897',
      Title: 'Special Investigations in History of Architecture and Urbanism',
      Instructor: 'Carolina Ciampaglia (cc863)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4101',
      Title: 'Design VII',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4102',
      Title: 'Design VIII',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4408',
      Title: 'Special Topics in Architecture, Culture, and Society',
      Instructor: 'Anna Dietzsch (ajd293)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4508',
      Title: 'Special Investigations in Visual Representation',
      Instructor: 'Michael Jefferson (mnj23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4509',
      Title: 'Special Topics in Visual Representation I',
      Instructor: 'Gregory Keeffe (gpk44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4601',
      Title: 'Ecological Literacy and Design',
      Instructor: 'Farzin Lotfi-Jam (fl385)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4605',
      Title: 'Special Topics in Construction',
      Instructor: 'Johanna Hurme (jrh368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4697',
      Title: 'Special Investigations in Construction',
      Instructor: 'Johanna Hurme (jrh368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4698',
      Title: 'Special Investigations in Environmental Systems and Conservation',
      Instructor: 'Curt Gambetta (cag289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 4699',
      Title: 'Special Investigations in Structures',
      Instructor: 'Valerio Mosco (vpm27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5101',
      Title: 'Design IX',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5112',
      Title: 'Core Design Studio II: Relational and Ecological Design',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5114',
      Title: 'Core Design Studios IV: Integrative Design Practices',
      Instructor: 'Ioanna Theocharopoulou (it79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5115',
      Title: 'Core Design Studios V: Expanded Practices',
      Instructor: 'Esra Akcan (ea369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5116',
      Title: 'Vertical Design Studio',
      Instructor: 'Jan Gadeyne (jg385)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5201',
      Title: 'Professional Practice',
      Instructor: 'Jeffrey Blanchard (jnb10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5203',
      Title: 'Multicultural Work Environments',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5204',
      Title: 'Professional Training',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5302',
      Title: 'Theories and Analyses of Architecture II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5512',
      Title: 'Constructed Drawing II: Digital Representation and Fabrication',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5612',
      Title: 'Structural Concepts',
      Instructor: 'Val Warke (vkw1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5615',
      Title: 'Building Technology II: Structural Elements',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5616',
      Title: 'Environmental Systems II: Building Dynamics',
      Instructor: 'Anna Dietzsch (ajd293)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5802',
      Title: 'History of Architecture II',
      Instructor: 'Michael Jefferson (mnj23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5819',
      Title: 'Special Topics in the History of Architecture and Urbanism',
      Instructor: 'Esra Akcan (ea369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 5902',
      Title: 'Design X Thesis',
      Instructor: 'Ioanna Theocharopoulou (it79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6109',
      Title: 'Special Problems in Design',
      Instructor: 'Gregory Keeffe (gpk44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6307',
      Title: 'Special Investigations in the Theory of Architecture II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6308',
      Title: 'Special Topics in the Theory of Architecture II',
      Instructor: 'Jesse LeCavalier (jwl283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6408',
      Title: 'Special Topics in Architecture, Culture, and Society',
      Instructor: 'Luben Dimcheff (ldd4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6409',
      Title: 'Graduate Investigations in Architecture, Culture, and Society',
      Instructor: 'Tom Carruthers (tbc39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6508',
      Title: 'Special Investigations in Visual Representation II',
      Instructor: 'Donald Greenberg (dpg5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6509',
      Title: 'Special Topics in Visual Representation II',
      Instructor: 'Panagiotis Michalatos (pm586)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6605',
      Title: 'Special Topics in Construction',
      Instructor: 'Johanna Hurme (jrh368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6609',
      Title: 'Special Investigations in Structures',
      Instructor: 'Michael Jefferson (mnj23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 6819',
      Title:
        'Seminar in Special Topics in the History of Architecture and Urbanism',
      Instructor: 'Leslie Lok (wll36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 7112',
      Title: 'Design B: Topic Studio',
      Instructor: 'Dillon Pranger (drp94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 7152',
      Title: 'Design Topic Research Studio 2: Matter Design Computation',
      Instructor: 'Pablo Sequero Barrera (ps784)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 7809',
      Title:
        'Graduate Independent Study in the History of Architecture and Urbanism',
      Instructor: 'John Elliott (jre15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 7903',
      Title: 'Thesis or Research in Architectural Science',
      Instructor: 'Johanna Hurme (jrh368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8903',
      Title: 'Projects in Advanced Architectural Design',
      Instructor: 'Gregory Keeffe (gpk44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8904',
      Title: 'Independent Design Thesis',
      Instructor: 'Leslie Lok (wll36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8905',
      Title: 'Independent Design Thesis: Matter Design Computation',
      Instructor: 'Dillon Pranger (drp94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8906',
      Title: 'Thesis in Advanced Architectural Design I',
      Instructor: 'Jenny Sabin (jes557)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8907',
      Title: 'Thesis in Advanced Architectural Design II',
      Instructor: 'Marta H. Wisniewska (mh2226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8911',
      Title: 'Proseminar in Design Research',
      Instructor: 'Sasa Zivkovic (sz382)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 8912',
      Title: 'Independent Design Thesis',
      Instructor: 'Christopher Battaglia (cab523)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARCH 9901',
      Title: 'Ph.D. Dissertation in the History of Architecture and Urbanism',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2201',
      Title: 'Early Agriculture',
      Instructor: 'Nerissa Russell (nr29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2271',
      Title: 'The Aegean and East Mediterranean Bronze Age c. 3000-1000 BCE',
      Instructor: 'Sturt Manning (sm456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2285',
      Title: 'Egyptomania? Egypt and the Greco-Roman World',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2465',
      Title: 'Global Heritage',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2668',
      Title: 'Ancient Egyptian Civilization',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2712',
      Title: 'The Ancient Economy',
      Instructor: 'Adam Smith (ats73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2720',
      Title: 'From the Swampy Land: Indigenous People of the Ithaca Area',
      Instructor: 'Christopher Monroe (cmm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2812',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: 'Astrid Van Oyen (av475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 2846',
      Title: 'Magic and Witchcraft in the Greco-Roman World',
      Instructor: 'Kurt Jordan (kj21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3000',
      Title:
        'Undergraduate Independent Study in Archaeology and Related Fields',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3042',
      Title: 'Paleoethnobotany',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3225',
      Title: 'Archaic and Classical Greece',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3235',
      Title: 'Bioarchaeology',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3245',
      Title:
        'Across the Seas: Contacts between the Americas and the Old World Before Columbus',
      Instructor: 'Annetta Alexandridis (aa376)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3255',
      Title: 'Ancient Mexico and Central America',
      Instructor: 'Benjamin Anderson (bwa32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 3738',
      Title: 'Identity in the Ancient World',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4222',
      Title: 'Archaeological Ethics',
      Instructor: 'Sherene Baugher (sbb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4240',
      Title: 'Collecting Culture: Museums and Anthropology',
      Instructor: 'Ananda Cohen-Aponte (aic42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4250',
      Title: 'Archaeological Research Design',
      Instructor: 'Magnus Fiskesjo (nf42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4264',
      Title: 'Zooarchaeological Interpretation',
      Instructor: 'Frederic Gleach (fwg1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Kathryn Gleason (klg16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4981',
      Title: 'Honors Thesis Research',
      Instructor: 'John Henderson (jsh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 4982',
      Title: 'Honors Thesis Write-Up',
      Instructor: 'Kurt Jordan (kj21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6000',
      Title: 'Graduate Independent Study in Archaeology',
      Instructor: 'Lori Khatchadourian (lk323)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6042',
      Title: 'Paleoethnobotany',
      Instructor: 'Sturt Manning (sm456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6100',
      Title: 'The Craft of Archaeology',
      Instructor: 'Christopher Monroe (cmm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6235',
      Title: 'Bioarchaeology',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6245',
      Title:
        'Across the Seas: Contacts between the Americas and the Old World Before Columbus',
      Instructor: 'Verity Platt (vjp33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6250',
      Title: 'Archaeological Research Design',
      Instructor: 'Eric Rebillard (er97)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6255',
      Title: 'Ancient Mexico and Central America',
      Instructor: 'Nerissa Russell (nr29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Adam Smith (ats73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 6838',
      Title: 'Identity in the Ancient World',
      Instructor: 'Barry Strauss (bss4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 7222',
      Title: 'Archaeological Ethics',
      Instructor: 'Thomas Volman (tpv1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 7240',
      Title: 'Collecting Culture: Museums and Anthropology',
      Instructor: 'Denise Green (dng22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 7264',
      Title: 'Zooarchaeological Interpretation',
      Instructor: 'Astrid Van Oyen (av475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 7271',
      Title: 'The Aegean and East Mediterranean Bronze Age c. 3000-1000 BCE',
      Instructor: 'Matthew Velasco (mcv47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARKEO 8902',
      Title: "Master's Thesis",
      Instructor: 'Maia Dedrick (mcd225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 1201',
      Title: 'Painting for Non-Majors',
      Instructor: 'Carl Ostendarp (cao24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 1504',
      Title: 'Introduction to Drawing in Rome',
      Instructor: 'Luca Padroni (lp388)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 1601',
      Title: 'Photography for Non-Majors',
      Instructor: 'Nidaa Aboulhosn (na525)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 1602',
      Title: 'Introduction to Photography in Rome',
      Instructor: 'Nidaa Aboulhosn (na525)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 2201',
      Title: 'Painting: Introduction to Painting',
      Instructor: 'Liana Miuccio (lm248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 2301',
      Title: 'Print Media: Introduction to Print Media',
      Instructor: 'Leslie Brack (lb624)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 2401',
      Title: 'Introduction to Sculpture',
      Instructor: 'Carl Ostendarp (cao24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 2503',
      Title: 'Drawing: Introduction to Drawing',
      Instructor: 'Julianne Hunter (jth259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 2601',
      Title: 'Photography: Introduction to Photography',
      Instructor: 'Roberto Bertoia (rgb4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 2701',
      Title: 'Digital Media: Introduction to Digital Media',
      Instructor: 'Joanna Malinowska (jmm828)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3003',
      Title: 'New York City Studio',
      Instructor: 'Mara Baldwin (mmb44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3006',
      Title: 'Advanced Practice',
      Instructor: 'Dan Torop (dat247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3091',
      Title: 'Directed Readings in Art',
      Instructor: 'Mark Grimm (meg364)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3092',
      Title: 'Independent Studio in Art',
      Instructor: 'Oasa DuVerney-Gaspar (od68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3093',
      Title: 'Directed Research in Art',
      Instructor: 'Oasa DuVerney-Gaspar (od68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3103',
      Title: 'New York City Seminar',
      Instructor: 'Elisabeth Meyer (ehm2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3299',
      Title: 'Painting: Special Topics',
      Instructor: 'Joanna Malinowska (jmm828)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3399',
      Title: 'Print Media: Special Topics',
      Instructor: 'Michael Ashkin (ma352)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3499',
      Title: 'Sculpture: Special Topics',
      Instructor: 'Michael Ashkin (ma352)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3699',
      Title: 'Photography: Special Topics',
      Instructor: 'Leslie Brack (lb624)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3799',
      Title: 'Digital Media: Special Topics',
      Instructor: 'Paul Ramirez Jonas (par237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3803',
      Title: 'Art History: Italian Cinema',
      Instructor: 'Roberto Bertoia (rgb4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3805',
      Title: 'Interdisciplinary Perspectives on Metropolitan Studies',
      Instructor: 'Renate Ferro (rtf9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 3903',
      Title: 'NYC Professional Practice',
      Instructor: 'Michael Ashkin (ma352)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 4004',
      Title: 'Thesis II',
      Instructor: 'Elisabeth Meyer (ehm2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 5092',
      Title: 'Graduate Independent Studio in Art',
      Instructor: 'Carl Ostendarp (cao24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 6000',
      Title: 'Graduate Seminar: Contemporary Theory and Art',
      Instructor: 'Maria Park (myp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 7002',
      Title: 'Graduate Studio II',
      Instructor: 'Leeza Meksin (evm28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ART 8002',
      Title: 'Graduate Studio IV',
      Instructor: 'Dan Torop (dat247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 2000',
      Title: 'Introduction to Visual Studies',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 2355',
      Title: 'Introduction to Medieval Art and Culture',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 2750',
      Title: 'Introduction to Humanities',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 3100',
      Title: 'History of Photography',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 3111',
      Title: 'Making Photography Matter: A Studio Course',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 3225',
      Title: 'Archaic and Classical Greece',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 3625',
      Title: 'Paris, Capital of Modernity?',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 3755',
      Title: 'Humanities Scholars Research Methods',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 3850',
      Title: 'The Arts of Southeast Asia',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4305',
      Title:
        'Looking for Love: Visual and Literary Cultures of Love in the Medieval Mediterranean, 1100 - 1400 AD',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4630',
      Title: 'Museum Histories',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4720',
      Title: 'Curating the British Empire',
      Instructor: 'Kaja Tally-Schumacher (kjt59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4816',
      Title: 'Modern Chinese Art',
      Instructor: 'Andrew Moisey (am2798)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4856',
      Title: 'Producing Cloth Cultures',
      Instructor: 'Andrew Moisey (am2798)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4992',
      Title: 'Independent Study',
      Instructor: 'Annetta Alexandridis (aa376)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 4999',
      Title: 'Honors Work II',
      Instructor: 'Kelly Presutti (kmp275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 5992',
      Title: 'Supervised Reading',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 5994',
      Title: 'Supervised Study',
      Instructor: 'Kaja McGowan (kmm22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6100',
      Title: 'History of Photography',
      Instructor: 'Kaja McGowan (kmm22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6225',
      Title: 'Archaic and Classical Greece',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6305',
      Title:
        'Looking for Love: Visual and Literary Cultures of Love in the Medieval Mediterranean, 1100-1400 AD',
      Instructor: 'Benjamin Anderson (bwa32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Kelly Presutti (kmp275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6625',
      Title: 'Paris, Capital of Modernity?',
      Instructor: 'Jessica Ratcliff (jrr47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6630',
      Title: 'Museum Histories',
      Instructor: 'An-Yi Pan (ap76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6720',
      Title: 'Curating the British Empire',
      Instructor: 'Kaja McGowan (kmm22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6816',
      Title: 'Modern Chinese Art',
      Instructor: 'Annetta Alexandridis (aa376)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6850',
      Title: 'The Arts of Southeast Asia',
      Instructor: 'Iftikhar Dadi (mid1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ARTH 6856',
      Title: 'Producing Cloth Cultures',
      Instructor: 'Maria Fernandez (mf252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AS 1111',
      Title: 'Milstein Collab I',
      Instructor: 'Austin Bunn (ab2346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AS 3111',
      Title: 'Milstein Sophomore Seminar',
      Instructor: 'Virginia Rath (vlr28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AS 3112',
      Title: 'Milstein Independent Study',
      Instructor: 'Austin Bunn (ab2346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AS 3113',
      Title: 'Milstein Studio',
      Instructor: 'Austin Bunn (ab2346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'AS 3200',
      Title: 'Milstein Junior Project',
      Instructor: 'Austin Bunn (ab2346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 1107',
      Title: 'FWS: Writing on the Wrong Side of History',
      Instructor: 'Andrew Harding (awh74)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 1111',
      Title: 'FWS: Literature, Culture, Religion',
      Instructor: 'Andrew Harding (awh74)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 1174',
      Title: 'Imperial China',
      Instructor: 'Jahyon Park (jp959)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2212',
      Title: 'Introduction to China',
      Instructor: 'Jahyon Park (jp959)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2218',
      Title: 'Introduction to Korea',
      Instructor: 'Hoai Tran (jht29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2222',
      Title: 'The World of Modern Japan',
      Instructor: 'Hoai Tran (jht29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2250',
      Title: 'Introduction to Asian Religions',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2251',
      Title: 'The History of Religious Life in Imperial China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2252',
      Title: 'Introduction to Japanese Film',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2257',
      Title:
        'Vanishing World: Religious Reflections on the Climate Crisis, Mass Extinction and Ecosystem Collapse',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2259',
      Title: 'Music in and of East Asia',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2275',
      Title: 'History of Modern India',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2279',
      Title: 'Chinese Mythology',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 2291',
      Title: 'Engendering China',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3313',
      Title: 'South Asian Poetry and Narrative: From Ghazals to Film',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3316',
      Title: 'Zen Buddhism: Ecology, Sustainability and Daily Life',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3329',
      Title: 'Literature of Leaving China',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3341',
      Title: 'Mahayana Buddhism',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3344',
      Title: 'Introduction to Indian Philosophy',
      Instructor: 'Ivanna Yi (isy4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3350',
      Title: 'The Arts of Southeast Asia',
      Instructor: 'Jihyun Han (jh2496)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3363',
      Title: 'Sino-Vietnamese Studies',
      Instructor: 'Jihyun Han (jh2496)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3375',
      Title: 'Humanities Scholars Research Methods',
      Instructor: 'Kristin Roebuck (kar79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 3396',
      Title:
        'Transnational Local: Southeast Asian History from the Eighteenth Century',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4401',
      Title: 'Asian Studies Honors Course',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4402',
      Title: 'Asian Studies Honors: Senior Essay',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4404',
      Title: 'Supervised Reading',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4417',
      Title: 'Race and Asia in World History',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4423',
      Title: 'The City: Asia',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4435',
      Title: 'Making Sense of China: The Capstone Seminar',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4437',
      Title: 'Topics in Tamil Studies',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4454',
      Title: 'The Rise of China and Change in World Politics',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4455',
      Title: 'Digital Media in Japan',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4458',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4473',
      Title: 'Modern Chinese Art',
      Instructor: 'Andrew Campana (ac2794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4485',
      Title:
        'Annamese and Merovingians: Two Imperial Frontiers - Rome and Han-Tang China, 5th-8th Centuries',
      Instructor: 'Andrew Campana (ac2794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 4494',
      Title: 'Topics in Southeast Asian Studies',
      Instructor: 'Andrew Campana (ac2794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 5505',
      Title: 'Methodology of Asian Language Learning and Teaching',
      Instructor: 'Jane-Marie Law (jml16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6604',
      Title: 'Topics in Southeast Asian Studies',
      Instructor: 'Christopher Miller (cjm299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6612',
      Title: 'Japanese Bibliography and Research Methods',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6616',
      Title: 'Zen Buddhism: Ecology, Sustainability and Daily Life',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6617',
      Title: 'Race and Asia in World History',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6622',
      Title: 'Asia as Question',
      Instructor: 'Robin McNeal (rm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6623',
      Title: 'The City: Asia',
      Instructor: 'Yue Du (yd367)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6639',
      Title: 'Literature of Leaving China',
      Instructor: 'Asiya Zahoor (az277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6655',
      Title: 'Digital Media in Japan',
      Instructor: 'Jane-Marie Law (jml16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6658',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6663',
      Title: 'Sino-Vietnamese Studies',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6673',
      Title: 'Modern Chinese Art',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6677',
      Title: 'Ecocriticism and East Asia in Global Context',
      Instructor: 'Kaja McGowan (kmm22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6685',
      Title:
        'Annamese and Merovingians: Two Imperial Frontiers - Rome and Han-Tang China, 5th-8th Centuries',
      Instructor: 'Kaja McGowan (kmm22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 6696',
      Title:
        'Transnational Local: Southeast Asian History from the Eighteenth Century',
      Instructor: 'Keith Taylor (kwt3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASIAN 7704',
      Title: 'Directed Research',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASL 1101',
      Title: 'American Sign Language I',
      Instructor: 'Matilda Prestano (mp842)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASL 1102',
      Title: 'American Sign Language II',
      Instructor: 'Nora Owen (no225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASL 2201',
      Title: 'Intermediate American Sign Language I',
      Instructor: 'Nora Owen (no225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASL 2202',
      Title: 'Intermediate American Sign Language II',
      Instructor: 'Brenda Schertz (bs794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASL 2301',
      Title: 'Modern Deaf Culture',
      Instructor: 'Nora Owen (no225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1202',
      Title: 'Elementary Arabic II',
      Instructor: 'Abdel-Fattah Shahda (as3859)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1210',
      Title: 'Elementary Twi Jumpstart',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1500',
      Title: 'Introduction to Africana Studies',
      Instructor: 'Abdel-Fattah Shahda (as3859)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1650',
      Title: 'Philosophy of Race',
      Instructor: 'Mavis Ofori-Brown (meo78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1819',
      Title: 'FWS: Literature and Sport',
      Instructor: 'Olufemi Taiwo (ot48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1856',
      Title: "FWS: Fighting/Writing for One's Children",
      Instructor: 'Benjamin Yost (bsy9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1857',
      Title: 'FWS: Race, Sex, and Anxiety in the American Novel',
      Instructor: 'Grant Farred (gaf38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1858',
      Title:
        'FWS: Modern Afr Intellectual History: From the Nineteenth Century to Contemporary African Philosophy',
      Instructor: 'Gerard Aching (gla23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 1900',
      Title: 'Research Strategies in Africana and Latino Studies',
      Instructor: 'Amaris Brown (adb294)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2025',
      Title: "Apartheid's Afterlife",
      Instructor: 'Zeyad El Nabolsy (ze44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2091',
      Title:
        'A History of Human Trafficking in the Atlantic World, ca. 1400-1800',
      Instructor: 'Tom Ottaviano (tjo65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2200',
      Title: 'Intermediate Arabic II',
      Instructor: 'Abikal Borah (ab2524)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2204',
      Title: 'Introduction to Quranic Arabic',
      Instructor: 'Casey Schmitt (cs2437)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2308',
      Title: 'Modern Caribbean History',
      Instructor: 'Bilal Al-Omar (bma57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2317',
      Title: 'Histories of the African Diaspora',
      Instructor: 'Bilal Al-Omar (bma57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2354',
      Title: 'African American Visions of Africa',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2512',
      Title: 'Black Women in the 20th Century',
      Instructor: 'Judith Byfield (jab632)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2674',
      Title: 'History of the Modern Middle East',
      Instructor: 'Judith Byfield (jab632)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 2750',
      Title: 'Introduction to Humanities',
      Instructor: 'Russell Rickford (rr447)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3101',
      Title: 'Advanced Arabic II',
      Instructor: 'Tamika Nunley (tyn4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3222',
      Title: 'Rapid Reading in Latin',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3330',
      Title: 'China-Africa Relations',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3350',
      Title: 'Beyoncé Nation: The Remix',
      Instructor: 'Sibel Karakoc (sk2657)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3401',
      Title: 'The Whites are Here to Stay: US-Africa Policy from Nixon to Date',
      Instructor: 'Maddie Reynolds (mlr292)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3405',
      Title: 'A Maritime History of Early America, ca. 1450-1850',
      Instructor: 'Bilal Al-Omar (bma57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3440',
      Title:
        'Merchants, Whalers, Pirates, Sailors: American Maritime Literature from the 19th Century and Beyond',
      Instructor: 'Michael Fontaine (mf268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3625',
      Title: 'Frederick Douglass and Frances E.W. Harper',
      Instructor: 'Siba Grovogui (sng52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3652',
      Title: 'African Economic Development Histories',
      Instructor: 'Riche Richardson (rdr83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3734',
      Title: 'Whiteness in Literature and Popular Culture',
      Instructor: 'Siba Grovogui (sng52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 3742',
      Title: 'Africans and African Americans in Literature',
      Instructor: 'Casey Schmitt (cs2437)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4002',
      Title: 'Diasporic and Indigenous Health',
      Instructor: 'Lenora Warren (ldw65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4113',
      Title: 'August Wilson: the Cycle of Black Life',
      Instructor: 'Derrick Spires (drs385)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'Sandra Greene (seg6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4602',
      Title: 'Women and Gender Issues in Africa',
      Instructor: 'Satya Mohanty (spm5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4653',
      Title: 'Biography and the Black Atlantic, 1400-1800',
      Instructor: 'Mukoma Ngugi (mwn39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4655',
      Title: 'Black Speculative Fiction',
      Instructor: 'Jerel Ezell (jme246)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Grant Farred (gaf38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: 'Tamika Nunley (tyn4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4670',
      Title: 'Race and Justice After DNA',
      Instructor: "N'Dri Assie-Lumumba (na12)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4721',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: 'Sandra Greene (seg6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4901',
      Title: 'Honors Thesis',
      Instructor: 'Derrick Spires (drs385)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 4903',
      Title: 'Independent Study',
      Instructor: 'Yomaira Figueroa-Vasquez (ycf2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6003',
      Title: 'Doing Research With Marginalized Populations',
      Instructor: 'Leslie Alexander (lma1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'Noah Tamarkin (nt383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6602',
      Title: 'Women and Gender Issues in Africa',
      Instructor: 'Christine Leuenberger (cal22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6653',
      Title: 'Biography and the Black Atlantic, 1400-1800',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Carole Boyce Davies (ceb278)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: "N'Dri Assie-Lumumba (na12)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6670',
      Title: 'Race and Justice After DNA',
      Instructor: 'Salah Hassan (sh40)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6819',
      Title: 'Urban Justice',
      Instructor: 'Grant Farred (gaf38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6901',
      Title: 'Independent Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASRC 6903',
      Title: 'Africana Studies Graduate Seminar',
      Instructor: 'Riche Richardson (rdr83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 1102',
      Title: 'Our Solar System',
      Instructor: 'Britney Schmidt (bes83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 1104',
      Title: 'Our Solar System',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 2201',
      Title: 'The History of the Universe',
      Instructor: 'Corey Spohn (cas584)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 2211',
      Title: 'Astronomy: Stars, Galaxies, and Cosmology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 2299',
      Title: 'Search for Life in the Universe',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 3302',
      Title: 'The Life of Stars: From Birth to Death',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 3334',
      Title: 'Data Analysis and Research Techniques in Astronomy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 4431',
      Title: 'Physics of Stars, Neutron Stars and Black Holes',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 4940',
      Title: 'Independent Study in Astronomy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 6570',
      Title: 'Physics of the Planets',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 6577',
      Title: 'Planetary Surface Processes',
      Instructor: 'Britney Schmidt (bes83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 6579',
      Title: 'Advanced Astrodynamics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 6940',
      Title: 'Advanced Study and Research',
      Instructor: 'Corey Spohn (cas584)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 7620',
      Title: 'Seminar: Advanced Radio Astronomy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ASTRO 7683',
      Title: 'Seminar: Astronomy and Planetary Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BCS 1132',
      Title: 'Elementary Bosnian-Croatian-Serbian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BCS 2134',
      Title: 'Intermediate Bosnian-Croatian-Serbian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 2000',
      Title: 'Perspectives on the Climate Change Challenge',
      Instructor: 'Peter Hess (pgh25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 2220',
      Title: 'Bioengineering Thermodynamics and Kinetics',
      Instructor: 'Jean Hunter (jbh5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 3299',
      Title: 'Sustainable Development',
      Instructor: 'Brian Richards (bkr2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 3400',
      Title: 'Design and Analysis of Biomaterials',
      Instructor: 'Minglin Ma (mm826)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 3600',
      Title: 'Molecular and Cellular Bioengineering',
      Instructor: 'Buz Barstow (bmb35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 3800',
      Title: 'Sustainability and Sustainable Energy Systems',
      Instructor: 'Norman Scott (nrs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 3801',
      Title: 'Introduction to Nanobiotechnology',
      Instructor: 'Norman Scott (nrs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4310',
      Title: 'Multivariate Statistics for Environmental Applications',
      Instructor: 'Dan Luo (dl79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4500',
      Title: 'Bioinstrumentation',
      Instructor: 'Dan Luo (dl79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4530',
      Title: 'Computer-Aided Engineering: Applications to Biological Processes',
      Instructor: 'Scott Steinschneider (ss3378)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4710',
      Title: 'Introduction to Groundwater',
      Instructor: 'Mingming Wu (mw272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4760',
      Title: 'Solid Waste Engineering',
      Instructor: 'Mingming Wu (mw272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4940',
      Title: 'Special Topics in Biological and Environmental Engineering',
      Instructor: 'Mingming Wu (mw272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4970',
      Title: 'Individual Study in Biological and Environmental Engineering',
      Instructor: 'Mingming Wu (mw272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4971',
      Title: 'Engineers Without Borders Independent Study',
      Instructor: 'Mingming Wu (mw272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4980',
      Title: 'Undergraduate Teaching',
      Instructor: 'Mingming Wu (mw272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4990',
      Title: 'Undergraduate Research',
      Instructor: 'Ashim Datta (akd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 4993',
      Title: 'Honors Thesis',
      Instructor: 'Tamme Steenhuis (tss1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 5299',
      Title: 'Sustainable Development',
      Instructor: 'Douglas Haith (dah13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 5330',
      Title: 'Engineering Professionalism',
      Instructor: 'Ashim Datta (akd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 5469',
      Title: 'Energy Seminar II',
      Instructor: 'Ashim Datta (akd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 5530',
      Title: 'Computer-Aided Engineering: Applications to Biological Processes',
      Instructor: 'Scott Steinschneider (ss3378)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 5600',
      Title: 'Molecular and Cellular Bioengineering',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 5952',
      Title: 'Master of Engineering Design Project',
      Instructor: 'Peter Hess (pgh25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 6310',
      Title: 'Multivariate Statistics for Environmental Applications',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 6710',
      Title: 'Introduction to Groundwater',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 6740',
      Title: 'Ecohydrology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 6940',
      Title:
        'Graduate Special Topics in Biological and Environmental Engineering',
      Instructor: 'Brian Richards (bkr2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 6970',
      Title:
        'Graduate Individual Study in Biological and Environmental Engineering',
      Instructor: 'David Orr (dpo3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BEE 7710',
      Title: 'Soil and Water Engineering Seminar',
      Instructor: 'K. Max Zhang (kz33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BENGL 1122',
      Title: 'Elementary Bengali II',
      Instructor: 'Razima Chowdhury (rc856)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BENGL 2202',
      Title: 'Intermediate Bengali II',
      Instructor: 'Razima Chowdhury (rc856)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BENGL 3302',
      Title: 'Advanced Bengali II',
      Instructor: 'Razima Chowdhury (rc856)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 2140',
      Title: 'The Biological Basis of Human Reproduction',
      Instructor: 'Patricia Johnson (paj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 3160',
      Title: 'Cellular Physiology',
      Instructor: 'Andrew White (acw93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 3300',
      Title: 'Fish Physiology',
      Instructor: 'Eugene Won (etw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 3410',
      Title: 'Biology of the Mammary Gland in Health and Disease',
      Instructor: 'Yves Boisclair (yrb1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 4130',
      Title: 'Histology: The Biology of the Tissues',
      Instructor: 'Keila Dhondt (kvs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 4140',
      Title: 'Principles of Pharmacology',
      Instructor: 'Keila Dhondt (kvs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 4980',
      Title: 'Teaching Experience',
      Instructor: 'Gregory Weiland (gaw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 5300',
      Title: 'Fish Physiology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 5410',
      Title: 'Biology of the Mammary Gland in Health and Disease',
      Instructor: 'Keila Dhondt (kvs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOAP 7100',
      Title:
        'By Scientific Design: Skill Building for a Career in the Life Sciences II',
      Instructor: 'Eugene Won (etw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 1130',
      Title: 'The Art and Science of Birds',
      Instructor: 'Irby Lovette (ijl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 1610',
      Title: 'Introductory Biology: Ecology and the Environment',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 1640',
      Title: 'FWS: Topics in Ecology and Evolutionary Biology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 1780',
      Title: 'An Introduction to Evolutionary Biology and Diversity',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 1781',
      Title: 'Introduction to Evolution and Diversity',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 2001',
      Title:
        'Bringing Specimens to Life: Using Natural History Collections to Engage Communities in Sci Outreach',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 2527',
      Title: 'Neotropical Wildlife Biology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 2740',
      Title:
        'The Vertebrates: Comparative Anatomy, Function, Paleontology, and Evolution',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 3690',
      Title: 'Chemical Ecology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 3780',
      Title: 'Digital Morphology through CT',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 4460',
      Title: 'Plant Behavior and Biotic Interactions, Lecture',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 4690',
      Title: 'Food, Agriculture, and Society',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 4750',
      Title: 'Ornithology, Lectures',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 4790',
      Title: 'Paleobiology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 4940',
      Title: 'Special Topics in Ecology and Evolutionary Biology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 6602',
      Title: 'Graduate Field Course in Ecology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 6680',
      Title: 'Principles of Biogeochemistry',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 6900',
      Title: 'Seminar in Ecology and Evolution of Infectious Diseases',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 7600',
      Title: 'Special Topics in Evolution and Ecology',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 7640',
      Title: 'Plant-Insect Interactions Seminar',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOEE 9990',
      Title: 'Ph.D. Dissertation Research',
      Instructor: 'Robert Howarth (rwh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 1044',
      Title: 'Academic Support for BIOG 1440: Physiology',
      Instructor: 'Elizabeth Ogata (emo73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 1200',
      Title: 'Biology Scholars Program Freshman Seminar',
      Instructor: 'Elizabeth Ogata (emo73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 1250',
      Title: 'Biology Seminar',
      Instructor: 'Jeff McCaffrey (jm298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 1440',
      Title: 'Introductory Biology: Comparative Physiology',
      Instructor: 'Orchi Anannya (oa223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 1445',
      Title:
        'Introduction to Comparative Anatomy and Physiology, Individualized Instruction',
      Instructor: 'Shaun Cross (stc87)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 1500',
      Title: 'Investigative Biology Laboratory',
      Instructor: 'Iris Holmes (iah6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 2000',
      Title: 'Special Studies in Biology',
      Instructor: 'Megan Keller (mrk269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 2401',
      Title: 'Developing a Reflective Study Group Leader Practice II',
      Instructor: 'Orchi Anannya (oa223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 2990',
      Title: 'Introduction to Research Methods in Biology',
      Instructor: 'Kelly Murray (klm353)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 3100',
      Title: 'Preparing HHMI-CURT Scholars for Research',
      Instructor: 'Katie Edwards (kae24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 4970',
      Title: 'Independent Study in Biology',
      Instructor: 'Brandon Hollingsworth (bdh79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 4980',
      Title: 'Teaching Experience',
      Instructor: 'Paul Soloway (pds28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOG 4990',
      Title: 'Independent Undergraduate Research in Biology',
      Instructor: 'Paul Soloway (pds28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 1035',
      Title: 'Academic Support for BIOMG 1350: Cell and Developmental Biology',
      Instructor: 'Elizabeth Ogata (emo73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 1290',
      Title:
        "Personal Genomics and Medicine: Why Should You Care About What's in Your Genes",
      Instructor: 'Elizabeth Ogata (emo73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 1320',
      Title: 'Orientation Lectures in Molecular Biology and Genetics',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 1350',
      Title: 'Introductory Biology: Cell and Developmental Biology',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 2800',
      Title: 'Lectures in Genetics and Genomics',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 2801',
      Title: 'Laboratory in Genetics and Genomics',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 3300',
      Title: 'Principles of Biochemistry, Individualized Instruction',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 3320',
      Title: 'Principles of Biochemistry: Molecular Biology',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 3340',
      Title: 'Computer Graphics and Molecular Biology',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 3350',
      Title:
        'Principles of Biochemistry: Proteins, Metabolism, and Molecular Biology',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4320',
      Title: 'Survey of Cell Biology',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4390',
      Title: 'Molecular Basis of Disease',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4400',
      Title: 'Laboratory in Biochemistry and Molecular Biology',
      Instructor: 'Charles Aquadro (cfa1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4810',
      Title: 'Population Genetics',
      Instructor: 'Jim Blankenship (jeb14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4880',
      Title: 'Cancer Genetics',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4940',
      Title: 'Special Topics in Molecular Biology and Genetics',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4980',
      Title: 'Teaching Experience',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4981',
      Title: 'Teaching Experience in Principles of Biochemistry, Indv',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 4982',
      Title: 'Teaching Leadership in Principles of Biochemistry, Indv',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6300',
      Title: 'Principles of Biochemistry, Individualized Instruction',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6321',
      Title: 'Principles of Biochemistry: Molecular Biology',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6350',
      Title:
        'Principles of Biochemistry: Proteins, Metabolism, and Molecular Biology',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6360',
      Title: 'Functional Organization of Eukaryotic Cells',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6390',
      Title: 'The Nucleus',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6391',
      Title: 'Molecular Basis of Disease',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6400',
      Title: 'Laboratory in Biochemistry and Molecular Biology',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6870',
      Title:
        'Tricks of the Trade: How to Use Genetics to Dissect Cells, Molecules and Developmental Pathways',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 6880',
      Title: 'Cancer Genetics',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 7510',
      Title: 'Ethical Issues and Professional Responsibilities',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 7800',
      Title: 'Current Topics in Genetics and Development',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 7860',
      Title: 'Research Seminar in Genetics and Development',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 7870',
      Title: 'Seminar in Genetics and Development',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 7940',
      Title: 'Current Topics in Biochemistry, Molecular and Cell Biology',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 7941',
      Title:
        'Preparing for the A-exam: Skills Development for Scientific Proposal Writing',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 8300',
      Title: 'Biochemistry Seminar',
      Instructor: 'Kelly Liu (jl53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 8320',
      Title: 'Advanced Biochemical Methods II',
      Instructor: 'Thomas Fox (tdf1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 8330',
      Title: 'Research Seminar in Biochemistry',
      Instructor: 'Kristina Blake-Hodek (kab69)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMG 8370',
      Title: 'Foundations and Frontiers in Cellular and Molecular Biology – II',
      Instructor: 'Kristina Blake-Hodek (kab69)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 1200',
      Title: 'Genesis',
      Instructor: 'Steve Winans (scw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 1400',
      Title: 'Antibiotics: Probing the Biology of Life and Death',
      Instructor: 'Anthony Hay (agh5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 2600',
      Title: 'Microbiology of Human Contagious Diseases',
      Instructor: 'Steve Winans (scw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 2900',
      Title: 'General Microbiology Lectures',
      Instructor: 'Kathleen Hefferon (klh22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 2911',
      Title: 'General Microbiology Laboratory',
      Instructor: 'Kathleen Hefferon (klh22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 3310',
      Title: 'General Parasitology',
      Instructor: 'Daniel Buckley (dhb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 3500',
      Title: 'Marine Microbes and Disease in a Changing Ocean',
      Instructor: 'Daniel Buckley (dhb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 3990',
      Title: 'Professional Skills for Host-Microbe Interactions Research',
      Instructor: 'Daniel Buckley (dhb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 4040',
      Title: 'Pathogenic Bacteriology',
      Instructor: 'Daniel Buckley (dhb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 4980',
      Title: 'Teaching Experience',
      Instructor: 'Daniel Buckley (dhb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 6906',
      Title: 'Prokaryotic Biology: Viral Diversity and Ecology',
      Instructor: 'Daniel Buckley (dhb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 7980',
      Title: 'Graduate Research Seminar in Microbiology',
      Instructor: 'Joshua Filter (jjf33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMI 7990',
      Title: 'Microbiology Seminar',
      Instructor: 'Joshua Filter (jjf33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 3160',
      Title: 'Cellular Physiology',
      Instructor: 'Andrew White (acw93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 3310',
      Title: 'General Parasitology',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 4040',
      Title: 'Pathogenic Bacteriology',
      Instructor: 'Dorothy Debbie (dpd22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 4130',
      Title: 'Histology: The Biology of the Tissues',
      Instructor: 'Dorothy Debbie (dpd22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 4140',
      Title: 'Principles of Pharmacology',
      Instructor: 'Dorothy Debbie (dpd22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 4311',
      Title: 'Paleoparasitology - Very, Very Cold Cases',
      Instructor: 'Keila Dhondt (kvs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 4980',
      Title: 'Undergraduate Supervised Teaching',
      Instructor: 'Keila Dhondt (kvs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 5660',
      Title: 'Social Issues in Community Engagement by Cancer Scientists',
      Instructor: 'Gregory Weiland (gaw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 7050',
      Title: 'Advanced Immunology',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIOMS 7900',
      Title: 'Seminars in Stem Cell Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 1220',
      Title: 'FWS: Special Topics in Neurobiology and Behavior',
      Instructor: 'Andrea Roeser (acr245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 2220',
      Title: 'Neurobiology and Behavior II: Introduction to Neuroscience',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 3215',
      Title: 'Gender and the Brain',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 3280',
      Title: 'Biopsychology of Learning and Memory',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 3690',
      Title: 'Chemical Ecology',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4140',
      Title: 'Principles of Pharmacology',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4200',
      Title: 'Topics in Neurobiology and Behavior',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4260',
      Title: 'Animal Communication',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4300',
      Title: 'Experimental Molecular Neurobiology',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4330',
      Title: 'Topics in Cognitive Science',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4460',
      Title: 'Plant Behavior and Biotic Interactions, Lecture',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4550',
      Title: 'Molecular and Neural Basis of Decision Making',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4910',
      Title: 'Principles of Neurophysiology',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 4980',
      Title: 'Teaching Experience',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 5910',
      Title: 'Principles of Neurophysiology',
      Instructor: 'Tim Devoogd (tjd5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 7201',
      Title: 'Research Design in the Study of Animal Social Behavior',
      Instructor: 'Jennifer Thaler (jst37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 7202',
      Title: 'Topics in Neural Basis of Behavior',
      Instructor: 'Gregory Weiland (gaw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BIONB 7640',
      Title: 'Plant-Insect Interactions Seminar',
      Instructor: 'Nilay Yapici (ny96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 2010',
      Title: 'Physiology of Human Health and Disease',
      Instructor: 'Mridusmita Saikia (ms2855)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 2080',
      Title: 'Experiential Learning Seminar',
      Instructor: 'Mridusmita Saikia (ms2855)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 2110',
      Title: 'Biomolecular Thermodynamics',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 3020',
      Title: 'Molecular Principles of Biomedical Engineering',
      Instructor: 'Shaoyi Jiang (sj19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 3110',
      Title: 'Cellular Systems Biology',
      Instructor: 'Shaoyi Jiang (sj19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 3210',
      Title: 'Multiscale Biomaterial Analysis',
      Instructor: 'Shaoyi Jiang (sj19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 3310',
      Title: 'Medical and Preclinical Imaging',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 3410',
      Title: 'Systems Mechanobiology',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4020',
      Title: 'Electrical and Chemical Physiology',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4090',
      Title: 'Biomedical Engineering Design II',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4490',
      Title: 'Biomechanics Laboratory',
      Instructor: 'Ben Cosgrove (bdc68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4900',
      Title: 'Independent Undergraduate Project in Biomedical Engineering',
      Instructor: 'Ben Cosgrove (bdc68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4901',
      Title: 'Honors Thesis',
      Instructor: 'Ben Cosgrove (bdc68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4910',
      Title: 'Principles of Neurophysiology',
      Instructor: 'Yadong Wang (yw839)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 4970',
      Title: 'Undergraduate Teaching in Biomedical Engineering',
      Instructor: 'Yadong Wang (yw839)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5010',
      Title: 'BME MEng Professional Engagement Seminar',
      Instructor: 'Yi Wang (yw233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5320',
      Title: 'Principles of Neurophysiology',
      Instructor: 'Karl Lewis (kjl235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5510',
      Title: 'Medical Device Regulatory Affairs for Biomedical Engineers',
      Instructor: 'Iwijn De Vlaminck (id93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5620',
      Title:
        'Biomineralization: The Formation and Properties of Inorganic Biomaterials',
      Instructor: 'Iwijn De Vlaminck (id93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5780',
      Title: 'Computer Analysis of Biomed Images',
      Instructor: 'Iwijn De Vlaminck (id93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5830',
      Title: 'Cell-Biomaterials Interactions',
      Instructor: 'Iwijn De Vlaminck (id93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5910',
      Title: 'Preliminary Study for Design Project',
      Instructor: 'James Antaki (jfa79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5911',
      Title: 'Industrial Projects: Preliminary Study for Design Project',
      Instructor: 'Lawrence Bonassar (lb244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5920',
      Title: 'Performance of Design Project',
      Instructor: 'Lawrence Bonassar (lb244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5921',
      Title: 'Industrial Projects: Performance of Design Project',
      Instructor: 'Karl Lewis (kjl235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5930',
      Title: 'Independent Design Project',
      Instructor: 'David Erickson (de54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 5940',
      Title: 'Biomedical Engineering Internship',
      Instructor: 'Lawrence Bonassar (lb244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 6230',
      Title: 'Cancer and Immuno-Engineering',
      Instructor: 'David Putnam (dap43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 6260',
      Title: 'Optical Microscopy and Fluorescence Methods for Research',
      Instructor: 'Chris Schaffer (cs385)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 6320',
      Title: 'Modern Biomedical Microscopy',
      Instructor: 'Warren Zipfel (wrz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 6410',
      Title: 'Cell and Molecular Mechanobiology',
      Instructor: 'Newton de Faria (nd366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 7020',
      Title: 'Biomedical Engineering Research Seminar',
      Instructor: 'Yi Wang (yw233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 7030',
      Title: 'Graduate Student Teaching Experience',
      Instructor: 'Adam Anderson (aka47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 7130',
      Title: 'Core Concepts in Disease',
      Instructor: 'Peter Doerschuk (pd83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BME 7900',
      Title: 'Biomedical Engineering Graduate Colloquium',
      Instructor: 'Claudia Fischbach (cf99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2061',
      Title: 'Ethics and the Environment',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2071',
      Title: 'Introduction to the History of Medicine',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2131',
      Title: 'Science Fiction',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2201',
      Title: 'Society and Natural Resources',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2211',
      Title: 'Early Agriculture',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2468',
      Title: 'Medicine, Culture, and Society',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2581',
      Title: 'Environmental History',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 2721',
      Title: 'History of Mental Health and Mental Illness in the United States',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 3181',
      Title: 'Living in an Uncertain World: Science, Technology, and Risk',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 3235',
      Title: 'Bioarchaeology',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 3390',
      Title: 'Primate Behavior and Ecology with Emphasis on African Apes',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 3751',
      Title: 'Independent Study',
      Instructor: 'Anindita Banerjee (ab425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 4634',
      Title: 'Curating the British Empire',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 4650',
      Title: 'Advanced Topics in Clinical Ethics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 4691',
      Title: 'Food, Agriculture, and Society',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BSOC 4992',
      Title: 'Honors Project II',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 3020',
      Title: 'Biological Statistics II',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 3080',
      Title: 'Probability Models and Inference',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4090',
      Title: 'Theory of Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4140',
      Title: 'Applied Design',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4810',
      Title: 'Population Genetics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4830',
      Title: 'Quantitative Genomics and Genetics',
      Instructor: 'Ahmed El Alaoui (ae333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4970',
      Title: 'Undergraduate Individual Study in Biometry and Statistics',
      Instructor: 'Ahmed El Alaoui (ae333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4980',
      Title: 'Undergraduate Supervised Teaching',
      Instructor: 'Ahmed El Alaoui (ae333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 4990',
      Title: 'Undergraduate Research',
      Instructor: 'Thomas Diciccio (tjd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 5020',
      Title: 'Biological Statistics II',
      Instructor: 'Thomas Diciccio (tjd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 5090',
      Title: 'Theory of Statistics',
      Instructor: 'Thomas Diciccio (tjd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 6020',
      Title: 'Statistical Methods II',
      Instructor: 'James Booth (jb383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 6830',
      Title: 'Quantitative Genomics and Genetics',
      Instructor: 'Philipp Messer (pm544)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 6970',
      Title: 'Individual Graduate Study in Biometry and Statistics',
      Instructor: 'Philipp Messer (pm544)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 7210',
      Title: 'Topics in Quantitative Genomics',
      Instructor: 'Philipp Messer (pm544)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 7900',
      Title: 'Graduate-Level Dissertation Research',
      Instructor: 'Jason Mezey (jgm45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 7980',
      Title: 'Graduate Supervised Teaching',
      Instructor: 'Jason Mezey (jgm45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 8900',
      Title: "Master's Level Thesis Research",
      Instructor: 'Jason Mezey (jgm45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BTRY 9900',
      Title: 'Doctoral-Level Dissertation Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BURM 1122',
      Title: 'Elementary Burmese (Myanmar) II',
      Instructor: 'Yu Yu Khaing (yk696)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BURM 2202',
      Title: 'Intermediate Burmese (Myanmar) II',
      Instructor: 'Yu Yu Khaing (yk696)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'BURM 3302',
      Title: 'Advanced Burmese (Myanmar) II',
      Instructor: 'Yu Yu Khaing (yk696)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 1622',
      Title: 'The World of Modern Japan',
      Instructor: 'Kristin Roebuck (kar79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 1740',
      Title: 'Imperial China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 2212',
      Title: 'Introduction to China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 2932',
      Title: 'Engendering China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 3329',
      Title: 'Literature of Leaving China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4010',
      Title: 'Honors Thesis Tutorial I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4020',
      Title: 'Honors Thesis Tutorial II',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4030',
      Title: 'Making Sense of China: The Capstone Seminar',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4049',
      Title: 'The Rise of China and Change in World Politics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4420',
      Title: 'Tang Poetry: Themes and Contexts',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4773',
      Title: 'Twice A Stranger: Transnational Figures and Their Stories',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CAPS 4999',
      Title: 'CAPS Independent Study',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 1130',
      Title:
        'Sustainable Engineering of Energy, Water, Soil, and Air Resources',
      Instructor: 'Andrea Giometto (ag956)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 1165',
      Title: 'Climate Change and You, the Engineer',
      Instructor: 'Edwin (Todd) Cowen (eac20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 2550',
      Title: 'AguaClara: Sustainable Water Supply Project',
      Instructor: 'Ruth Richardson (rer26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3080',
      Title: 'Introduction to CADD',
      Instructor: 'Steven Curtis (shc11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3090',
      Title: 'Special Topics in Civil and Environmental Engineering',
      Instructor: 'Steven Curtis (shc11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3102',
      Title: 'Basics of Programming in Python',
      Instructor: 'Steven Curtis (shc11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3200',
      Title: 'Engineering Computation',
      Instructor: 'Ruth Richardson (rer26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3230',
      Title: 'Engineering Economics and Management',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3510',
      Title: 'Environmental Quality Engineering',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3610',
      Title: 'Introduction to Transportation Engineering',
      Instructor: 'Sriramya Nair (sn599)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 3710',
      Title: 'Structural Modeling and Behavior',
      Instructor: 'Matthew Reiter (mtr68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4000',
      Title: 'Senior Honors Thesis',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4010',
      Title: 'Undergraduate Engineering Teaching in CEE',
      Instructor: 'Greg McLaskey (gcm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4090',
      Title: 'CEE Undergraduate Research',
      Instructor: 'William Philpot (wdp2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4330',
      Title: 'Physical Hydrology in the Built and Natural Environments',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4530',
      Title: 'Laboratory Research in Environmental Engineering',
      Instructor: 'Jery Stedinger (jrs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4665',
      Title: 'Modeling and Optimization for Smart Infrastructure Systems',
      Instructor: 'Jery Stedinger (jrs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4740',
      Title: 'Introduction to the Behavior of Metal Structures',
      Instructor: 'Matthew Reiter (mtr68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4750',
      Title: 'Concrete Materials and Construction',
      Instructor: 'Greg McLaskey (gcm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 4795',
      Title: 'Sensors for the Built and Natural Environments',
      Instructor: 'Seth Schweitzer (sas262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5022',
      Title: 'Project in Environmental and Water Resources Systems',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5025',
      Title:
        'Civil and Environmental Engineering Seminar for First-Year Research Students',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5032',
      Title: 'Project in Environmental Fluid Mechanics and Hydrology',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5042',
      Title: 'Project in Geotechnical Engineering',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5052',
      Title: 'Project in Environmental Engineering',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5062',
      Title: 'Project in Transportation Engineering',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5071',
      Title: 'Professional Experience in Structural Mechanics',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5080',
      Title: 'Introduction to CADD',
      Instructor: 'Ruth Richardson (rer26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5102',
      Title: 'Basics of Programming in Python',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5252',
      Title: 'Systems Analysis Behavior and Optimization',
      Instructor: 'Sriramya Nair (sn599)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5420',
      Title: 'Energy Technologies and Subsurface Resources',
      Instructor: 'Sriramya Nair (sn599)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5610',
      Title: 'Introduction to Transportation Engineering',
      Instructor: 'Sriramya Nair (sn599)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5665',
      Title: 'Modeling and Optimization for Smart Infrastructure Systems',
      Instructor: 'Derek Warner (dhw52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5745',
      Title: 'Inverse Problems: Theory and Applications',
      Instructor: 'Ruth Richardson (rer26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5795',
      Title: 'Sensors for the Built and Natural Environments',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5900',
      Title: 'Project Management',
      Instructor: 'Kenneth Hover (kch7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 5910',
      Title: 'Engineering Management Project',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6015',
      Title: 'Special Topics: Remote Sensing',
      Instructor: 'Ruth Richardson (rer26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6021',
      Title: 'Seminar: Environmental Engineering and Water Resources',
      Instructor: 'Qi Li (ql56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6065',
      Title: 'Special Topics in Transportation',
      Instructor: 'Damian Helbling (deh262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6075',
      Title: 'Special Topics in Structural Engineering',
      Instructor: 'Derek Warner (dhw52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6091',
      Title: 'Seminar: Project Management',
      Instructor: 'Greg McLaskey (gcm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6095',
      Title: 'Special Topics in Engineering Management',
      Instructor: 'Edwin (Todd) Cowen (eac20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6100',
      Title: 'Remote Sensing Fundamentals',
      Instructor: 'Matthew Reid (mcr239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6200',
      Title: 'Water-Resources Systems Engineering',
      Instructor: 'Matthew Reid (mcr239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6330',
      Title: 'Physical Hydrology in the Built and Natural Environments',
      Instructor: 'Kenneth Hover (kch7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6550',
      Title: 'Transport, Mixing, and Transformation in the Environment',
      Instructor: 'Greeshma Gadikota (gg464)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6590',
      Title: 'Environmental Organic Chemistry',
      Instructor: 'Samitha Samaranayake (ss3496)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6640',
      Title: 'Microeconometrics of Discrete Choice',
      Instructor: 'Derek Warner (dhw52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6725',
      Title:
        "3D Printing Parts that Don't Break: From Processing to Performance",
      Instructor: 'Sriramya Nair (sn599)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6745',
      Title: 'Inverse Problems: Theory and Applications',
      Instructor: 'Pete Diamessis (pjd38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6750',
      Title: 'Concrete Materials and Construction',
      Instructor: 'Greeshma Gadikota (gg464)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 6910',
      Title: 'Project Management',
      Instructor: 'April Gu Leip (azg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 7070',
      Title: 'Research in Structural Engineering',
      Instructor: 'Matthew Reid (mcr239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 7073',
      Title: 'Civil and Environmental Engineering Materials Project',
      Instructor: 'Francis Vanek (fmv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 7740',
      Title: 'Advanced Structural Concrete',
      Instructor: 'Qi Li (ql56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 7780',
      Title: 'Continuum Mechanics and Thermodynamics',
      Instructor: 'Qi Li (ql56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8100',
      Title: 'Thesis - Remote Sensing',
      Instructor: 'Matthew Reid (mcr239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8200',
      Title: 'Thesis - Environmental and Water Resource Systems',
      Instructor: 'Matthew Reid (mcr239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8300',
      Title: 'Thesis - Environmental Fluid Mechanics and Hydrology',
      Instructor: 'Samitha Samaranayake (ss3496)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8400',
      Title: 'Thesis - Geotechnical Engineering',
      Instructor: 'Matthew Reiter (mtr68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8500',
      Title: 'Thesis - Environmental Engineering',
      Instructor: 'Matthew Reiter (mtr68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8600',
      Title: 'Thesis - Transportation Systems Engineering',
      Instructor: 'Matthew Reiter (mtr68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8700',
      Title: 'Thesis - Structural Engineering',
      Instructor: 'Kenneth Hover (kch7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CEE 8800',
      Title: 'Thesis - Civil Infrastructure Systems',
      Instructor: 'Greg McLaskey (gcm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 1008',
      Title: 'Academic Support for CHEM 2080',
      Instructor: 'Karen Lagasse (kl658)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 1058',
      Title: 'Academic Support for CHEM 3580',
      Instructor: 'Karen Lagasse (kl658)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 1080',
      Title: 'Introduction to Critical Thinking for the Sciences',
      Instructor: 'Karen Lagasse (kl658)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 1350',
      Title: 'Modeling and Simulation of Real-World Scientific Problems',
      Instructor: 'Karen Lagasse (kl658)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 1570',
      Title: 'Introduction to Organic and Biological Chemistry',
      Instructor: 'Karen Lagasse (kl658)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 2080',
      Title: 'General Chemistry II',
      Instructor: 'Karen Lagasse (kl658)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 2090',
      Title: 'Engineering General Chemistry',
      Instructor: 'Brandon Bogusz (bb677)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 2510',
      Title: 'Introduction to Experimental Organic Chemistry',
      Instructor: 'Brandon Bogusz (bb677)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 2880',
      Title: 'Introductory Physical Chemistry',
      Instructor: 'Brandon Bogusz (bb677)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 2900',
      Title: 'Introductory Physical Chemistry Laboratory',
      Instructor: 'Stephen Lee (sl137)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 3010',
      Title: 'Honors Experimental Chemistry I',
      Instructor: 'Stephen Lee (sl137)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 3030',
      Title: 'Honors Experimental Chemistry III',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 3580',
      Title: 'Organic Chemistry for the Life Sciences',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 3590',
      Title: 'Honors Organic Chemistry I',
      Instructor: 'Cynthia Kinsland (clk10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 3900',
      Title: 'Honors Physical Chemistry II',
      Instructor: 'Robert DiStasio (rad332)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4040',
      Title: 'Entrepreneurship in Chemical Enterprise',
      Instructor: 'Robert DiStasio (rad332)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4100',
      Title: 'Inorganic Chemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4210',
      Title: 'Introduction to Inorganic Chemistry Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4330',
      Title: 'Introduction to Analytical Chemistry Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4610',
      Title: 'Introduction to Organic Chemistry Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4770',
      Title: 'Introduction to Physical Chemistry Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4810',
      Title: 'Computational Methods in Chemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 4980',
      Title: 'Honors Seminar',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 5110',
      Title: 'Chemical Facilities Boot Camp',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 5120',
      Title: 'Capstone Research Project',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 5810',
      Title: 'Computational Methods in Chemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 6070',
      Title: 'Solid State Chemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 6250',
      Title: 'Advanced Analytical Chemistry I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 6290',
      Title: 'Electrochemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 6660',
      Title: 'Synthetic Organic Chemistry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 6900',
      Title: 'Honors Physical Chemistry II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 7880',
      Title: 'Modern Methods in Structural Biology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 7910',
      Title: 'Advanced Spectroscopy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 7940',
      Title: 'Quantum Mechanics II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEM 7960',
      Title: 'Statistical Mechanics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 1510',
      Title: 'Modeling and Simulation of Real-World Scientific Problems',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 3010',
      Title: 'Career Perspectives',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 3230',
      Title: 'Fluid Mechanics',
      Instructor: 'Susan Daniel (sd386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 3320',
      Title: 'Analysis of Separation Processes',
      Instructor: 'Sarah Hormozi (sh2365)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 3720',
      Title: 'Introduction to Process Dynamics and Control',
      Instructor: 'Sarah Hormozi (sh2365)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 3900',
      Title: 'Chemical Kinetics and Reactor Design',
      Instructor: 'Yong Joo (ylj2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 4020',
      Title: 'Molecular Principles of Biomedical Engineering',
      Instructor: 'Yong Joo (ylj2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 4620',
      Title: 'Chemical Engineering Design',
      Instructor: 'James Engstrom (jre7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 4900',
      Title: 'Undergraduate Projects in Chemical Engineering',
      Instructor: 'Sijin Li (sl3276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 4980',
      Title: 'Design and Testing of the Chemical Engineering Car',
      Instructor: 'Sijin Li (sl3276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 4981',
      Title: 'Engineers for a Sustainable World: Biofuels Design Projects',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 4998',
      Title: 'International Research Internship',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5207',
      Title: 'Petroleum Refining Processes and Economics',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5240',
      Title: 'Chemical Process Safety Management',
      Instructor: 'Ilana Brito (ilb8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5440',
      Title: 'Advanced Principles of Biomolecular Engineering',
      Instructor: 'Alex Woltornist (aw499)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5540',
      Title: 'Principles of Molecular Simulation',
      Instructor: 'Alex Woltornist (aw499)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5650',
      Title: 'Design Project',
      Instructor: 'Alex Woltornist (aw499)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5710',
      Title: 'Lean Operations Design and Process Optimization',
      Instructor: 'Simon Coulson (scc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5862',
      Title: 'Introduction to Electronic Materials',
      Instructor: 'Simon Coulson (scc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5880',
      Title: 'Energy Seminar II',
      Instructor: 'Simon Coulson (scc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5990',
      Title: 'Medical and Industrial Biotechnology Seminar',
      Instructor: 'Simon Coulson (scc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 5999',
      Title: 'Special Projects in Chemical Engineering',
      Instructor: 'Alex Woltornist (aw499)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6400',
      Title: 'Polymeric Materials',
      Instructor: 'Simon Coulson (scc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6660',
      Title: 'Analysis of Sustainable Energy Systems',
      Instructor: 'Alfred Center (ac222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6662',
      Title: 'Solar Energy Module',
      Instructor: 'Alfred Center (ac222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6663',
      Title: 'Geothermal Energy Module',
      Instructor: 'Alfred Center (ac222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6670',
      Title: 'Fossil Fuels Module',
      Instructor: 'Alex Woltornist (aw499)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6681',
      Title: 'Energy Analysis Project',
      Instructor: 'Qiuming Yu (qy10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 6880',
      Title: 'Industrial Big Data Analytics and Machine Learning',
      Instructor: 'Alex Woltornist (aw499)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 7130',
      Title: 'Chemical Kinetics and Transport',
      Instructor: 'Sijin Li (sl3276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 7410',
      Title: 'Selected Topics in Biochemical Engineering',
      Instructor: 'T. Michael Duncan (tmd10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 7740',
      Title: 'Principles of Molecular Simulation',
      Instructor: 'James Engstrom (jre7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 7770',
      Title: 'Advanced Principles of Biomolecular Engineering',
      Instructor: 'Susan Daniel (sd386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 7900',
      Title: 'Chemical Engineering Seminar',
      Instructor: 'David Putnam (dap43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHEME 7930',
      Title: 'Peer Mentoring and Leadership Essentials',
      Instructor: 'Matthew DeLisa (md255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 1102',
      Title: 'Beginning Mandarin II',
      Instructor: 'Stephanie Divo (sah36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 1110',
      Title:
        'Beginning Chinese Reading and Writing for Students of Chinese Heritage II',
      Instructor: 'Stephanie Divo (sah36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 1122',
      Title: 'Beginning Mandarin for Professional Students II',
      Instructor: 'Jyun-hong Lu (jl3275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 1124',
      Title: 'Beginning Mandarin for Professional Students IV',
      Instructor: 'Su George (wsg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 2202',
      Title: 'Intermediate Mandarin II',
      Instructor: 'Su George (wsg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 2210',
      Title:
        'Intermediate Chinese Reading and Writing for Students of Chinese Heritage II',
      Instructor: 'Stephanie Divo (sah36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 3302',
      Title: 'High Intermediate Mandarin II',
      Instructor: 'Fangfang Li (fl223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 4412',
      Title: 'Advanced Mandarin II',
      Instructor: 'Rui Liu (rl264)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHIN 4428',
      Title: 'High Advanced Mandarin II',
      Instructor: 'Mia Gong (zg247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHLIT 2214',
      Title: 'Introduction to Classical Chinese II',
      Instructor: 'Robin McNeal (rm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHLIT 4420',
      Title: 'Tang Poetry: Themes and Contexts',
      Instructor: 'Ding Xiang Warner (dxw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHLIT 4422',
      Title: 'Directed Study',
      Instructor: 'Robin McNeal (rm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHLIT 6616',
      Title: 'Studies in Medieval Chinese Literature and Culture',
      Instructor: 'Ding Xiang Warner (dxw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHLIT 6620',
      Title: 'Tang Poetry: Themes and Contexts',
      Instructor: 'Ding Xiang Warner (dxw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CHLIT 6622',
      Title: 'Advanced Directed Reading',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 1531',
      Title: 'FWS: Greek Myth',
      Instructor: 'Emmy Shanahan (egs77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 1632',
      Title: 'Ancient Theater Performance',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2646',
      Title: 'Magic and Witchcraft in the Greco-Roman World',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2680',
      Title: 'War and Peace in Greece and Rome',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2685',
      Title: 'Egyptomania? Egypt and the Greco-Roman World',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2689',
      Title: 'Roman History',
      Instructor: 'Barry Strauss (bss4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2712',
      Title: 'The Ancient Economy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2750',
      Title: 'Introduction to Humanities',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2770',
      Title: 'The Aegean and East Mediterranean Bronze Age c. 3000-1000 BCE',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 2812',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3391',
      Title: 'Independent Study in Sanskrit, Undergraduate Level',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3396',
      Title: 'Advanced Sanskrit II',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3636',
      Title: 'Ancient Beginnings of The Enlightenment: Lucian of Samosata',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3645',
      Title: 'The Tragic Theatre',
      Instructor: 'Eric Rebillard (er97)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3664',
      Title: 'Aristotle',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3674',
      Title: 'Introduction to Indian Philosophy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3686',
      Title: 'Independent Study in Classical Civilization, Undergraduate Level',
      Instructor: 'Astrid Van Oyen (av475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3735',
      Title: 'Archaic and Classical Greece',
      Instructor: 'Kaja Tally-Schumacher (kjt59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 3738',
      Title: 'Identity in the Ancient World',
      Instructor: 'Sturt Manning (sm456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 4681',
      Title: 'Unconventional and Hybrid Warfare in Ancient Greece and Rome',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 4721',
      Title: 'Honors: Senior Essay I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 4722',
      Title: 'Honors: Senior Essay II',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 4752',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Michael Fontaine (mf268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 4756',
      Title: 'Producing Cloth Cultures',
      Instructor: 'Frederick Ahl (fma2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 6681',
      Title: 'Unconventional and Hybrid Warfare in Ancient Greece and Rome',
      Instructor: 'Rachana Kamtekar (rk579)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 7345',
      Title: 'Graduate TA Training',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 7347',
      Title: 'Scholarly Writing in Classics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 7682',
      Title: 'Topics in Ancient History',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 7752',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Annetta Alexandridis (aa376)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CLASS 7770',
      Title: 'The Aegean and East Mediterranean Bronze Age c. 3000-1000 BCE',
      Instructor: 'Astrid Van Oyen (av475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 1101',
      Title: 'Introduction to Cognitive Science',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 1104',
      Title: 'WIM: Introduction to Cognitive Science',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 1105',
      Title: 'Introduction to Linguistics',
      Instructor: 'Helena Aparicio Terrasa (ha425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 1212',
      Title: 'Music on the Brain',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 2150',
      Title: 'Psychology of Language',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 2310',
      Title: 'Introduction to Deductive Logic',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 3140',
      Title: 'Computational Psychology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 3302',
      Title: 'Introduction to Phonetics and Phonology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 3420',
      Title:
        'Human Perception: Application to Computer Graphics, Art, and Visual Display',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4240',
      Title: 'Computational Linguistics I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4310',
      Title: 'Topics in Cognitive Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4425',
      Title: 'Pragmatics',
      Instructor: 'Annie Lewandowski (apl72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4700',
      Title: 'Undergraduate Research in Cognitive Science',
      Instructor: 'Morten Christiansen (mhc27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4710',
      Title: 'Cognitive Science Research Workshop',
      Instructor: 'Harold Hodes (hth3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4720',
      Title: 'Current Research in Emotion, Cognition, and Brain',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 4910',
      Title: 'Research Methods in Psychology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 6101',
      Title: 'Cognitive Science Proseminar',
      Instructor: 'Shimon Edelman (se37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 6420',
      Title:
        'Human Perception: Applications to Computer Graphics, Art, and Visual Display',
      Instructor: 'Draga Zec (dz17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 6425',
      Title: 'Pragmatics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 6910',
      Title: 'Research Methods in Psychology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 7090',
      Title: 'Developmental Psychology',
      Instructor: 'David Field (djf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COGST 7710',
      Title: 'Computational Seminar',
      Instructor: 'Marten van Schijndel (mv443)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COLLS 2001',
      Title: 'College Scholar Seminar',
      Instructor: 'Michael Goldstein (mhg26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COLLS 3970',
      Title: 'Independent Study - Senior Project',
      Instructor: 'Annetta Alexandridis (aa376)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COLLS 4990',
      Title: 'Honors Research I',
      Instructor: 'Ken Roberts ()'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COLLS 4991',
      Title: 'Honors Research II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1104',
      Title: 'FWS: Reading Films',
      Instructor: 'Junting Huang (jh2358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1105',
      Title: 'FWS: Books with Big Ideas',
      Instructor: 'Amrita Chakraborty (ac2847)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1106',
      Title: 'FWS: Robots',
      Instructor: 'Nitzan Tal (nt354)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1119',
      Title: 'FWS: A Taste of Russian Literature',
      Instructor: 'Jessica Ness (jln84)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1134',
      Title: 'FWS: Reading Poetry',
      Instructor: 'Elias Beltran (ejb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1136',
      Title: 'FWS: Rhetorics of Race',
      Instructor: 'Tianyi Shou (ts833)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 1137',
      Title:
        'FWS: Wonderful Things: Orientalism in Art, Literature and Culture',
      Instructor: 'Kholoud Hussein (kbh68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2000',
      Title: 'Introduction to Visual Studies',
      Instructor: 'Marc Kohlbry (mck222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2003',
      Title: 'Sounding Literature in the World',
      Instructor: 'Raissa Krivitsky (rvk3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2032',
      Title: 'Contemporary Narratives by Latina Writers',
      Instructor: 'Didi Park (dp625)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2035',
      Title: 'Science Fiction',
      Instructor: 'Parisa Vaziri (pv248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2050',
      Title: 'Introduction to Poetry',
      Instructor: 'Kholoud Hussein (kbh68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2241',
      Title: 'Game of Thrones: Multi-Media Fantasies',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2703',
      Title: 'Thinking Media',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 2750',
      Title: 'Introduction to Humanities',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3021',
      Title: 'Literary Theory on the Edge',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3115',
      Title: 'Video and New Media: Art, Theory, Politics',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3262',
      Title: 'Global Cinema II',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3336',
      Title: 'Border Environments',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3440',
      Title: 'The Tragic Theatre',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3486',
      Title: 'Ruined Landscapes and the Visual Archive',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3550',
      Title: 'Decadence',
      Instructor: 'Junting Huang (jh2358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3580',
      Title: 'Imagining Migration in Film and Literature',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3636',
      Title: 'Ancient Beginnings of The Enlightenment: Lucian of Samosata',
      Instructor: 'Anindita Banerjee (ab425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3744',
      Title: 'Modern Sephardi and Mizrahi Identities',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3780',
      Title: 'What is a People? The Social Contract and its Discontents',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3811',
      Title: 'Theory and Practice of Translation',
      Instructor: 'Nancy Pollak (np27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 3985',
      Title: 'Literature of Leaving China',
      Instructor: 'Andrea Bachner (asb76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4008',
      Title: 'Literature and Relationality',
      Instructor: 'Erik Born (ecb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4200',
      Title: 'Independent Study',
      Instructor: 'Karen Pinkus (kep44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4240',
      Title: 'The Animal',
      Instructor: 'Philip Lorenz (pal37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4251',
      Title: 'Existentialism',
      Instructor: 'Timothy Murray (tcm1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4354',
      Title: 'Media and Experience',
      Instructor: 'Jessica Bardsley (jb2368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4423',
      Title: 'The City: Asia',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4809',
      Title: 'Global Networks',
      Instructor: 'Frederick Ahl (fma2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4930',
      Title: 'Senior Essay',
      Instructor: 'Patricia Keller (pmk73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 4940',
      Title: 'Senior Essay',
      Instructor: 'Ellis Hanson (eh36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6136',
      Title: 'Empathy: Affects and Sociality in Literature and Theory',
      Instructor: 'Sabine Haenni (sh322)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6159',
      Title: 'Literary Theory on the Edge',
      Instructor: 'Michael Fontaine (mf268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6200',
      Title: 'Independent Study',
      Instructor: 'Deborah Starr (das86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6336',
      Title: 'Border Environments',
      Instructor: 'Tracy McNulty (tkm9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6354',
      Title: 'Media and Experience',
      Instructor: 'Nancy Pollak (np27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6623',
      Title: 'The City: Asia',
      Instructor: 'Nick Admussen (na347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6685',
      Title: 'Literature of Leaving China',
      Instructor: 'Eman Ghanayem (eag249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6809',
      Title: 'Global Networks',
      Instructor: 'Tracy McNulty (tkm9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COML 6850',
      Title: 'Gramsci and Cultural Politics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 1300',
      Title: 'Visual Communication',
      Instructor: 'Diane Bailey (deb332)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 2010',
      Title: 'Oral Communication',
      Instructor: 'Diane Bailey (deb332)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 2310',
      Title: 'Writing about Communication',
      Instructor: 'Diane Bailey (deb332)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 2450',
      Title: 'Communication and Technology',
      Instructor: 'Diane Bailey (deb332)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 2760',
      Title: 'Persuasion and Social Influence',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 2850',
      Title: 'Communication, Environment, Science, and Health',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 2990',
      Title: 'Directed Research Experience',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3010',
      Title: 'Writing and Producing the Narrative for Digital Media',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3080',
      Title:
        'Capstone Course in Environmental and Sustainability Communication: From the Lab to the World',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3110',
      Title: 'Educational Psychology',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3200',
      Title: 'New Media and Society',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3210',
      Title: 'Communication and the Environment',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3450',
      Title: 'Human-Computer Interaction Design',
      Instructor: 'Jodi Cohen (jrc442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3760',
      Title: 'Planning Communication Campaigns',
      Instructor: 'Lauren Chambliss (elc55)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 3800',
      Title: 'Television in the Digital Age',
      Instructor: 'Lauren Chambliss (elc55)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4201',
      Title: 'Information Policy: Applied Research and Analysis',
      Instructor: 'Chao Yu (cy395)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4220',
      Title: 'Psychology of Entertainment Media',
      Instructor: 'Poppy McLeod (plm29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4400',
      Title: 'Qualitative User Research and Design Methods',
      Instructor: 'Jonathon Schuldt (jps56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4450',
      Title: 'Computer-Mediated Communication',
      Instructor: 'Dawn Schrader (des14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4490',
      Title: 'Social Behavior and Technology',
      Instructor: 'Neil Lewis (nal46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4760',
      Title: 'Population Health Communication',
      Instructor: 'Katherine Sender (ks785)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4800',
      Title: 'Behavioral Science Interventions',
      Instructor: 'Christopher Byrne (cpb76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4940',
      Title: 'Special Topics in Communication',
      Instructor: 'Christopher Byrne (cpb76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4970',
      Title: 'Individual Study in Communication',
      Instructor: 'Lauren Chambliss (elc55)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4980',
      Title: 'Communication Teaching Experience',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 4990',
      Title: 'Independent Research',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 5660',
      Title: 'Science Communication Workshop',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 5800',
      Title: 'Behavioral Science Interventions',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 6450',
      Title: 'Computer-Mediated Communication',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 6490',
      Title: 'Social Behavior and Technology',
      Instructor: 'Claire Wardle (cw736)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 6810',
      Title: 'Advanced Communication Theory',
      Instructor: 'Danielle Eiseman (dle58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 6830',
      Title: 'Qualitative Research Methods in Communication',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 7970',
      Title: 'Graduate Independent Study',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 7990',
      Title: 'Graduate Research',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'COMM 9900',
      Title: 'Doctoral-Level Dissertation Research',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 1101',
      Title: 'The Global City',
      Instructor: 'Victoria Beard (vab57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 1109',
      Title: 'FWS: Cities and Regions',
      Instructor: 'Thomas Campanella (tc538)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 2010',
      Title: 'People, Planning, and Politics in the City',
      Instructor: 'John Forester (jff1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3001',
      Title: 'MentURS II',
      Instructor: 'Thomas Campanella (tc538)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3072',
      Title: 'Land Use, Environmental Planning, and Urban Design Workshop',
      Instructor: 'George Frantz (grf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3348',
      Title: 'Design Connect',
      Instructor: 'Michael Tomlan (mat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3720',
      Title: 'Contemporary Italy: Politics and Society',
      Instructor: 'Gregory Smith (gos2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3723',
      Title: 'European Cities',
      Instructor: 'Serena Muccitelli (sm2522)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3850',
      Title: 'Special Topics in Planning',
      Instructor: 'Pedro Molina (pjm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 3900',
      Title: 'City and Regional Futures: Planning Practice, Policy and Design',
      Instructor: 'Neema Kudva (nk78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4040',
      Title: 'Urban Economics',
      Instructor: 'Xue Zhang (xz435)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4160',
      Title: 'Rome Workshop',
      Instructor: 'Linda Shi (ls886)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4440',
      Title: 'Resource Management and Environment Law',
      Instructor: 'Nancy Brooks (nb275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4590',
      Title: 'Legal Aspects of Land Use Planning',
      Instructor: 'Gregory Smith (gos2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4680',
      Title: 'Urban Spatial Data Analytics',
      Instructor: 'Gregory Smith (gos2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4770',
      Title: 'Seminar on Issues in African Development',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4900',
      Title: 'Student-Faculty Research',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4920',
      Title: 'Undergraduate Honors Thesis Research',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4930',
      Title: 'Undergraduate Honors Thesis Writing',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 4970',
      Title: 'Independent Study',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5040',
      Title: 'Urban Economics',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5072',
      Title: 'Land Use, Environmental Planning, and Urban Design Workshop',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5074',
      Title: 'Economic and Community Development Workshop',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5076',
      Title: 'International Planning and Development Workshop',
      Instructor: 'Stephan Schmidt (sjs96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5080',
      Title: 'Introduction to GIS for Planners',
      Instructor: "N'Dri Assie-Lumumba (na12)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5120',
      Title: 'Public and Spatial Economics for Planners',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5160',
      Title: 'Rome Workshop',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5250',
      Title: 'Introductory Methods of Planning Analysis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5320',
      Title: 'Real Estate Development Process I',
      Instructor: 'Gerard Finin (gaf24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5321',
      Title: 'Real Estate Development Process II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5348',
      Title: 'Design Connect',
      Instructor: 'Nancy Brooks (nb275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5370',
      Title: 'Real Estate Seminar Series',
      Instructor: 'Mitchell Glass (mjg374)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5440',
      Title: 'Resource Management and Environmental Law',
      Instructor: 'George Frantz (grf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5460',
      Title: 'Introduction to Community and Environment Dispute Resolution',
      Instructor: 'Mildred Warner (mew15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5530',
      Title: 'Land Use and Spatial Planning Methods',
      Instructor: 'George Frantz (grf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5545',
      Title: 'Urban Adaptation to Climate Change',
      Instructor: 'Waishan Qiu (wq43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5563',
      Title: 'Real Estate Project Workshop',
      Instructor: 'Nancy Brooks (nb275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5590',
      Title: 'Legal Aspects of Land Use Planning',
      Instructor: 'Gregory Smith (gos2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5630',
      Title: 'Problems in Contemporary Preservation Practice',
      Instructor: 'Gregory Smith (gos2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5640',
      Title: 'Building Materials Conservation',
      Instructor: 'John Carruthers (jc3474)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5680',
      Title: 'Urban Spatial Data Analytics',
      Instructor: 'Bradford Wellstead (baw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5720',
      Title: 'Contemporary Italy: Politics and Society',
      Instructor: 'Bradford Wellstead (baw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5723',
      Title: 'European Cities',
      Instructor: 'Michael Tomlan (mat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 5850',
      Title: 'Special Topics',
      Instructor: 'Cody Danks Burke (cad54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6490',
      Title: 'Special Topics: Social-Policy Planning',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6560',
      Title: 'Real Estate Transactions and Deal Structuring',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6597',
      Title: 'Real Estate Competitions II: ULI Hines',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6610',
      Title: 'Seminar in American Urban History',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6720',
      Title: 'International Institutions',
      Instructor: 'John Forester (jff1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6770',
      Title: 'Seminar on Issues in African Development',
      Instructor: 'Jennifer Minner (jm2359)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6901',
      Title: 'Real Estate Review',
      Instructor: 'Linda Shi (ls886)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 6940',
      Title: 'Planning Internship in Rome',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 7850',
      Title: 'City and Regional Futures: Planning Practice, Policy and Design',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 7940',
      Title: 'Planning Internship',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 7970',
      Title: 'Independent Study for Graduate Students',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8900',
      Title: 'Planning Research Seminar',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8901',
      Title: 'M.R.P. Exit Project: Research',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8902',
      Title: 'M.R.P. Exit Project: Research Paper-Writing',
      Instructor: 'Nathaniel Guest (ncg1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8904',
      Title: 'M.R.P. Exit Project: Professional Report-Writing',
      Instructor: 'Kristen Olson (kev8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8906',
      Title: 'M.R.P. Exit Project: Thesis-Writing',
      Instructor: 'Stephan Schmidt (sjs96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8910',
      Title: 'Masters Thesis in Regional Science',
      Instructor: 'Gregory Smith (gos2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 8950',
      Title: 'Masters Thesis in Historic Preservation Planning',
      Instructor: 'Serena Muccitelli (sm2522)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CRP 9920',
      Title: 'Doctoral Dissertation',
      Instructor: 'Pedro Molina (pjm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1110',
      Title: 'Introduction to Computing Using Python',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1112',
      Title: 'Introduction to Computing Using MATLAB',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1132',
      Title: 'Short Course in MATLAB',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1133',
      Title: 'Short Course in Python',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1300',
      Title: 'Introductory Design and Programming for the Web',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1340',
      Title: 'Choices and Consequences in Computing',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1380',
      Title: 'Data Science for All',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1710',
      Title: 'Introduction to Cognitive Science',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 1998',
      Title: 'Freshmen and Nontechnical Team Projects',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 2043',
      Title: 'UNIX Tools and Scripting',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 2110',
      Title: 'Object-Oriented Programming and Data Structures',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 2111',
      Title: 'Programming Practicum',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 2300',
      Title: 'Intermediate Design and Programming for the Web',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 2800',
      Title: 'Discrete Structures',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 3110',
      Title: 'Data Structures and Functional Programming',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 3152',
      Title: 'Introduction to Computer Game Architecture',
      Instructor: 'Lillian Lee (ljl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 3410',
      Title: 'Computer System Organization and Programming',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 3420',
      Title: 'Embedded Systems',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4090',
      Title: 'Teaching Experience in Computer Science',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4120',
      Title: 'Introduction to Compilers',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4121',
      Title: 'Practicum in Compilers',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4152',
      Title: 'Advanced Topics in Computer Game Architecture',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4160',
      Title: 'Formal Verification',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4220',
      Title: 'Numerical Analysis: Linear and Nonlinear Problems',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4410',
      Title: 'Operating Systems',
      Instructor: 'Kit-Yee Daisy Fan (kdf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4411',
      Title: 'Practicum in Operating Systems',
      Instructor: 'Craig Frey (ccf27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4670',
      Title: 'Introduction to Computer Vision',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4700',
      Title: 'Foundations of Artificial Intelligence',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4701',
      Title: 'Practicum in Artificial Intelligence',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4744',
      Title: 'Computational Linguistics I',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4758',
      Title: 'Autonomous Mobile Robots',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4780',
      Title: 'Introduction to Machine Learning',
      Instructor: 'Karen Levy (kl838)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4783',
      Title: 'Mathematical Foundations of Machine Learning',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4789',
      Title: 'Introduction to Reinforcement Learning',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4810',
      Title: 'Introduction to Theory of Computing',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4820',
      Title: 'Introduction to Analysis of Algorithms',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4830',
      Title: 'Introduction to Cryptography',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4850',
      Title: 'Mathematical Foundations for the Information Age',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4852',
      Title: 'Networks II: Market Design',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4997',
      Title: 'Practical Training in Computer Science',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4998',
      Title: 'Team Projects',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 4999',
      Title: 'Independent Reading and Research',
      Instructor: 'Noah Stephens-Davidowitz (nhs59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5120',
      Title: 'Introduction to Compilers',
      Instructor: 'Curran Muhlberger (cdm89)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5121',
      Title: 'Practicum in Compilers',
      Instructor: 'Ronald DiNapoli (rd29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5135',
      Title: 'Computational Integer Programming',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5150',
      Title: 'Software Engineering',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5152',
      Title: 'Advanced Topics in Computer Game Architecture',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5160',
      Title: 'Formal Verification',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5223',
      Title: 'Numerical Analysis: Linear and Nonlinear Problems',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5304',
      Title: 'Data Science in the Wild',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5356',
      Title: 'Building Startup Systems',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5410',
      Title: 'Operating Systems',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5411',
      Title: 'Practicum in Operating Systems',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5412',
      Title: 'Cloud Computing',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5433',
      Title: 'Blockchains, Cryptocurrencies, and Smart Contracts',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5436',
      Title: 'Privacy in the Digital Age',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5625',
      Title: 'Interactive Computer Graphics',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5670',
      Title: 'Introduction to Computer Vision',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5678',
      Title: 'Topics in Mixed Reality',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5700',
      Title: 'Foundations of Artificial Intelligence',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5726',
      Title: 'Learning, Inference, and Decision Making from Data',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5758',
      Title: 'Autonomous Mobile Robots',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5780',
      Title: 'Introduction to Machine Learning',
      Instructor: 'David Gries (djg17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5783',
      Title: 'Mathematical Foundations of Machine Learning',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5787',
      Title: 'Deep Learning',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5789',
      Title: 'Introduction to Reinforcement Learning',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5820',
      Title: 'Introduction to Analysis of Algorithms',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5830',
      Title: 'Cryptography',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5850',
      Title: 'Mathematical Foundations for the Information Age',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5998',
      Title: 'Master of Engineering Internship',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 5999',
      Title: 'Master of Engineering Project',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6110',
      Title: 'Advanced Programming Languages',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6120',
      Title: 'Advanced Compilers',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6156',
      Title: 'Runtime Verification',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6210',
      Title: 'Matrix Computations',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6382',
      Title: 'Data Science for Social Change',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6682',
      Title: 'Computation for Content Creation',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6740',
      Title: 'Advanced Language Technologies',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6741',
      Title: 'Topics in Natural Language Processing and Machine Learning',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6751',
      Title: 'Robot Manipulation',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6764',
      Title: 'Reasoning about Knowledge',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6784',
      Title: 'Advanced Topics in Machine Learning',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 6785',
      Title: 'Deep Probabilistic and Generative Models',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7090',
      Title: 'Computer Science Colloquium',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7190',
      Title: 'Seminar in Programming Languages',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7194',
      Title: 'Great Works in Programming Languages',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7290',
      Title: 'Seminar on Scientific Computing and Numerics',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7390',
      Title: 'Database Seminar',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7420',
      Title: 'Special Topics in Computer Systems',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7490',
      Title: 'Systems Research Seminar',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7690',
      Title: 'Computer Graphics and Vision Seminar',
      Instructor: 'Anke van Zuylen (avz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7790',
      Title: 'Seminar in Artificial Intelligence',
      Instructor: 'Justin Hsu (jah659)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7794',
      Title: 'Seminar in Natural Language Understanding',
      Instructor: 'Justin Hsu (jah659)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7796',
      Title: 'Robotics Seminar',
      Instructor: 'Justin Hsu (jah659)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7890',
      Title: 'Seminar in Theory of Algorithms and Computing',
      Instructor: 'Justin Hsu (jah659)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CS 7999',
      Title: 'Independent Research',
      Instructor: 'Justin Hsu (jah659)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CZECH 1132',
      Title: 'Elementary Czech II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'CZECH 1134',
      Title: 'Intermediate Czech II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 1050',
      Title: 'Career Explorations',
      Instructor: 'So-Yeon Yoon (sy492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 1150',
      Title: 'Design Graphics and Visualization',
      Instructor: 'So-Yeon Yoon (sy492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 2025',
      Title: 'Impactful Graphics: Visual Communication for Social Impact',
      Instructor: 'Nooshin Ahmadi (ne237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 2200',
      Title:
        'Art and Science: Sustainability, Multiculturalism and Transdisciplinarity',
      Instructor: 'Renata Leitao (rml273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 2203',
      Title: 'StudioSHIFT',
      Instructor: 'Renata Leitao (rml273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 2730',
      Title: 'Human Centered Design Methods',
      Instructor: 'Cindy Hsin-Liu Kao (hk932)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 2750',
      Title: 'Lighting Design: Light InForming Space',
      Instructor: 'Rhonda Gilmore (rg35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 3050',
      Title: 'Construction Documentation: CAD and BIM',
      Instructor: 'Rhonda Gilmore (rg35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 3055',
      Title: 'Hospitality, Health and Design Industry Immersion Seminar',
      Instructor: 'Keith Green (keg95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 3302',
      Title: 'Sustainable Consumerism: The New Typologies Studio',
      Instructor: 'Rhonda Gilmore (rg35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 3306',
      Title: 'Generative Design Studio',
      Instructor: 'Roberta Militello (rjm32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 3308',
      Title: 'Positive Design Studio',
      Instructor: 'Nicolas Ziebarth (nrz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 3550',
      Title: 'Research Methods in Human-Environment Relations',
      Instructor: 'Cynthia Kaufman (cak17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4000',
      Title: 'Directed Readings',
      Instructor: 'Saleh Kalantari (sk3268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4010',
      Title: 'Empirical Research',
      Instructor: 'Jay Yoon (jy846)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4020',
      Title: 'Supervised Fieldwork',
      Instructor: 'Janet Loebach (jel357)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4030',
      Title: 'Teaching Apprenticeship',
      Instructor: 'John Elliott (jre15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4040',
      Title: 'Professional Practices and Ethics',
      Instructor: 'Gary Evans (gwe1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4220',
      Title: 'Ecological Literacy and Design',
      Instructor: 'Rhonda Gilmore (rg35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4230',
      Title: 'Restaurant Charrette: Design Without Reservations',
      Instructor: 'Keith Green (keg95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4402',
      Title: 'Disruptive Design: Competitions Studio',
      Instructor: 'Ying Hua (yh294)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4700',
      Title: 'Applied Ergonomic Methods',
      Instructor: 'Saleh Kalantari (sk3268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 4990',
      Title: 'Senior Honors Thesis',
      Instructor: 'Cindy Hsin-Liu Kao (hk932)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 5304',
      Title: 'Design Accountability: Evaluation of the Physical Environment',
      Instructor: 'Renata Leitao (rml273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 5500',
      Title: 'Designing Atmospheres',
      Instructor: 'Janet Loebach (jel357)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 5540',
      Title: 'Workplace Strategy Studio',
      Instructor: 'Mardelle Shepley (mms449)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 5700',
      Title: 'Designing Age Friendly Environments',
      Instructor: 'Nancy Wells (nmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6000',
      Title: 'Special Problems for Graduates',
      Instructor: 'Jay Yoon (jy846)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6010',
      Title: 'Directed Readings',
      Instructor: 'So-Yeon Yoon (sy492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6020',
      Title: 'Graduate Empirical Research',
      Instructor: 'Rana Zadeh (rs952)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6030',
      Title: 'Graduate Practicum',
      Instructor: 'Leighton Beaman (mlb442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6055',
      Title: 'Hospitality, Health and Design Industry Immersion Seminar',
      Instructor: 'Leighton Beaman (mlb442)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6100',
      Title: 'Studies in Design Thinking',
      Instructor: 'John Elliott (jre15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6406',
      Title: 'Generative Design Studio',
      Instructor: 'Gary Evans (gwe1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6550',
      Title: 'Healthcare Innovations',
      Instructor: 'Rhonda Gilmore (rg35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 6700',
      Title: 'Applied Ergonomic Methods',
      Instructor: 'Keith Green (keg95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 7100',
      Title: 'DEA Graduate Pro Seminar',
      Instructor: 'Ying Hua (yh294)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 8990',
      Title: "Master's Thesis and Research",
      Instructor: 'Saleh Kalantari (sk3268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DEA 9990',
      Title: 'Ph.D. Thesis and Research',
      Instructor: 'Cindy Hsin-Liu Kao (hk932)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 1297',
      Title: 'Coding for Design I',
      Instructor: 'Panagiotis Michalatos (pm586)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 4197',
      Title: 'Special Topics in Design II',
      Instructor: 'Xue Zhang (xz435)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 4297',
      Title: 'Coding for Design II',
      Instructor: 'Jenny Sabin (jes557)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 4680',
      Title: 'Urban Spatial Data Analytics',
      Instructor: 'Panagiotis Michalatos (pm586)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 5680',
      Title: 'Urban Spatial Data Analytics',
      Instructor: 'Stephan Schmidt (sjs96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 6197',
      Title: 'Special Topics in Design III',
      Instructor: 'Stephan Schmidt (sjs96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DESIGN 6297',
      Title: 'Coding for Design III',
      Instructor: 'Xue Zhang (xz435)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 1101',
      Title: 'Introduction to Sociology',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 1104',
      Title:
        'Global Development Internship Pre-Departure Course: Unit I: Preparing for Engagement',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 1200',
      Title: 'FWS: Topics in Development Sociology',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 2070',
      Title: 'Social and Economic Dimensions of Development',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 2090',
      Title: 'Social Inequality',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 2201',
      Title: 'Society and Natural Resources',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 2210',
      Title: 'Designing and Facilitating Learning for Development',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 2710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3100',
      Title:
        'Foundations in Leadership: Skills for Professional Success and Life',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3104',
      Title:
        'Global Development Internship Pre-Departure Course: Unit II: Preparing for Your Internship',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3130',
      Title: 'Social Indicators and Introduction to Social Science Research',
      Instructor: 'Tom Hirschl (tah4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3240',
      Title: 'Environmental Sociology',
      Instructor: 'Julie Ficarra (jmf389)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3305',
      Title: 'Planning for Change',
      Instructor: 'Isha Bhatnagar (ib273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3510',
      Title: 'Engaged Learning through Extension, Outreach, and Instruction',
      Instructor: 'Ewan Robinson (esr77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 3700',
      Title: 'Comparative Social Inequalities',
      Instructor: 'George Spisak (gas33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4700',
      Title: 'Senior Capstone Course',
      Instructor: 'George Spisak (gas33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4721',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: 'Scott Peters (sp236)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4750',
      Title: 'Environmental Justice and Policy',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4770',
      Title: 'Seminar on Issues in African Development',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4940',
      Title: 'Special Topics in Development Sociology',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4970',
      Title: 'Independent Study in Development Sociology',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4980',
      Title: 'Teaching Experience in Development Sociology',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 4990',
      Title: 'Independent Research in Development Sociology',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 5130',
      Title: 'Social Indicators and Introduction to Social Science Research',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 5223',
      Title: 'Lifelong Learning, Just Sustainability and Learning Ecosystems',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 5305',
      Title: 'Planning for Change',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 5710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 5750',
      Title: 'Environmental Justice and Policy',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 6150',
      Title: 'Qualitative Research Methods',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 6340',
      Title: 'Risk and Disaster',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 6620',
      Title: 'The Social Life of Land',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 6770',
      Title: 'Seminar on Issues in African Development',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 6940',
      Title: 'Special Topics in Development Sociology',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 7900',
      Title: 'Graduate-Level Thesis Research',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 7910',
      Title: 'Teaching Experience',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 8900',
      Title: "Master's Level Thesis Research",
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DSOC 9900',
      Title: 'Doctoral-Level Thesis Research',
      Instructor: 'Annalisa Raymer (alr26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DUTCH 2040',
      Title: 'Intermediate Dutch II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DUTCH 3021',
      Title: 'Advanced Dutch II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'DUTCH 5010',
      Title: '17th Century Dutch Texts',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 1180',
      Title: 'How to Build a Habitable Planet',
      Instructor: 'Megan Holycross (meh374)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 1340',
      Title: 'Introductory Weather Analysis and Forecasting',
      Instructor: 'Mark Wysocki (mww3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 1600',
      Title: 'Environmental Physics',
      Instructor: 'Arthur Degaetano (atd2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 1700',
      Title: 'Evolution of the Earth and Life',
      Instructor: 'Robert Ross (rmr16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 2250',
      Title: 'The Earth System',
      Instructor: 'Larry Brown (ldb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 2500',
      Title: 'Meteorological Observations and Instruments',
      Instructor: 'Larry Brown (ldb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 2680',
      Title: 'Climate and Global Warming',
      Instructor: 'Larry Brown (ldb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 3090',
      Title: 'Earth Materials',
      Instructor: 'Sara Pryor (sp2279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 3420',
      Title: 'Atmospheric Dynamics',
      Instructor: 'Sara Pryor (sp2279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 3520',
      Title: 'Synoptic Meteorology I',
      Instructor: 'Flavio Lehner (fl439)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 3540',
      Title: 'Ocean Satellite Remote Sensing',
      Instructor: 'Esteban Gazel (eg588)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 3555',
      Title: 'Marine Microbes and Disease in a Changing Ocean',
      Instructor: 'Esteban Gazel (eg588)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 3880',
      Title: 'Global Geophysics',
      Instructor: 'Peter Hitchcock (aph28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4050',
      Title: 'Active Tectonics',
      Instructor: 'Angeline Pendergrass (agp93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4370',
      Title: 'Field Geophysics',
      Instructor: 'Bruce Monger (bcm3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4444',
      Title:
        'Climate Smart Communities: State and Local Climate Change Science and Policy',
      Instructor: 'Bruce Monger (bcm3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4570',
      Title: 'Atmospheric Air Pollution',
      Instructor: 'Ian Hewson (ih88)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4700',
      Title: 'Advanced Weather Forecasting and Analysis',
      Instructor: 'Matthew Pritchard (mp337)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4710',
      Title: 'Introduction to Groundwater',
      Instructor: 'Rowena Lohman (rbl62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4740',
      Title: 'Quantitative Data Analysis for the Geosciences',
      Instructor: 'Kade Keranen (kmk299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4790',
      Title: 'Paleobiology',
      Instructor: 'Allison Chatrchyan (amc256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4870',
      Title: 'Introduction to Radar Remote Sensing',
      Instructor: 'Mark Wysocki (mww3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4920',
      Title: 'Undergraduate Research',
      Instructor: 'Mark Wysocki (mww3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4940',
      Title: 'Special Topics in Earth and Atmospheric Sciences',
      Instructor: 'Tamme Steenhuis (tss1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4960',
      Title: 'Internship Experience',
      Instructor: 'Geoffrey Abers (gaa52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4970',
      Title: 'Individual Study in Atmospheric Science',
      Instructor: 'Warren Allmon (wda1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4980',
      Title: 'Teaching Experience in Earth and Atmospheric Sciences',
      Instructor: 'Warren Allmon (wda1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 4990',
      Title: 'Undergraduate Research in Atmospheric Science',
      Instructor: 'David Hysell (dlh37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5000',
      Title: 'Master Engineering Design Project',
      Instructor: 'Warren Allmon (wda1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5090',
      Title: 'Earth Materials',
      Instructor: 'Toby Ault (tra38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5420',
      Title: 'Atmospheric Dynamics',
      Instructor: 'Stephen Colucci (sjc25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5740',
      Title: 'Quantitative Data Analysis for the Geosciences',
      Instructor: 'Arthur Degaetano (atd2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5770',
      Title: 'Planetary Surface Processes',
      Instructor: 'Louis Derry (lad9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5850',
      Title: 'Global Geophysics',
      Instructor: 'Patrick Fulton (pmf64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 5870',
      Title: 'Introduction to Radar Remote Sensing',
      Instructor: 'Esteban Gazel (eg588)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 6370',
      Title: 'Field Geophysics',
      Instructor: 'Peter Hess (pgh25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 6540',
      Title: 'Ocean Satellite Remote Sensing',
      Instructor: 'Peter Hitchcock (aph28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 6710',
      Title: 'Introduction to Groundwater',
      Instructor: 'David Hysell (dlh37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 6920',
      Title: 'Special Topics in Earth and Atmospheric Sciences',
      Instructor: 'Teresa Jordan (tej1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 7020',
      Title: 'Thesis Research',
      Instructor: 'Rowena Lohman (rbl62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 7110',
      Title: 'Upper Atmospheric and Space Physics',
      Instructor: 'Natalie Mahowald (nmm63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 7620',
      Title: 'Advanced Topics in Paleobiology',
      Instructor: 'Bruce Monger (bcm3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 7650',
      Title: 'Topics in Paleoecology',
      Instructor: 'Karin Olson Hoal (keo52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 7710',
      Title: 'Advanced Topics in Sedimentology and Stratigraphy',
      Instructor: 'Matthew Pritchard (mp337)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 7930',
      Title: 'Andes-Himalaya Seminar',
      Instructor: 'Sara Pryor (sp2279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 8500',
      Title: "Master's Level Thesis Research in Atmospheric Science",
      Instructor: 'Susan Riha (sjr4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 9500',
      Title: 'Graduate-Level Dissertation Research in Atmospheric Science',
      Instructor: 'Mark Wysocki (mww3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EAS 9510',
      Title: 'Doctoral-Level Dissertation Research in Atmospheric Science',
      Instructor: 'Alexander Hayes (agh4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 1210',
      Title: 'The Computing Technology Inside Your Smartphone',
      Instructor: 'David Albonesi (dha7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 2100',
      Title: 'Introduction to Circuits for Electrical and Computer Engineers',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 2300',
      Title: 'Digital Logic and Computer Organization',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 2720',
      Title: 'Data Science for Engineers',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 2750',
      Title: 'Robot Ethics',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 3100',
      Title:
        'Introduction to Probability and Inference for Random Signals and Systems',
      Instructor: 'Zhiru Zhang (zz284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 3140',
      Title: 'Embedded Systems',
      Instructor: 'Zhiru Zhang (zz284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 3150',
      Title: 'Introduction to Microelectronics',
      Instructor: 'Zhiru Zhang (zz284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 3600',
      Title: 'Ethical Issues in Engineering Practice',
      Instructor: 'Zhiru Zhang (zz284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4180',
      Title: 'Autonomous Mobile Robots',
      Instructor: 'Aaron Wagner (abw35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4271',
      Title:
        'Evolutionary Processes, Evolutionary Algorithms, Evolutionary Games',
      Instructor: 'Aaron Wagner (abw35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4300',
      Title: 'Lasers and Optoelectronics',
      Instructor: 'Aaron Wagner (abw35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4320',
      Title:
        'Integrated Micro Sensors and Actuators: Bridging the Physical and Digital Worlds',
      Instructor: 'Aaron Wagner (abw35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4370',
      Title: 'Photonics: Fundamentals and Devices',
      Instructor: 'Aaron Wagner (abw35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4380',
      Title: 'Electromagnetic and Optical Metamaterials',
      Instructor: 'Park Doing (pad9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4520',
      Title: 'Power Systems and Market Operations',
      Instructor: 'Qing Zhao (qz16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4670',
      Title: 'Digital Communication System Design',
      Instructor: 'Qing Zhao (qz16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4840',
      Title: 'Introduction to Controlled Fusion: Principles and Technology',
      Instructor: 'Qing Zhao (qz16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4870',
      Title: 'Introduction to Radar Remote Sensing',
      Instructor: 'Qing Zhao (qz16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4910',
      Title: 'Principles of Neurophysiology',
      Instructor: 'Qing Zhao (qz16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4920',
      Title: 'ECE Technical Writing',
      Instructor: 'Nils Napp (nen38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4960',
      Title: 'Special Topics in Electrical and Computer Engineering',
      Instructor: 'Nils Napp (nen38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4980',
      Title: 'Supervised Teaching Experience',
      Instructor: 'Nils Napp (nen38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4990',
      Title: 'International Research Internship',
      Instructor: 'Nils Napp (nen38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4998',
      Title: 'Electrical and Computer Engineering Group Projects',
      Instructor: 'Nils Napp (nen38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 4999',
      Title: 'Electrical and Computer Engineering Independent Projects',
      Instructor: 'Nils Napp (nen38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5010',
      Title: 'Professional Seminar for M.Eng. Students',
      Instructor: 'Amal El-Ghazaly (ase63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5090',
      Title: 'Principles of Neurophysiology',
      Instructor: 'Clifford Pollock (crp10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5130',
      Title: 'Systems Analysis Behavior and Optimization',
      Instructor: 'Clifford Pollock (crp10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5210',
      Title: 'Theory of Linear Systems',
      Instructor: 'Clifford Pollock (crp10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5242',
      Title: 'Intelligent Autonomous Systems',
      Instructor: 'Clifford Pollock (crp10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5260',
      Title: 'Graph-Based Data Science for Networked Systems',
      Instructor: 'Clifford Pollock (crp10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5271',
      Title:
        'Evolutionary Processes, Evolutionary Algorithms, Evolutionary Games',
      Instructor: 'Park Doing (pad9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5310',
      Title: 'Quantum Optics for Photonics and Optoelectronics',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5320',
      Title:
        'Integrated Micro Sensors and Actuators: Bridging the Physical and Digital Worlds',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5380',
      Title: 'Electromagnetic and Optical Metamaterials',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5412',
      Title: 'Bayesian Estimation and Stochastic Optimization',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5545',
      Title: 'Machine Learning Hardware and Systems',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5550',
      Title: 'Power Systems and Market Operations',
      Instructor: 'David Delchamps (dfd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5555',
      Title: 'Stochastic Systems: Estimation and Control',
      Instructor: 'Clifford Pollock (crp10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5670',
      Title: 'Digital Communications',
      Instructor: 'Amit Lal (al274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5710',
      Title: 'Datacenter Computing',
      Instructor: 'Amit Lal (al274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5720',
      Title: 'Introduction to Parallel Computing',
      Instructor: 'Amit Lal (al274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5725',
      Title: 'Design with Embedded Operating Systems',
      Instructor: 'Karan Mehta (kkm65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5745',
      Title: 'Complex Digital ASIC Design',
      Instructor: 'Francesco Monticone (fm428)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5760',
      Title: 'Advanced Microcontroller Design',
      Instructor: 'Lang Tong (lt35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5772',
      Title: 'Autonomous Mobile Robots',
      Instructor: 'Peter Doerschuk (pd83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5780',
      Title: 'Computer Analysis of Biomed Images',
      Instructor: 'Peter Doerschuk (pd83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5790',
      Title: 'Advanced High-Speed and RF Integrated Circuits',
      Instructor: 'David Hammer (dah5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5840',
      Title: 'Introduction to Controlled Fusion: Principles and Technology',
      Instructor: 'David Hysell (dlh37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5880',
      Title: 'Energy Seminar II',
      Instructor: 'Bruce Johnson (brj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5960',
      Title: 'Advanced Topics in Electrical and Computer Engineering',
      Instructor: 'Bruce Johnson (brj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5997',
      Title: 'Independent Study',
      Instructor: 'Bruce Johnson (brj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5998',
      Title: 'Directed Research',
      Instructor: 'Bruce Johnson (brj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 5999',
      Title: 'MEng Technical Internship',
      Instructor: 'Van Adams (vha3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 6780',
      Title: 'Multivariable Control Theory',
      Instructor: 'Kirstin Petersen (khp37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 6931',
      Title: 'Master of Engineering Design Project II',
      Instructor: 'Kirsten Petersen (kep15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 6960',
      Title: 'Special Topics in Electrical and Computer Engineering',
      Instructor: 'Kirsten Petersen (kep15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECE 7920',
      Title: 'Thesis Research',
      Instructor: 'Kirsten Petersen (kep15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 1001',
      Title: 'Principles of Micro-Economics Supplement',
      Instructor: 'Albert Alexander (awa2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 1002',
      Title: 'Principles of Macro-Economics Supplement',
      Instructor: 'Albert Alexander (awa2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 1110',
      Title: 'Introductory Microeconomics',
      Instructor: 'Jennifer Wissink (jpw6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 1120',
      Title: 'Introductory Macroeconomics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 2300',
      Title: 'International Trade and Finance',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3030',
      Title: 'Intermediate Microeconomic Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3040',
      Title: 'Intermediate Macroeconomic Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3110',
      Title: 'Probability Models and Inference for the Social Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3120',
      Title: 'Applied Econometrics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3140',
      Title: 'Econometrics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3300',
      Title: 'Development of Economic Thought and Institutions',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3430',
      Title: 'Compensation, Incentives, and Productivity',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3550',
      Title: 'Economics of Developing Countries',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3670',
      Title: 'Behavioral Economics and Public Policy',
      Instructor: 'Terence Alexander (ta425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3710',
      Title: 'The Economics of Risky Health Behaviors',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3800',
      Title: 'Economics and the Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3825',
      Title: 'Networks II: Market Design',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3855',
      Title: 'Urban Economics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3865',
      Title: 'Environmental Economics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 3875',
      Title: 'Policy Analysis: Welfare Theory, Agriculture, and Trade',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4020',
      Title: 'Game Theory I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4022',
      Title: 'Game Theory II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4110',
      Title: 'Cross Section and Panel Econometrics',
      Instructor: 'Arnab Basu (ab362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4210',
      Title: 'Money and Credit',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4290',
      Title: 'Economic Analysis of Politics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4991',
      Title: 'Honors Program',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4997',
      Title: 'Cross-Cultural Work Experiences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4998',
      Title: 'Cross-Cultural Work Experiences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 4999',
      Title: 'Independent Study in Economics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6100',
      Title: 'Microeconomic Theory II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6110',
      Title: 'Microeconomic Theory III',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6115',
      Title: 'Applied Microeconomics II: Game Theory',
      Instructor: 'Arnab Basu (ab362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6140',
      Title: 'Macroeconomics II',
      Instructor: 'Douglas McKee (dmm399)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6200',
      Title: 'Econometrics II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6420',
      Title: 'Health Economics II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6591',
      Title: 'Empirical Strategies for Policy Research II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6822',
      Title: 'Game Theory II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 6990',
      Title: 'Readings in Economics',
      Instructor: 'Mathieu Taschereau-Dumouchel (mt763)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7240',
      Title: 'Causal Inference and Machine Learning',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7335',
      Title: 'Introduction to Information Economics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7350',
      Title: 'Public Finance: Resource Allocation and Fiscal Policy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7430',
      Title: 'Seminar in Labor Economics II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7540',
      Title: 'Economics of Networks: Theory',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7580',
      Title: 'Behavioral Economics I',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7650',
      Title: 'Development Microeconomics Graduate Research Seminar',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7660',
      Title: 'Microeconomics of International Development',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7700',
      Title: 'Topics in Economic Development',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7841',
      Title: 'Econometrics Workshop',
      Instructor: 'Douglas McKee (dmm399)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7842',
      Title: 'Microeconomic Theory Workshop',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7843',
      Title: 'Industrial Organization Workshop',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7845',
      Title: 'Workshop in Labor Economics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7846',
      Title: 'S.C. Tsiang Macroeconomics Workshop',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7848',
      Title: 'Public Economics Workshop',
      Instructor: 'Joerg Stoye (js2434)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7849',
      Title: 'Behavioral Economics Workshop',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ECON 7851',
      Title: 'Third Year Research Seminar II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 2210',
      Title: 'Designing and Facilitating Learning for Development',
      Instructor: 'Annalisa Raymer (alr26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 2410',
      Title: 'The Art of Teaching',
      Instructor: 'Annalisa Raymer (alr26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 2610',
      Title: 'Intergroup Dialogue',
      Instructor: 'Jeffrey Perry (jap255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 2710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'Jeffrey Perry (jap255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 3110',
      Title: 'Educational Psychology',
      Instructor: 'Jeffrey Perry (jap255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 3142',
      Title: 'Down the School to Prison Track, and Back',
      Instructor: 'Jeffrey Perry (jap255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 3405',
      Title: 'Multicultural Issues in Education',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 3510',
      Title: 'Engaged Learning through Extension, Outreach, and Instruction',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 3920',
      Title: 'Community Centered Leadership Development',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4010',
      Title: 'Special Methods of Instruction in Agricultural Science Education',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4050',
      Title: 'Perspectives in Collegiate Teaching and Learning',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4826',
      Title:
        'Leading Dialogue Across Difference: Practicum in Intergroup Relations',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4960',
      Title: 'Undergraduate Internship In Education',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4970',
      Title: 'Individual Study in Education',
      Instructor: 'Adi Grabiner Keinan (ag649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4980',
      Title: 'Undergraduate Teaching',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 4990',
      Title: 'Undergraduate Research',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 5100',
      Title:
        'Teaching English to Speakers of Other Languages and its Sociolinguistic Contexts',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 5223',
      Title: 'Lifelong Learning, Just Sustainability and Learning Ecosystems',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 5510',
      Title: 'Engaged Learning Through Extension, Outreach, and Instruction',
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 5710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'John Sipple (jws28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'EDUC 7010',
      Title: 'Empirical Research',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6210',
      Title: 'Improving Pronunciation',
      Instructor: 'Melissa Myers (mm177)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6220',
      Title: 'Taking Part in Discussions',
      Instructor: 'Nathan Lindberg (nwl26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6230',
      Title: 'Designing and Delivering Effective Presentations',
      Instructor: 'Nathan Lindberg (nwl26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6515',
      Title: 'Preparing to Write Workshop',
      Instructor: 'Melissa Myers (mm177)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6535',
      Title: 'Research Paper Writing Workshop',
      Instructor: 'Melissa Myers (mm177)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6565',
      Title: 'Thesis and Dissertation Writing Workshop',
      Instructor: 'Nathan Lindberg (nwl26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6595',
      Title: 'Revising and Editing Workshop',
      Instructor: 'Nathan Lindberg (nwl26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ELSO 6630',
      Title: 'Preparing for the Academic Job Search',
      Instructor: 'Michelle Crow (mtc225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1100',
      Title: 'How Reading Changes Your Life',
      Instructor: 'Masha Raskolnikov (mr283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1105',
      Title: 'FWS: Writing and Sexual Politics',
      Instructor: 'Kathryn Diaz (krd77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1111',
      Title: 'FWS: Writing Across Cultures',
      Instructor: 'Joseph Miranda (jim62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1120',
      Title: 'FWS: Writing and Community Engagement',
      Instructor: 'Philippa Chun (pac262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1130',
      Title: 'FWS: Writing the Environment',
      Instructor: 'Laura Brown (lsb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1134',
      Title: 'FWS: True Stories',
      Instructor: 'Anastasia McCray (am2953)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1140',
      Title: 'FWS: Writing Medicine: Stories of Illness and Healing',
      Instructor: 'Lisa Camp (lc939)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1158',
      Title: 'FWS: American Voices',
      Instructor: 'Elisavet Makridis (em798)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1160',
      Title: 'FWS: Intersections: Race, Writing, and Power',
      Instructor: 'Chi Le (ctl64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1167',
      Title: 'FWS: Reading Now',
      Instructor: 'Jasmine Reid (jrr353)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1168',
      Title: 'FWS: Cultural Studies',
      Instructor: 'Olivia Evans (ocm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1170',
      Title: 'FWS: Short Stories',
      Instructor: 'Jessica Diaz Rodriguez (jr2257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1183',
      Title: 'FWS: Word and Image',
      Instructor: 'Marty Cain (mmc287)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 1191',
      Title: 'FWS: British Literature',
      Instructor: 'Susannah Sharpless (sps258)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2020',
      Title: 'Literature in English II: 1750 to the Present',
      Instructor: 'Austin Lillywhite (acl238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2035',
      Title: 'Science Fiction',
      Instructor: 'Bonnie Chung (yc2633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2080',
      Title: 'Shakespeare in the Twenty-First Century',
      Instructor: 'Mackenzie Donnelly (med322)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2160',
      Title: 'Television',
      Instructor: 'India Hackle (ih292)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2620',
      Title: 'Introduction to Asian American Literature',
      Instructor: 'Adam Szetela (as4222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2675',
      Title: 'Cultures of the Cold War',
      Instructor: 'Mackenzie Berry (mb2684)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2703',
      Title: 'Thinking Media',
      Instructor: 'Margaux Delaney (mrd239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2725',
      Title: 'Philosophy and Literature',
      Instructor: 'Alice Rhee (ar2384)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2730',
      Title: "Children's Literature",
      Instructor: 'Laura Caicedo (lc972)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2735',
      Title: 'Movies, Stories, Ethics',
      Instructor: 'Shacoya Kidwell (sk3298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2755',
      Title: 'Birds, Beasts, and Bards: The Poetry of Animals',
      Instructor: 'Chijioke Onah (cko34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2785',
      Title: 'Comic Books and Graphic Novels',
      Instructor: 'Farah Omer (fmo8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2810',
      Title: 'Creative Writing',
      Instructor: 'Lars Johnson (loj6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2890',
      Title: 'Expository Writing',
      Instructor: 'Lily Codera (lcc87)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2950',
      Title: 'Introduction to Humanities',
      Instructor: 'Ashley Hand (aeh263)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 2999',
      Title: 'The First American University',
      Instructor: 'Vivian Ludford (vjl25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3021',
      Title: 'Literary Theory on the Edge',
      Instructor: 'Abram Coetsee (ac2364)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3080',
      Title: 'Icelandic Family Sagas',
      Instructor: 'Rocio Corral Garcia (rc845)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3115',
      Title: 'Video and New Media: Art, Theory, Politics',
      Instructor: 'Charline Jao (cj422)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3120',
      Title: 'Beowulf',
      Instructor: 'Charlie Green (crg95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3270',
      Title: 'Shakespeare: The Late Plays',
      Instructor: 'Yessica Martinez (ym463)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3320',
      Title: 'The World Turned Upside Down: Literature and Revolution',
      Instructor: 'Maggie O (mo433)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3370',
      Title: 'Contemporary American Theatre on Stage and Screen',
      Instructor: 'Christina Fogarasi (cf455)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3440',
      Title:
        'Merchants, Whalers, Pirates, Sailors: American Maritime Literature from the 19th Century and Beyond',
      Instructor: 'Elizabeth Anker (esa52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3550',
      Title: 'Decadence',
      Instructor: 'Bwesigye Bwa Mwesigire (bb656)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3615',
      Title: 'Podcast, Radio, Gramophone: Literary Technologies of Sound',
      Instructor: 'Jon McKenzie (jvm62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3625',
      Title: 'Frederick Douglass and Frances E.W. Harper',
      Instructor: 'Jonathan Branfman (jrb557)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3660',
      Title: 'Reading the Nineteenth-Century American Novel',
      Instructor: 'Rogelio Juarez (rbj42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3675',
      Title: 'The Environmental Imagination in American Literature',
      Instructor: 'Michael Lee (mdl283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3734',
      Title: 'Whiteness in Literature and Popular Culture',
      Instructor: 'Courtney Raisin (cm862)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3741',
      Title: 'Design Thinking, Media, and Community',
      Instructor: 'Verdie Culbreath (vmc47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3742',
      Title: 'Africans and African Americans in Literature',
      Instructor: 'Carlos Gomez (crg245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3762',
      Title: 'Law and Literature',
      Instructor: 'John Anspach (jwa84)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3830',
      Title: 'Narrative Writing',
      Instructor: 'Elie Piha (emp248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3890',
      Title: 'The Personal Voice: Nonfiction Writing',
      Instructor: 'Kevin Attell (kda24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3913',
      Title: 'South Asian Poetry and Narrative: From Ghazals to Film',
      Instructor: 'Stephanie Vaughn (sv19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 3950',
      Title: 'Beyoncé Nation: The Remix',
      Instructor: 'Oona Cullen (obc5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4260',
      Title: 'The Animal',
      Instructor: 'Robert Romero (rr687)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4405',
      Title: 'Oscar Wilde',
      Instructor: 'Victoria Corwin (vlc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4535',
      Title: 'The Modern Imagination: The Major Authors',
      Instructor: 'Ariel Estrella (ame247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4605',
      Title: 'Black Speculative Fiction',
      Instructor: 'Angelina Campos (ac2845)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4615',
      Title:
        'Lovecraft Country: Blackness, Indigeneity, and Literary Racial Speculation',
      Instructor: 'Briel Felton (bjf84)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4700',
      Title: "Reading Joyce's Ulysses",
      Instructor: 'Jehan Roberson (jlr449)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4708',
      Title: 'Fictions of the New World',
      Instructor: 'Seth Koproski (shk95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4757',
      Title: 'Be a Man! Masculinity, Race, and Nation',
      Instructor: 'Nathaniel Likert (npl39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4810',
      Title: 'Advanced Poetry Writing',
      Instructor: 'Gregory Londe (gml82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4811',
      Title: 'Advanced Narrative Writing',
      Instructor: 'Anindita Banerjee (ab425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4913',
      Title: 'August Wilson: the Cycle of Black Life',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4920',
      Title: 'Honors Seminar II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4928',
      Title: 'Literature and Relationality',
      Instructor: 'Roger Gilbert (rsg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4930',
      Title: 'Honors Essay Tutorial I',
      Instructor: 'Nick Salvato (ngs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4940',
      Title: 'Honors Essay Tutorial II',
      Instructor: 'Sunn Wong (ssw6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4950',
      Title: 'Independent Study',
      Instructor: 'Jeremy Braddock (jb358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 4961',
      Title: 'Race and the University',
      Instructor: 'Erik Born (ecb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6050',
      Title: 'Archives and Artifacts',
      Instructor: 'Neil Saccamano (ncs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6120',
      Title: 'Beowulf',
      Instructor: 'Mary Pat Brady (mpb23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6350',
      Title: 'Precolonial and Postcolonial English Vernacularity',
      Instructor: 'Satya Mohanty (spm5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6516',
      Title:
        'Songs of Experiment: Disruptions of Lyricism in Contemporary Anglophone Black Poetry',
      Instructor: 'Roger Gilbert (rsg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6602',
      Title: 'The Culture and Theory of Women of Color Feminisms',
      Instructor: 'Gregory Londe (gml82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6708',
      Title: 'Fictions of the New World',
      Instructor: 'Kathryn Diaz (krd77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6710',
      Title: 'Law and Literature',
      Instructor: 'Yessica Martinez (ym463)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6775',
      Title: 'Queer Time and the Senses',
      Instructor: 'Jasmine Reid (jrr353)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 6919',
      Title: 'Urban Justice',
      Instructor: 'Elisavet Makridis (em798)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 7810',
      Title: 'MFA Seminar: Poetry',
      Instructor: 'Robert Romero (rr687)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 7811',
      Title: 'MFA Seminar: Fiction',
      Instructor: 'Lily Codera (lcc87)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 7890',
      Title: 'Pedagogical and Thesis Development',
      Instructor: 'Alice Rhee (ar2384)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 7940',
      Title: 'Directed Study',
      Instructor: 'Anum Asi (aa2649)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGL 7950',
      Title: 'Group Study',
      Instructor: 'Carlos Gomez (crg245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3023',
      Title:
        'Communication Intensive Opportunity: Practicum in Technical Writing',
      Instructor: 'Rick Evans (rae27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3025',
      Title: 'Creating and Communicating Your Digital Professionalism',
      Instructor: 'Traci Nathans-Kelly (tmn46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3120',
      Title:
        'Communications for Practical Tools for Operations Research, Machine Learning and Data Science',
      Instructor: 'Allison Hutchison (abh98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3152',
      Title: 'Communication for Game Development',
      Instructor: 'Hua Wang (hw472)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3350',
      Title: 'Organizational Communications for Engineers',
      Instructor: 'Traci Nathans-Kelly (tmn46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3500',
      Title: 'Engineering Communications',
      Instructor: 'Rick Evans (rae27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 3610',
      Title: 'Communication for Transportation Engineering',
      Instructor: 'Allison Hutchison (abh98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 4152',
      Title: 'Communication for Advanced Game Development',
      Instructor: 'Hua Wang (hw472)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 5152',
      Title: 'Communication Strategies for Games Management and Creation',
      Instructor: 'Hua Wang (hw472)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRC 5340',
      Title: 'Independent Study',
      Instructor: 'Traci Nathans-Kelly (tmn46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2020',
      Title: 'Statics and Mechanics of Solids',
      Instructor: 'Atieh Moridi (am2975)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2100',
      Title: 'Introduction to Circuits for Electrical and Computer Engineers',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2110',
      Title: 'Object-Oriented Programming and Data Structures',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2250',
      Title: 'The Earth System',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2300',
      Title: 'Digital Logic and Computer Organization',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2550',
      Title: 'Engineering Quantum Information Hardware',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2620',
      Title: 'Electronic Materials for the Information Age',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2700',
      Title: 'Basic Engineering Probability and Statistics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 2720',
      Title: 'Data Science for Engineers',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRD 3200',
      Title: 'Engineering Computation',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1009',
      Title: 'AEW Collaborative Workshop: CHEM 2090',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1010',
      Title: 'AEW Collaborative Workshop: CS 1110',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1011',
      Title: 'AEW Collaborative Workshop: CS 2110',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1012',
      Title: 'AEW Collaborative Workshop: CS 1112',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1022',
      Title: 'Kessler Fellows Entrepreneurship Cohort Seminar',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1027',
      Title: 'AEW Collaborative Workshop: ENGRD 2700',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1028',
      Title: 'AEW Collaborative Workshop: CS 2800',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1031',
      Title: 'AEW Collaborative Workshop: CS 3110',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1034',
      Title: 'AEW Collaborative Workshop: CS 3410',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1091',
      Title: 'AEW Collaborative Workshop: MATH 1910',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1092',
      Title: 'AEW Collaborative Workshop: MATH 1920',
      Instructor: 'Nathan Cook (njc223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1093',
      Title: 'AEW Collaborative Workshop: MATH 2930',
      Instructor: 'Nathan Cook (njc223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1094',
      Title: 'AEW Collaborative Workshop: MATH 2940',
      Instructor: 'Nathan Cook (njc223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 1400',
      Title: 'Engineering Project Team Onboarding',
      Instructor: 'Nathan Cook (njc223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 2350',
      Title: 'Career Development in Engineering',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 2750',
      Title: 'Robot Ethics',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 3230',
      Title: 'Engineering Economics and Management',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 3400',
      Title: 'Engineering in Reality',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 3600',
      Title: 'Ethical Issues in Engineering Practice',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 3900',
      Title: 'Foundations of Engineering Leadership',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 4610',
      Title: 'Entrepreneurship for Engineers',
      Instructor: 'Ryan Sauve (rts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 4960',
      Title: 'Entrepreneurial Practicum in Engineering',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 4990',
      Title: 'Teaching in Engineering Leadership',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 4998',
      Title: 'Engineering Practical Training',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 5330',
      Title: 'Engineering Professionalism',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 5351',
      Title: 'Professional Development for Master of Engineering Students',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 6780',
      Title: 'Teaching Seminar',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRG 7930',
      Title: 'Peer Mentoring and Leadership Essentials',
      Instructor: 'Celia Evans (cae223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1100',
      Title: 'Lasers and Photonics',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1101',
      Title: 'Engineering Applications of Operations Research',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1130',
      Title:
        'Sustainable Engineering of Energy, Water, Soil, and Air Resources',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1165',
      Title: 'Climate Change and You, the Engineer',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1190',
      Title: 'Biomaterials for the Skeletal System',
      Instructor: 'Peter McMahon (plm99)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1210',
      Title: 'The Computing Technology Inside Your Smartphone',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENGRI 1510',
      Title: 'Modeling and Simulation of Real-World Scientific Problems',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 3102',
      Title: 'Basics of Programming in Python',
      Instructor: 'Seth Schweitzer (sas262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 5102',
      Title: 'Basics of Programming in Python',
      Instructor: 'Seth Schweitzer (sas262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 5900',
      Title: 'Project Management',
      Instructor: 'Robert Newman (rtn24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 5910',
      Title: 'Engineering Management Project',
      Instructor: 'Robert Newman (rtn24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 5920',
      Title: 'Product Management',
      Instructor: 'Andrea Ippolito (aki2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 5960',
      Title: 'Negotiations and Contracts for Engineering Management',
      Instructor: 'Kenneth Rother (ksr77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 6002',
      Title: 'Residential Intensive II',
      Instructor: 'Andrea Ippolito (aki2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENMGT 6091',
      Title: 'Seminar: Project Management',
      Instructor: 'Dirk Swart (dps42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 2010',
      Title: 'Alien Empire: Bizarre Biology of Bugs',
      Instructor: 'Bryan Danforth (bnd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 2011',
      Title: 'Alien Empire: Bizarre Biology of Bugs with Discussion',
      Instructor: 'Bryan Danforth (bnd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 3030',
      Title: 'Applied Statistics: Biological Experiments in Practice',
      Instructor: 'Bryan Danforth (bnd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 3630',
      Title: 'Bugs in Bugs: The World of Pathogens, Parasites and Symbionts',
      Instructor: 'Bryan Danforth (bnd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 3690',
      Title: 'Chemical Ecology',
      Instructor: 'Bryan Danforth (bnd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 3755',
      Title: 'Social Animal Behavior: Arthropods to Apes',
      Instructor: 'Bryan Danforth (bnd1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4040',
      Title:
        'Diversity, Equity, and Inclusion in STEM: The Science Behind Bias Seminar',
      Instructor: 'Katja Poveda (kap235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4440',
      Title: 'Integrated Pest Management',
      Instructor: 'Katja Poveda (kap235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4610',
      Title: 'Model-Based Phylogenetics and Hypothesis Testing',
      Instructor: 'Ann Hajek (aeh4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4830',
      Title: 'Insect Physiology',
      Instructor: 'Jennifer Thaler (jst37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4900',
      Title: 'Toxicology of Insecticides',
      Instructor: 'Linda Rayor (lsr1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4940',
      Title: 'Special Topics in Entomology',
      Instructor: 'Corrie Moreau (csm277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4970',
      Title: 'Individual Study in Entomology',
      Instructor: 'John Losey (jel27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4980',
      Title: 'Undergraduate Teaching',
      Instructor: 'John Losey (jel27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 4990',
      Title: 'Undergraduate Research in Entomology',
      Instructor: 'Corrie Moreau (csm277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 5440',
      Title: 'Integrated Pest Management',
      Instructor: 'Corrie Moreau (csm277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 6520',
      Title: 'Malaria Biology and Control',
      Instructor: 'Cole Gilbert (cg23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 6530',
      Title: 'Control of Disease Vectors Seminar',
      Instructor: 'Cole Gilbert (cg23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 6540',
      Title: 'Vector Biology in Practice',
      Instructor: 'Jeffrey Scott (jgs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 6900',
      Title: 'Seminar in Ecology and Evolution of Infectious Diseases',
      Instructor: 'Courtney Murdock (ccm256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 7070',
      Title: 'Individual Study for Graduate Students',
      Instructor: 'Courtney Murdock (ccm256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 7090',
      Title: 'Teaching Entomology',
      Instructor: 'Courtney Murdock (ccm256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 7100',
      Title: 'Mastering the Craft of Scientific Writing',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 7640',
      Title: 'Plant-Insect Interactions Seminar',
      Instructor: 'Jason Dombroskie (jjd278)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 8900',
      Title: "Master's Level Thesis Research",
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENTOM 9900',
      Title: 'Doctoral Level Thesis Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENVS 2600',
      Title: 'Field Research in the Ecological Arts',
      Instructor: 'Anna Davidson (amd355)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENVS 4444',
      Title:
        'Climate Smart Communities: State and Local Climate Change Science and Policy',
      Instructor: 'Anna Davidson (amd355)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENVS 4940',
      Title: 'Capstone Special Topics Course in Environment and Sustainability',
      Instructor: 'Allison Chatrchyan (amc256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENVS 4960',
      Title: 'Internship in Environment and Sustainability',
      Instructor: 'Michael Webster (mmw253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENVS 4970',
      Title: 'Individual Study in Environment and Sustainability',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ENVS 4990',
      Title: 'Undergraduate Research in Environment and Sustainability',
      Instructor: 'Rebecca Schneider (rls11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 1102',
      Title: 'Leadership and Career Skills in Food Science',
      Instructor: 'Julie Goddard (jmg26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 1105',
      Title: 'Introduction to Wines and Vines Laboratory',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 1500',
      Title: 'Food Choices and Issues',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2100',
      Title: 'Food Analysis',
      Instructor: 'Rui Liu (rl23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2110',
      Title: 'Food Analysis Laboratory',
      Instructor: 'Rui Liu (rl23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2206',
      Title: 'Fermentation of Food',
      Instructor: 'Christopher Loss (crl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2300',
      Title: 'Culinary Science',
      Instructor: 'Christopher Loss (crl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2310',
      Title: 'The Science and Technology of Beer',
      Instructor: 'Christopher Loss (crl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2360',
      Title: 'Distillation Principles and Practices',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 2400',
      Title: 'Wines and Grapes: Composition and Analysis',
      Instructor: 'Christopher Loss (crl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 3960',
      Title: 'Food Safety Assurance',
      Instructor: 'Christopher Loss (crl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4000',
      Title: 'Capstone Project in Food Science',
      Instructor: 'Christopher Loss (crl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4010',
      Title: 'Concepts of Food Product Development',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4040',
      Title: 'Chemistry and Functional Properties of Food Ingredients',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4110',
      Title: 'Flavor Perception',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4170',
      Title: 'Food Chemistry I',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4190',
      Title: 'Food Chemistry Laboratory',
      Instructor: 'Abigail Snyder (abs276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4220',
      Title: 'Functional Foods and Dietary Supplements For Health',
      Instructor: 'Bruno Xavier (bmx2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4250',
      Title: 'Food Processing B: Dairy Processing and Emerging Technologies',
      Instructor: 'Olga Padilla-Zakour (oip1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4260',
      Title:
        'We Are What We Eat: Linking Food With Intestinal Functionality and Microbiome',
      Instructor: 'Alireza Abbaspourrad (aa2347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4280',
      Title: 'Toxic Substances in Food Systems',
      Instructor: 'Terry Acree (tea2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4310',
      Title: 'The Science and Technology of Beer Laboratory',
      Instructor: 'John Brady (jwb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4340',
      Title: 'Cider Production Laboratory',
      Instructor: 'Motoko Mukai (mm2295)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4360',
      Title: 'Distillation Principles and Practices Laboratory',
      Instructor: 'Rui Liu (rl23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4700',
      Title: 'Winemaking Theory and Practice II',
      Instructor: 'Carmen Moraru (cim24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4710',
      Title: 'Winemaking Theory and Practice II Laboratory',
      Instructor: 'Carmen Moraru (cim24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4960',
      Title: 'Undergraduate Internship in Food Science',
      Instructor: 'Joseph Dumpler (jd2228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4970',
      Title: 'Individual Study in Food Science',
      Instructor: 'Elad Tako (et79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4980',
      Title: 'Undergraduate Teaching Experience',
      Instructor: 'Motoko Mukai (mm2295)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 4990',
      Title: 'Undergraduate Research in Food Science',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 5010',
      Title: 'Concepts of Food Product Development',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 5206',
      Title: 'Fermentation of Food',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 5310',
      Title: 'The Science and Technology of Beer',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 5360',
      Title: 'Distillation Principles and Practices',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 5400',
      Title: 'Wine and Grapes: Composition and Analysis',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 5960',
      Title: 'Food Safety Assurance',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6000',
      Title: 'Seminar in Food Science',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6040',
      Title: 'Chemistry and Functional Properties of Food Ingredients',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6060',
      Title: 'Food Science Graduate Student Research Seminar',
      Instructor: 'Bruno Xavier (bmx2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6110',
      Title: 'Flavor Perception',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6170',
      Title: 'Food Chemistry I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6220',
      Title: 'Functional Foods and Dietary Supplements For Health',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6250',
      Title: 'Food Processing B: Dairy Processing and Emerging Technologies',
      Instructor: 'Olga Padilla-Zakour (oip1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6260',
      Title:
        'We Are What We Eat: Linking Food With Intestinal Functionality and Microbiome',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6280',
      Title: 'Toxic Substances in Food Systems',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6310',
      Title: 'The Science and Technology of Beer Laboratory',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6340',
      Title: 'Cider Production Laboratory',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6360',
      Title: 'Distillation Principles and Practices Laboratory',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6650',
      Title: 'Food and Bioprocessing Systems',
      Instructor: 'Abigail Snyder (abs276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6700',
      Title: 'Winemaking Theory and Practice II',
      Instructor: 'Julie Goddard (jmg26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6710',
      Title: 'Winemaking Theory and Practice II Laboratory',
      Instructor: 'Alireza Abbaspourrad (aa2347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6940',
      Title: 'Special Topics in Food Science',
      Instructor: 'Robin Dando (rd426)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6950',
      Title: 'Current Readings in Food Science',
      Instructor: 'Terry Acree (tea2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6960',
      Title: 'Graduate Internship in Food Science',
      Instructor: 'John Brady (jwb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6970',
      Title: 'Graduate Individual Study in Food Science',
      Instructor: 'Rui Liu (rl23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 6980',
      Title: 'Graduate Teaching Experience',
      Instructor: 'Carmen Moraru (cim24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 8900',
      Title: "Master's Level Thesis Research",
      Instructor: 'Carmen Moraru (cim24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FDSC 9900',
      Title: 'Doctoral-Level Thesis Research',
      Instructor: 'Joseph Dumpler (jd2228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2010',
      Title: 'Introduction to Feminist, Gender, and Sexuality Studies',
      Instructor: 'Kate McCullough (mkm23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2082',
      Title: 'Of Ice and Men: Masculinities in the Medieval North',
      Instructor: 'Oren Falk (of24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2160',
      Title: 'Television',
      Instructor: 'Nick Salvato (ngs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2290',
      Title: 'Introduction to Lesbian, Gay, Bisexual, and Transgender Studies',
      Instructor: 'Sara Warner (slw42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2460',
      Title: 'Contemporary Narratives by Latina Writers',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2468',
      Title: 'Medicine, Culture, and Society',
      Instructor: 'Alex Nading (amn242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2512',
      Title: 'Black Women in the 20th Century',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 2932',
      Title: 'Engendering China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3210',
      Title: 'Gender and the Brain',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3320',
      Title: 'Gender and Psychopathology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3350',
      Title: 'Beyoncé Nation: The Remix',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3550',
      Title: 'Decadence',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3588',
      Title: 'Creating Renaissance Man (and Woman)',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3721',
      Title: 'Women in Biblical Israel',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 3991',
      Title: 'Undergraduate Independent Study',
      Instructor: 'Tamika Nunley (tyn4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4000',
      Title: 'Senior Seminar in Feminist, Gender, and Sexuality Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4020',
      Title: 'Reading the Body in Medicine and Fiction',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4035',
      Title: 'Intersectional Disability Studies',
      Instructor: 'Yue Du (yd367)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4231',
      Title: 'Gender and Technology in Historical Perspectives',
      Instructor: 'Lauren Korfine (lk79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4405',
      Title: 'Oscar Wilde',
      Instructor: 'Riche Richardson (rdr83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4491',
      Title: 'Feminism and Philosophy',
      Instructor: 'Ellis Hanson (eh36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4504',
      Title: 'The City: Asia',
      Instructor: 'Marilyn Migiel (mm55)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4701',
      Title: 'Nightlife',
      Instructor: 'Jane Juffer (jaj93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4757',
      Title: 'Be a Man! Masculinity, Race, and Nation',
      Instructor: 'Saida Hodzic (sh888)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 4991',
      Title: 'Senior Honors Thesis II',
      Instructor: 'Lucinda Ramberg (ler35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'Kate McCullough (mkm23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6504',
      Title: 'The City: Asia',
      Instructor: 'Tao Goffe (tlg92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6602',
      Title: 'The Culture and Theory of Women of Color Feminisms',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Kathleen Long (kpl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6721',
      Title: 'Women in Biblical Israel',
      Instructor: 'Jane Juffer (jaj93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6775',
      Title: 'Queer Time and the Senses',
      Instructor: 'Julia Chang (jhc324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6880',
      Title: 'Proseminar in Feminist, Gender, and Sexuality Studies',
      Instructor: 'Allison Heinemann (aaw43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FGSS 6990',
      Title: 'Topics in Feminist, Gender, and Sexuality Studies',
      Instructor: 'Tamika Nunley (tyn4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FINN 2134',
      Title: 'Intermediate Finnish II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 1108',
      Title: 'FWS:Monstrous Forms: Wild Men and Wicked Women',
      Instructor: 'Julia Karczewski (jak467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 1220',
      Title: 'Elementary French',
      Instructor: 'Kathleen Long (kpl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 1230',
      Title: 'Continuing French',
      Instructor: 'Thierry Torea (tat67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 2080',
      Title: 'French for Business',
      Instructor: 'Thierry Torea (tat67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 2090',
      Title: 'French Intermediate Composition and Conversation I',
      Instructor: 'Alix Choinet (ajc456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 2095',
      Title: 'French Intermediate Composition and Conversation II',
      Instructor: 'Theodore Kellogg (tgk42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 2180',
      Title: 'Advanced French',
      Instructor: 'Thierry Torea (tat67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 2310',
      Title: 'Introduction to French and Francophone Literature and Culture',
      Instructor: 'Salma Rebhi (sr2298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 2320',
      Title: 'Introduction to French and Francophone Film',
      Instructor: 'Charlotte Sas (cs978)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 3210',
      Title: 'Readings in Modern French Literature and Culture',
      Instructor: 'Charlotte Sas (cs978)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 3400',
      Title: 'French Identities: 21st Century Culture and Society in France',
      Instructor: 'Julia Karczewski (jak467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 3630',
      Title: 'In Prison 15th-20th Century',
      Instructor: 'Julia Karczewski (jak467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 3780',
      Title: 'What is a People? The Social Contract and its Discontents',
      Instructor: 'Jacob Matthews (jam963)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 3921',
      Title: 'Literary Theory on the Edge',
      Instructor: 'Flavien Glidja (ftg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 4065',
      Title: 'Friendships: A Global History',
      Instructor: 'Flavien Glidja (ftg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 4200',
      Title: 'Special Topics in French Literature',
      Instructor: 'Amber Bal (ab2922)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 4265',
      Title: 'One French Novel',
      Instructor: 'Penelope Rosenstock-Murav (pr422)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 4300',
      Title: 'Honors Work in French',
      Instructor: 'Flavien Glidja (ftg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 4820',
      Title: 'Madness, Literature and Medicine',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 6040',
      Title: 'The Race of the Poet (1780-1949)',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 6300',
      Title: 'French Reading for Graduates',
      Instructor: 'Thierry Torea (tat67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 6400',
      Title: 'Special Topics in French Literature',
      Instructor: 'Hannah Hughes (hch43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 6425',
      Title: 'Mysticism in Medieval Europe',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FREN 6525',
      Title: 'Historicizing Communism',
      Instructor: 'Imane Terhmina (it228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 1140',
      Title: 'Fashion Computer-Aided Design',
      Instructor: 'Melissa Conroy (mac622)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 1350',
      Title: 'Fibers, Fabrics, and Finishes',
      Instructor: 'Kimberly Phoenix (kah22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 1360',
      Title: 'Fiber and Yarn Analysis Laboratory',
      Instructor: 'Larissa Shepherd (lb468)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 1450',
      Title: 'Introduction to Fashion Design',
      Instructor: 'Larissa Shepherd (lb468)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 2190',
      Title: 'Fashion, Aesthetics and Society',
      Instructor: 'Larissa Shepherd (lb468)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 2640',
      Title: 'Fashion Draping',
      Instructor: 'Kimberly Phoenix (kah22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 2660',
      Title: 'Activewear Design and Product Development',
      Instructor: 'Catherine Blumenkamp (ckb67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 3320',
      Title: 'Product Quality Assurance',
      Instructor: 'Catherine Blumenkamp (ckb67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 3370',
      Title: 'Introduction to Knit Textile Structure and Design',
      Instructor: 'Huiju Park (hp347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 3650',
      Title: 'New Technologies for Fashion Design',
      Instructor: 'Frances Kozen (fhk2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4000',
      Title: 'Directed Reading',
      Instructor: 'Melissa Conroy (mac622)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4010',
      Title: 'Empirical Research',
      Instructor: 'Fatma Baytar (fb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4020',
      Title: 'Supervised Fieldwork',
      Instructor: 'Margaret Frey (mfw24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4030',
      Title: 'Teaching Apprenticeship',
      Instructor: 'Juan Hinestroza (jh433)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4360',
      Title: 'Fiber Chemistry',
      Instructor: 'Denise Green (dng22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4440',
      Title: 'Global Fashion Management',
      Instructor: 'Van Dyk Lewis (vdl4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4444',
      Title: 'Fiber Science and Apparel Design Futures',
      Instructor: 'Frances Kozen (fhk2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4700',
      Title: 'Online Fashion Promotion and Presentation',
      Instructor: 'Anil Netravali (ann2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 4990',
      Title: 'Honors Thesis Research',
      Instructor: 'Yasser Gowayed (yag5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 6000',
      Title: 'Special Problems for Graduate Students',
      Instructor: 'Huiju Park (hp347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 6200',
      Title: 'Physical Properties of Fiber - Forming Polymers and Fibers',
      Instructor: 'Tasha Lewis (tll28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 6370',
      Title: 'Research Seminar in Apparel Design',
      Instructor: 'Tamer Uyar (tu46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 8990',
      Title: "Master's Thesis and Research",
      Instructor: 'Kimberly Phoenix (kah22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'FSAD 9990',
      Title: 'Doctoral Thesis and Research',
      Instructor: 'Fatma Baytar (fb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1109',
      Title:
        'FWS: From Fairy Tales to the Uncanny: Exploring the Romantic Consciousness',
      Instructor: 'Tamar Gutfeld (tg388)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1118',
      Title: "FWS: Let's Play!",
      Instructor: 'Ekaterina Pirozhenko (ep399)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1122',
      Title: 'FWS: Love and Death in Vienna',
      Instructor: 'Douglas McBride (dbm93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1170',
      Title: 'FWS: Marx, Nietzsche, Freud',
      Instructor: 'Seth Thomas (sht47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1210',
      Title: 'Exploring German Contexts I',
      Instructor: 'Grit Matthias Phelps (gm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1220',
      Title: 'Exploring German Contexts II',
      Instructor: 'Grit Matthias Phelps (gm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1230',
      Title: 'Expanding the German Dossier',
      Instructor: 'Grit Matthias Phelps (gm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 1777',
      Title: 'Elementary Yiddish II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 2000',
      Title: 'Germany: Intercultural Context',
      Instructor: 'Gunhild Lischke (gl15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 2040',
      Title: 'Perspectives on German Culture',
      Instructor: 'Gunhild Lischke (gl15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 2060',
      Title: 'German in Business Culture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 2703',
      Title: 'Thinking Media',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 3013',
      Title: 'German Language Across the Curriculum (LAC)',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 3080',
      Title: 'German Digital Culture',
      Instructor: 'Isabel Choinowski (imc37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 3310',
      Title: 'Come Together: Public Spaces and German Culture',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 3581',
      Title: 'Imagining Migration in Film and Literature',
      Instructor: 'Douglas McBride (dbm93)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 4210',
      Title: 'Existentialism',
      Instructor: 'Emir Yigit (eyy9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 4260',
      Title: 'The Animal',
      Instructor: 'Dennis Wegner (dw544)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 4520',
      Title: 'Independent Study',
      Instructor: 'Gunhild Lischke (gl15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 4530',
      Title: 'Honors Research',
      Instructor: 'Erik Born (ecb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 4540',
      Title: 'Honors Thesis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6131',
      Title: 'German Philosophical Texts',
      Instructor: 'Grit Matthias Phelps (gm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6175',
      Title: 'Empathy: Affects and Sociality in Literature and Theory',
      Instructor: 'Elke Siegel (es744)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6320',
      Title: 'Reading Academic German II',
      Instructor: 'Sabine Haenni (sh322)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6370',
      Title: 'Nineteenth Century Fiction: Writing Revolution, 1830-1848',
      Instructor: 'Geoffrey Waite (gcw1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6515',
      Title: 'German Modernism',
      Instructor: 'Peter Gilgen (pg33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6720',
      Title: 'Futures in German Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 6850',
      Title: 'Gramsci and Cultural Politics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 7540',
      Title: 'Independent Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GERST 7541',
      Title: 'Colloquium',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 1101',
      Title: 'FWS: Power and Politics',
      Instructor: 'Matthew Evangelista (mae10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 1313',
      Title: 'Introduction to Comparative Government and Politics',
      Instructor: 'Michael Kriner (mk2537)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 1503',
      Title: 'Introduction to Africana Studies',
      Instructor: 'Joseph Lasky (jml585)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 1615',
      Title: 'Introduction to Political Theory',
      Instructor: 'Nina Obermeier (keo44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 1623',
      Title: 'The World of Modern Japan',
      Instructor: 'Shirley Le Penne (sl3287)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 2152',
      Title: '(Im)migration and (Im)migrants: Then and Now',
      Instructor: 'Nicolas van de Walle (nv38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 2605',
      Title: 'Social and Political Philosophy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 2747',
      Title: 'History of the Modern Middle East',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 2755',
      Title: 'Introduction to Humanities',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 2897',
      Title: 'WIM: Human Rights at War',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3042',
      Title: 'The Politics of Technology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3071',
      Title: 'Enduring Global and American Issues',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3072',
      Title: 'The U.S. Constitution: Crisis, Change and Legitimacy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3087',
      Title: 'International Human Rights Law and Advocacy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3122',
      Title: 'Democracy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3131',
      Title: 'The Nature, Functions, and Limits of Law',
      Instructor: 'Olufemi Taiwo (ot48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3174',
      Title: 'Nationalism and Identity',
      Instructor: 'Patchen Markell (ppm48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3211',
      Title: 'The Whites are Here to Stay: US-Africa Policy from Nixon to Date',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3242',
      Title: 'Down the School to Prison Track, and Back',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3253',
      Title: 'Germany in Europe',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3261',
      Title: 'The US Regime in Comparative and Historical Perspective',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3273',
      Title: 'Politics and Markets',
      Instructor: 'Kristin Roebuck (kar79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3333',
      Title: 'China-Africa Relations',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3686',
      Title: 'What Makes Us Human? An Existential Journey Amidst Crises',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3726',
      Title: 'Revolution',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 3786',
      Title: 'What is a People? The Social Contract and its Discontents',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4000',
      Title: 'Major Seminar',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4015',
      Title: 'Existentialism',
      Instructor: 'Sergio Garcia-Rios (sig35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4021',
      Title: 'American Conservative Thought',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4037',
      Title: 'Making Sense of China: The Capstone Seminar',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4279',
      Title: 'The Animal',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4451',
      Title: 'Making Science Policy: The Real World',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4494',
      Title: 'Topics in Southeast Asian Studies',
      Instructor: 'David Shoemaker (dws267)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4723',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4959',
      Title: 'Honors Thesis: Research and Writing',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 4999',
      Title: 'Undergraduate Independent Study',
      Instructor: 'Sibel Karakoc (sk2657)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6029',
      Title: 'Advanced Regression Analysis',
      Instructor: 'Karen Pinkus (kep44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6045',
      Title: 'Law and Literature',
      Instructor: 'Matthew Evangelista (mae10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6053',
      Title: 'Comparative Method in International and Comparative Politics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6202',
      Title: 'Political Culture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6223',
      Title: 'Comparative Social Policy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6241',
      Title: 'American Political Economy in Comparative Perspective',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6254',
      Title: 'The End of Regionalism?',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6304',
      Title: 'Historical Analysis in Comparative Politics',
      Instructor: 'Sarah Kreps (sk2245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6604',
      Title: 'Topics in Southeast Asian Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6615',
      Title: 'Disobedience, Resistance, Refusal',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6750',
      Title: 'Gramsci and Cultural Politics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6815',
      Title: 'Political Theory and Aesthetics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6897',
      Title: 'International Security',
      Instructor: 'Patrick Lapid (pal232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 6998',
      Title: 'Inquiry into Politics & Policy',
      Instructor: 'Aziz Rana (ar643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 7777',
      Title: 'Topics in International Relations Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 7937',
      Title: 'Proseminar in Peace Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GOVT 7999',
      Title: 'Independent Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GRAD 9010',
      Title: 'Graduate-Level Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GRAD 9011',
      Title: 'Doctoral Dissertation Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GRAD 9012',
      Title: "Master's Thesis Research",
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 1102',
      Title: 'Elementary Ancient Greek II',
      Instructor: 'Todd Clary (tcc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 1104',
      Title: 'Beginning Homeric Greek',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 2103',
      Title: 'Homer',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 3120',
      Title: 'Seminar in Greek',
      Instructor: 'Mathura Umachandran (myu2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 3185',
      Title: 'Independent Study in Greek, Undergraduate Level',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 4411',
      Title: 'Greek Comparative Grammar',
      Instructor: 'Alan Nussbaum (ajn8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 5112',
      Title: 'Elementary Ancient Greek II',
      Instructor: 'Todd Clary (tcc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 5114',
      Title: 'Beginning Homeric Greek',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 5123',
      Title: 'Homer',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 5130',
      Title: 'Seminar in Greek',
      Instructor: 'Mathura Umachandran (myu2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 6102',
      Title: 'Advanced Readings in Greek Literature',
      Instructor: 'Frederick Ahl (fma2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 7161',
      Title: 'Greek Philosophical Texts',
      Instructor: 'Rachana Kamtekar (rk579)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 7172',
      Title: 'Graduate Seminar in Greek',
      Instructor: 'Hayden Pelliccia (hnp1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 7411',
      Title: 'Greek Comparative Grammar',
      Instructor: 'Alan Nussbaum (ajn8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'GREEK 7910',
      Title: 'Independent Study in Greek',
      Instructor: 'Hayden Pelliccia (hnp1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1150',
      Title: 'Organizational Behavior and Leadership Skills',
      Instructor: 'Tony Simons (tls11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1210',
      Title: 'Financial Accounting',
      Instructor: 'Tony Simons (tls11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1350',
      Title: 'Introduction to Hotel Operations',
      Instructor: 'Simone Tang (st933)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1360',
      Title: 'Introduction to Foodservice Management',
      Instructor: 'Mary MacAusland (mm2549)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1410',
      Title: 'Microeconomics for the Service Industry',
      Instructor: 'Mary MacAusland (mm2549)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1650',
      Title: 'Business Writing for Hospitality Professionals',
      Instructor: 'Dave Roberts (drr45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 1740',
      Title: 'Business Computing',
      Instructor: 'Dave Roberts (drr45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2010',
      Title: 'Hospitality Quantitative Analysis',
      Instructor: 'Heather Kolakowski (haf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2170',
      Title: 'Hotel Leadership Development Program',
      Instructor: 'Heather Kolakowski (haf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2210',
      Title: 'Managerial Accounting',
      Instructor: 'Heather Kolakowski (haf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2220',
      Title: 'Finance',
      Instructor: 'Terence Alexander (ta425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2230',
      Title: 'Financial Accounting Principles',
      Instructor: 'Terence Alexander (ta425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2250',
      Title: 'Finance',
      Instructor: 'Terence Alexander (ta425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2360',
      Title: 'Food Service Management, Theory and Practice',
      Instructor: 'Adam Walden (atw59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2410',
      Title: 'Marketing Principles',
      Instructor: 'Adam Walden (atw59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2430',
      Title: 'Marketing Management for Services',
      Instructor: 'Adam Walden (atw59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2550',
      Title: 'Hospitality Development and Planning',
      Instructor: 'Priya Sirohi (ps783)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2720',
      Title: 'Information Retrieval and Research Methods',
      Instructor: 'Tyrell Stewart-Harris (ts784)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2740',
      Title: 'Business Computing',
      Instructor: 'Tyrell Stewart-Harris (ts784)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 2810',
      Title: 'Human Resources Management',
      Instructor: 'Tyrell Stewart-Harris (ts784)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3010',
      Title: 'Service Operations Management',
      Instructor: 'Andrew Whitmore (ajw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3055',
      Title: 'Hospitality, Health and Design Industry Immersion Seminar',
      Instructor: 'Andrew Whitmore (ajw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3121',
      Title: 'Experiential Networking II',
      Instructor: 'Kasey Tarantino (kst45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3210',
      Title: 'Principles of Hospitality Real Estate',
      Instructor: 'Gary Thompson (gmt1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3340',
      Title: 'Franchising in the Hospitality Industry',
      Instructor: 'Gary Thompson (gmt1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3350',
      Title: 'Restaurant Management',
      Instructor: 'Michael Kingra (mrk248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3365',
      Title: 'Foodservice Management Essentials',
      Instructor: 'Michael Paz (mtp58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3435',
      Title: 'Marketing Analytics Immersion',
      Instructor: 'Michael Paz (mtp58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3470',
      Title: 'Consumer Behavior',
      Instructor: 'Pamela Moulton (pm388)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3510',
      Title: 'Hospitality Facilities Design',
      Instructor: 'Pamela Moulton (pm388)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3550',
      Title: 'Hospitality Facilities Management',
      Instructor: 'Daniel Szpiro (das247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3650',
      Title: 'Persuasive Business Communication for Hospitality Leaders',
      Instructor: 'Daniel Szpiro (das247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3740',
      Title: 'Fundamentals of Database Management and Data Analysis',
      Instructor: 'A.J. Edwards (aje45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3870',
      Title: 'Business and Hospitality Law',
      Instructor: 'A.J. Edwards (aje45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3880',
      Title: 'Law for Hotel Owners and Operators',
      Instructor: 'Yifei Mao (ym355)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 3960',
      Title: 'Seminar in Leadership, Diversity, and Inclusion',
      Instructor: 'Yifei Mao (ym355)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4130',
      Title: 'Entrepreneurial Management',
      Instructor: 'Christopher Gaulke (ccg79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4140',
      Title: 'Innovation and Corporate Renewal',
      Instructor: 'Christopher Gaulke (ccg79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4145',
      Title: 'Business Model Innovation and Design',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4190',
      Title: 'Key Drivers for Making Innovation Happen',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4200',
      Title: 'Principles of Real Estate',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4205',
      Title: 'Real Estate Financial Modeling',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4255',
      Title: 'Real Estate Development',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4280',
      Title: 'Real Estate Finance and Investments',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4300',
      Title: 'Introduction to Wines',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4310',
      Title: 'Wine and Food Pairing Principles and Promotion',
      Instructor: 'Scott Erickson (gse23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4320',
      Title: 'Contemporary Healthy Foods',
      Instructor: 'Scott Erickson (gse23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4375',
      Title: 'Introduction to Fermented Grains, Hard Ciders, and Sake',
      Instructor: 'William Lynn (wml3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4410',
      Title: 'Strategic Management',
      Instructor: 'Kathryn LaTour (kal276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4425',
      Title: 'Introduction to the Global Leisure Cruise Industry',
      Instructor: 'Lisa Chervinsky (lmc229)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4430',
      Title: 'Wine Marketing',
      Instructor: 'Lisa Chervinsky (lmc229)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4432',
      Title: 'Advanced Topics in Strategic Management',
      Instructor: 'Alison Shea (aas425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4435',
      Title: 'Luxury Marketing',
      Instructor: 'Andrew Whitmore (ajw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4440',
      Title: 'Lodging Strategy and Innovation',
      Instructor: 'Andrew Whitmore (ajw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4490',
      Title:
        'Integrated Marketing Communications and New Media for Hospitality',
      Instructor: 'Kasey Tarantino (kst45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4500',
      Title: 'Sustainable Development',
      Instructor: 'Tashlin Lakhani (tl336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4515',
      Title: 'Hospitality Visioning and Concept Design',
      Instructor: 'Tashlin Lakhani (tl336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4530',
      Title: 'Foodservice Facilities Design',
      Instructor: 'Gary Thompson (gmt1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4760',
      Title: 'Visual Basic for Applications: End-User Programming',
      Instructor: 'Gary Thompson (gmt1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4770',
      Title: 'Advanced Business Modeling',
      Instructor: 'Nicolas Ziebarth (nrz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4800',
      Title: 'Law for Entrepreneurs',
      Instructor: 'Stacy Silver (sjs386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4870',
      Title: 'Real Estate Law',
      Instructor: 'Stacy Silver (sjs386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4910',
      Title: 'Hotel Ezra Cornell (H.E.C.)',
      Instructor: 'Stacy Silver (sjs386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4965',
      Title: 'Business Plan Competition',
      Instructor: 'Stacy Silver (sjs386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4970',
      Title: 'Distinction in Research Course I',
      Instructor: 'Dragana Cvijanovic (dc998)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4980',
      Title: 'Special Studies Project II',
      Instructor: 'Dragana Cvijanovic (dc998)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 4990',
      Title: 'Special Studies Project I',
      Instructor: 'Tashlin Lakhani (tl336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 5121',
      Title: 'Experiential Networking II',
      Instructor: 'Douglass Miller (ddm83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 5760',
      Title: 'Visual Basic for Applications: End-User Programming',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6055',
      Title: 'Hospitality, Health and Design Industry Immersion Seminar',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6130',
      Title: 'Entrepreneurial Management',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6140',
      Title: 'Innovation and Corporate Renewal',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6145',
      Title: 'Business Model Innovation and Design',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6190',
      Title: 'Key Drivers for Making Innovation Happen',
      Instructor: 'Marie Ozanne (meo84)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6200',
      Title: 'Principles of Real Estate',
      Instructor: 'Jura Liaukonyte (jl2545)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6205',
      Title: 'Real Estate Financial Modeling',
      Instructor: 'Daniel Hooker (dwh22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6240',
      Title: 'Analysis of Financial Statements',
      Instructor: 'William Lynn (wml3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6255',
      Title: 'Real Estate Development',
      Instructor: 'Bradford Wellstead (baw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6280',
      Title: 'Real Estate Finance and Investments',
      Instructor: 'Jeanne Varney (jmv59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6425',
      Title: 'Introduction to the Global Leisure Cruise Industry',
      Instructor: 'Jeanne Varney (jmv59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6430',
      Title: 'Wine Marketing',
      Instructor: 'Christina McDowell (clm354)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6432',
      Title: 'Advanced Topics in Strategic Management',
      Instructor: 'Andrew Quagliata (aq43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6435',
      Title: 'Luxury Marketing',
      Instructor: 'Christina McDowell (clm354)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6440',
      Title: 'Lodging Industry Strategy and Innovation',
      Instructor: 'Andrew Quagliata (aq43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6470',
      Title: 'Consumer Behavior',
      Instructor: 'Andrew Quagliata (aq43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6490',
      Title:
        'Integrated Marketing Communications and New Media for Hospitality',
      Instructor: 'Maria Wolfe (mw555)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6500',
      Title: 'Sustainable Development',
      Instructor: 'Maria Wolfe (mw555)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6510',
      Title: 'Hospitality Facilities Design',
      Instructor: 'Andrew Whitmore (ajw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6530',
      Title: 'Foodservice Facilities Design',
      Instructor: 'Paul Wagner (pew4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6740',
      Title: 'Fundamentals of Database Management and Data Analysis',
      Instructor: 'Paul Wagner (pew4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6770',
      Title: 'Advanced Business Modeling',
      Instructor: 'Alex Susskind (ams76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6800',
      Title: 'Law for Entrepreneurs',
      Instructor: 'Neil Tarallo (nt266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6965',
      Title: 'Business Plan Competition',
      Instructor: 'Neil Tarallo (nt266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 6980',
      Title: 'Graduate Special Studies Project II',
      Instructor: 'Neil Tarallo (nt266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 7240',
      Title: 'Managerial Accounting',
      Instructor: 'Jill Hellman (jh2367)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 7272',
      Title: 'Leadership and Ethics II',
      Instructor: 'Jill Hellman (jh2367)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 7510',
      Title: 'Properties Development and Planning',
      Instructor: 'Jill Hellman (jh2367)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 7820',
      Title: 'Human Resources Management',
      Instructor: 'Dragana Cvijanovic (dc998)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 7950',
      Title: 'MMH Master Class',
      Instructor: 'Daniel Lebret (dl255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 7960',
      Title: 'Seminar in Leadership, Diversity, and Inclusion',
      Instructor: 'Crocker Liu (chl62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 8900',
      Title: 'M.S. Thesis Research',
      Instructor: 'Alexei Tchistyi (avt33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 9310',
      Title: 'Service and Healthcare Operations',
      Instructor: 'Alexei Tchistyi (avt33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 9320',
      Title:
        'Foundations of Operations Management II: Operations Strategy and Supply Chain Management',
      Instructor: 'Cheryl Stanley (css14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HADM 9900',
      Title: 'Ph.D. Thesis Research',
      Instructor: 'Cheryl Stanley (css14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 1120',
      Title: 'People in Perspective: Brain, Mind, and Society',
      Instructor: 'Adam Anderson (aka47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 1170',
      Title: 'Adolescence and Emerging Adulthood',
      Instructor: 'Robert Sternberg (rjs487)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 2940',
      Title: 'Data Science for Social Scientists II',
      Instructor: 'Will Hobbs (wrh75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3110',
      Title: 'Educational Psychology',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3210',
      Title: 'Developmental Cognitive Neuroscience',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3280',
      Title: 'Field Practicum II',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3290',
      Title: 'Self-regulation Across the Life Span',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3300',
      Title: 'Developmental Psychopathology',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3320',
      Title: 'Gender and Psychopathology',
      Instructor: 'Marlen Gonzalez (mzg5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3455',
      Title: 'On Being Social',
      Instructor: 'Harry Segal (hgs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3530',
      Title: 'Risk and Opportunity Factors in Childhood and Adolescence',
      Instructor: 'Corinna Loeckenhoff (cel72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3620',
      Title: 'Human Bonding',
      Instructor: 'Jane Mendle (jem482)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 3700',
      Title: 'Adult Psychopathology',
      Instructor: 'Lauren Korfine (lk79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4000',
      Title: 'Directed Readings',
      Instructor: 'Vivian Zayas (vz29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4020',
      Title: 'Supervised Fieldwork',
      Instructor: 'Valerie Reyna (vr53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4030',
      Title: 'Teaching Assistantship',
      Instructor: 'Cindy Hazan (ch34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4210',
      Title: 'Native American Psychology',
      Instructor: 'Harry Segal (hgs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4380',
      Title: 'Language and Thought',
      Instructor: 'Michael Toglia (mpt38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4490',
      Title: "Children's Learning in Social Context",
      Instructor: 'Misha Inniss-Thompson (mni6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4540',
      Title: 'Creativity and Its Development',
      Instructor: 'Misha Inniss-Thompson (mni6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4720',
      Title: 'Current Research in Emotion, Cognition, and Brain',
      Instructor: 'Adam Hoffman (ajh324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4765',
      Title: 'How to Think Like a Scientist',
      Instructor: 'Marlen Gonzalez (mzg5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4790',
      Title: 'Contemporary Perspectives on Human Bonding',
      Instructor: 'Misha Inniss-Thompson (mni6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4850',
      Title: 'Professional Development in Translational Research',
      Instructor: 'Adam Hoffman (ajh324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4860',
      Title: 'Nearest Neighbor',
      Instructor: 'Yarden Kedar (yek2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 4990',
      Title: 'Senior Honors Thesis',
      Instructor: 'Marianella Casasola (mc272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6200',
      Title: 'First-Year Proseminar in Human Development',
      Instructor: 'Robert Sternberg (rjs487)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6210',
      Title: 'Seminar on Autobiographical Memory',
      Instructor: 'Adam Anderson (aka47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6290',
      Title: 'The Structure and Dynamics of Self-Regulation',
      Instructor: 'Laura Casasanto (lsc96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6540',
      Title: 'Creativity and Its Development',
      Instructor: 'Cindy Hazan (ch34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6690',
      Title: 'The Nature and Function of Affectional Bonds',
      Instructor: 'Kristen Elmore (kce28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6720',
      Title: 'Current Research in Emotion, Cognition and Brain',
      Instructor: 'Anthony Burrow (alb325)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 6765',
      Title: 'How to Think Like a Scientist',
      Instructor: 'Robert Sternberg (rjs487)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 7000',
      Title: 'Directed Readings',
      Instructor: 'Marianella Casasola (mc272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 7010',
      Title: 'Empirical Research',
      Instructor: 'Valerie Reyna (vr53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 7030',
      Title: 'Teaching Assistantship',
      Instructor: 'Anthony Burrow (alb325)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 8990',
      Title: "Master's Thesis and Research",
      Instructor: 'Cindy Hazan (ch34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HD 9990',
      Title: 'Doctoral Thesis and Research',
      Instructor: 'Corinna Loeckenhoff (cel72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HE 1115',
      Title: 'Critical Reading and Thinking',
      Instructor: 'Mike Chen (msc7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HE 3200',
      Title:
        'Health Equity from the Human Ecology Perspective: People, Places and Policies',
      Instructor: 'Mike Chen (msc7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HE 3920',
      Title: 'New York State Government Affairs',
      Instructor: 'Florencia Ardon (fa227)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HE 4010',
      Title: 'Empirical Research',
      Instructor: 'Florencia Ardon (fa227)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HEBRW 1102',
      Title: 'Elementary Modern Hebrew II',
      Instructor: 'Shalom Shoer (ss66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HEBRW 2100',
      Title: 'Intermediate Modern Hebrew',
      Instructor: 'Shalom Shoer (ss66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HEBRW 3102',
      Title: 'Advanced Modern Hebrew II',
      Instructor: 'Philip Hollander (ph469)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HEBRW 4102',
      Title: 'Topics in Biblical Hebrew Prose',
      Instructor: 'Philip Hollander (ph469)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HEBRW 5510',
      Title: 'Graduate Studies in Hebrew',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HEBRW 6102',
      Title: 'Topics in Biblical Hebrew Prose',
      Instructor: 'Shalom Shoer (ss66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HINDI 1102',
      Title: 'Elementary Hindi II',
      Instructor: 'Sujata Singh (ss596)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HINDI 2202',
      Title: 'Intermediate Hindi II',
      Instructor: 'Sujata Singh (ss596)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HINDI 2204',
      Title: 'Intermediate Hindi Reading and Writing for Heritage Students II',
      Instructor: 'Sujata Singh (ss596)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1200',
      Title: 'FWS: Writing History',
      Instructor: 'Nathaniel Boling (nwb33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1301',
      Title: 'FWS: History of the Essay',
      Instructor: 'Emilio Ocampo Eibenschutz (eo259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1431',
      Title: 'FWS: Mao, China, and the World',
      Instructor: 'Aimee Plukker (asp283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1511',
      Title: 'The Making of Modern Europe, from 1500 to the Present',
      Instructor: 'Kelsey Roggensack (kjr58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1540',
      Title: 'American Capitalism',
      Instructor: 'Darren Wan (dw597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1571',
      Title:
        'American Defense Policy and Military History from the Two World Wars to the Global War on Terror',
      Instructor: 'Benedetta Luciana Sara Carnaghi (bc552)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1620',
      Title: 'Histories of the Future',
      Instructor: 'Jennifer Begakis (jab876)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1622',
      Title: 'The World of Modern Japan',
      Instructor: 'Aaron Sachs (as475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1740',
      Title: 'Imperial China',
      Instructor: 'John Barwick (jsb435)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1820',
      Title: 'U.S. Borders, North and South',
      Instructor: 'Nicholas Mulder (njm226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 1951',
      Title: 'Foreign Policy as Subversion',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2001',
      Title: 'Supervised Reading - Undergraduate',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2005',
      Title: 'The First American University',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2025',
      Title: "Apartheid's Afterlife",
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2082',
      Title: 'Of Ice and Men: Masculinities in the Medieval North',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2085',
      Title: 'The Enlightenment: The Birth of Modern Thought',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2091',
      Title:
        'A History of Human Trafficking in the Atlantic World, ca. 1400-1800',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2208',
      Title: 'The History of Religious Life in Imperial China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2307',
      Title: 'Histories of the African Diaspora',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2354',
      Title: 'African American Visions of Africa',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2391',
      Title:
        'From Terra Incognita to Territories of Nation-States: Early American History in Two Dozen Maps',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2461',
      Title: 'History of Minorities in Ottoman West Asia and North Africa',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2512',
      Title: 'Black Women in the 20th Century',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2541',
      Title: 'Modern Caribbean History',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2560',
      Title: 'War and Peace in Greece and Rome',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2581',
      Title: 'Environmental History',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2674',
      Title: 'History of the Modern Middle East',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2689',
      Title: 'Roman History',
      Instructor: 'David Silbey (ds90)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2710',
      Title: 'Introduction to the History of Medicine',
      Instructor: 'Rachel Prentice (rep35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2712',
      Title: 'The Ancient Economy',
      Instructor: 'Kristin Roebuck (kar79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2721',
      Title: 'History of Mental Health and Mental Illness in the United States',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2750',
      Title: 'History of Modern India',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2815',
      Title:
        'Imprisonment in Europe and America from the Middle Ages to the Present',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2853',
      Title: 'The Law in Jewish History',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2932',
      Title: 'Engendering China',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 2958',
      Title: 'Empires and Vampires: History of Eastern Europe',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3002',
      Title: 'Supervised Research - Undergraduate',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3181',
      Title: 'Living in an Uncertain World: Science, Technology, and Risk',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3200',
      Title: 'The Viking Age',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3363',
      Title: 'Sino-Vietnamese Studies',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3405',
      Title: 'A Maritime History of Early America, ca. 1450-1850',
      Instructor: 'Maria Cristina Garcia (mcg20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3519',
      Title:
        'History of State and Society in Modern Iran: Through Literature and Film',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3542',
      Title: 'The Ottoman Empire 1800-1922',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3626',
      Title: 'Revolution',
      Instructor: 'Tamara Loos (tl14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3652',
      Title: 'African Economic Development Histories',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3870',
      Title: 'The History of Consumption: From Wedgwood to Wal-Mart',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 3960',
      Title:
        'Transnational Local: Southeast Asian History from the Eighteenth Century',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4000',
      Title: 'Introduction to Historical Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4002',
      Title: 'Honors Research',
      Instructor: 'Edward Baptist (eeb36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'Ernesto Bassi Arevalo (eb577)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4168',
      Title: 'Race and Asia in World History',
      Instructor: 'Yue Du (yd367)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4195',
      Title: 'Identity Politics in the Ibero-Atlantic',
      Instructor: 'Derek Chang (dsc37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4231',
      Title: 'Gender and Technology in Historical Perspectives',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4361',
      Title: 'Unconventional and Hybrid Warfare in Ancient Greece and Rome',
      Instructor: 'Zhihong Chen (zc46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4485',
      Title:
        'Annamese and Merovingians: Two Imperial Frontiers - Rome and Han-Tang China, 5th-8th Centuries',
      Instructor: 'Paul Friedland (paf67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4551',
      Title: 'Race and the University',
      Instructor: 'Raymond Craib (rbc23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4634',
      Title: 'Curating the British Empire',
      Instructor: 'Peter Dear (prd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4653',
      Title: 'Biography and the Black Atlantic, 1400-1800',
      Instructor: 'Oren Falk (of24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: 'Maria Cristina Garcia (mcg20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4742',
      Title:
        'Dying for God: Judaism, Christianity and the Meaning of Martyrdom',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4773',
      Title: 'Twice A Stranger: Transnational Figures and Their Stories',
      Instructor: 'Sandra Greene (seg6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4851',
      Title: 'Refugees',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 4945',
      Title: 'The Birth of the Prison in Eighteenth Century Europe and America',
      Instructor: 'Lawrence Glickman (lbg49)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6000',
      Title: 'Graduate Research Seminar',
      Instructor: 'Olga Litvak (ol76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6006',
      Title: 'History Colloquium Series',
      Instructor: 'Tamara Loos (tl14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6065',
      Title: 'Science, Technology and Capitalism',
      Instructor: 'Mostafa Minawi (mm2492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6091',
      Title: 'Histories of European Integration and Disintegration',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6155',
      Title: 'Slavery and Gender in the Atlantic World',
      Instructor: 'Russell Rickford (rr447)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6168',
      Title: 'Race and Asia in World History',
      Instructor: 'Aaron Sachs (as475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6195',
      Title: 'Identity Politics in the Ibero-Atlantic',
      Instructor: 'Barry Strauss (bss4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6202',
      Title: 'Political Culture',
      Instructor: 'Eric Tagliacozzo (et54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6300',
      Title: 'Topics in Ancient History',
      Instructor: 'Thomas Travers (trt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6338',
      Title: 'Public Humanities',
      Instructor: 'Margaret Washington (mw26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6361',
      Title: 'Unconventional and Hybrid Warfare in Ancient Greece and Rome',
      Instructor: 'Rachel Weil (rjw5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6525',
      Title: 'Historicizing Communism',
      Instructor: 'John Weiss (jhw4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6555',
      Title: 'Gender and the Law',
      Instructor: 'Claudia Verhoeven (cv89)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6571',
      Title:
        'American Defense Policy and Military History from the Two World Wars to the Global War on Terror',
      Instructor: 'Stephen Vider (sv484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6634',
      Title: 'Curating the British Empire',
      Instructor: 'Cristina Florea (cf476)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6653',
      Title: 'Biography and the Black Atlantic, 1400-1800',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6663',
      Title: 'Sino-Vietnamese Studies',
      Instructor: 'Corey Earle (cre8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: 'Abikal Borah (ab2524)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6685',
      Title:
        'Annamese and Merovingians: Two Imperial Frontiers - Rome and Han-Tang China, 5th-8th Centuries',
      Instructor: 'Oren Falk (of24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6742',
      Title:
        'Dying for God: Judaism, Christianity and the Meaning of Martyrdom',
      Instructor: 'Paul Friedland (paf67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6773',
      Title: 'Twice A Stranger: Transnational Figures and Their Stories',
      Instructor: 'Casey Schmitt (cs2437)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6851',
      Title: 'Refugees',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6945',
      Title: 'The Birth of the Prison in Eighteenth Century Europe and America',
      Instructor: 'Judith Byfield (jab632)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 6960',
      Title:
        'Transnational Local: Southeast Asian History from the Eighteenth Century',
      Instructor: 'Russell Rickford (rr447)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 7937',
      Title: 'Proseminar in Peace Studies',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 8004',
      Title: 'Supervised Reading',
      Instructor: 'Mostafa Minawi (mm2492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HIST 8010',
      Title: 'Independent Study-PIRIP',
      Instructor: 'Tamika Nunley (tyn4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HUNGR 1132',
      Title: 'Elementary Hungarian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'HUNGR 1134',
      Title: 'Continuing Hungarian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 1104',
      Title:
        'Global Development Internship Pre-Departure Course: Unit I: Preparing for Engagement',
      Instructor: 'Julie Ficarra (jmf389)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 2070',
      Title: 'Social and Economic Dimensions of Development',
      Instructor: 'Scott Peters (sp236)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 3104',
      Title:
        'Global Development Internship Pre-Departure Course: Unit II: Preparing for Your Internship',
      Instructor: 'Julie Ficarra (jmf389)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 3305',
      Title: 'Planning for Change',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 4721',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: 'Christine Leuenberger (cal22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 4970',
      Title: 'Independent Study in IARD',
      Instructor: 'Terry Tucker (twt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 4980',
      Title:
        'Teaching Experience in International Agriculture and Rural Development',
      Instructor: 'Terry Tucker (twt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 5305',
      Title: 'Planning for Change',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 5970',
      Title: 'Independent Study in Global Development (MPS Students)',
      Instructor: 'Theresa Pendergrast (tlp59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 6960',
      Title: 'Perspectives in Global Development',
      Instructor: 'Sarah Giroux (sh104)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 6970',
      Title: 'Global Development M.P.S. Seminar',
      Instructor: 'Terry Tucker (twt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 6980',
      Title: 'Teaching Experiences for MPS in Global Development',
      Instructor: 'Andrew McDonald (ajm9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IARD 7830',
      Title: 'Farmer-Centered Research and Extension',
      Instructor: 'Mario Herrero Acosta (mh2258)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 2600',
      Title: 'Human Resource Management',
      Instructor: 'Paul Davis (pd359)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 2630',
      Title: 'Human Resources: Current Issues and Trends',
      Instructor: 'Christian Miller (cjm267)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 2640',
      Title: 'Diversity and Inclusion',
      Instructor: 'Devon Proudfoot (dp597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 3650',
      Title: 'Organizational Consulting: Process and Results',
      Instructor: 'John Haggerty (jjh56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 4607',
      Title: 'Executive Compensation and Corporate Governance',
      Instructor: 'Brian Dunn (bdd28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 4615',
      Title: 'Socially Responsible Business',
      Instructor: 'Joe Grasso (jeg68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 4620',
      Title: 'Staffing Organizations',
      Instructor: 'JR Keller (jhk296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 4640',
      Title: 'Business Strategy',
      Instructor: 'JR Keller (jhk296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 4664',
      Title: 'Human Resource Analytics',
      Instructor: 'John Hausknecht (jph42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 5607',
      Title: 'Executive Compensation',
      Instructor: 'Brian Dunn (bdd28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 5620',
      Title: 'HR Leadership: Views from the Top',
      Instructor: 'Chris Collins (cjc53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 5660',
      Title: 'Strategic Human Resource Metrics and Analytics',
      Instructor: 'John Hausknecht (jph42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 5665',
      Title: 'Organizational Consulting',
      Instructor: 'John Haggerty (jjh56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 5680',
      Title: 'Staffing Organizations',
      Instructor: 'JR Keller (jhk296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 5690',
      Title: 'Rewards and Compensation',
      Instructor: 'Paul Davis (pd359)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 6400',
      Title: 'Organizational Diversity and Inclusion',
      Instructor: 'Devon Proudfoot (dp597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 6615',
      Title: 'Socially Responsible Business',
      Instructor: 'Joe Grasso (jeg68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 6685',
      Title: 'Fundamentals of Benefits and the Employee Value Proposition',
      Instructor: 'David Kasiarz (dk697)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 7451',
      Title: 'Leadership Assessment for Managers',
      Instructor: 'Jess Cisco (jdc77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 7990',
      Title: 'Directed Studies',
      Instructor: 'M. Diane Burton (mdb238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRHR 9600',
      Title: 'Workshop in Human Resource Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 2310',
      Title: 'Sociology of Work: Micro Meets Macro',
      Instructor: 'Tristan Ivory (ti92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 2350',
      Title: 'Work, Labor, and Capital in the Global Economy',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 3325',
      Title: 'Food and Work',
      Instructor: 'Sarah Besky (sb2626)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 3385',
      Title: 'The US-China Relationship: A Labor Perspective',
      Instructor: 'Eli Friedman (edf48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 4340',
      Title: 'Special Topics in International and Comparative Labor',
      Instructor: 'Michel Hermans (mh597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 4940',
      Title: 'ILR Global Scholars Capstone',
      Instructor: 'Eli Friedman (edf48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 5325',
      Title: 'Food & Work',
      Instructor: 'Sarah Besky (sb2626)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 5385',
      Title: 'The US-China Relationship: A Labor Perspective',
      Instructor: 'Eli Friedman (edf48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 6340',
      Title: 'Special Topics in International and Comparative Labor',
      Instructor: 'Michel Hermans (mh597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 6350',
      Title: 'Labor Markets and Income Distribution in Developing Economies',
      Instructor: 'Gary Fields (gsf2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRIC 9800',
      Title: 'Workshop in International and Comparative Labor',
      Instructor: 'John McCarthy (jem543)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 2660',
      Title: 'Essential Desktop Applications',
      Instructor: 'Christina Homrighouse (cmg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 4431',
      Title: 'Fundraising, Grantmaking, and Lobbying',
      Instructor: 'Christina Homrighouse (cmg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 4675',
      Title: 'Inclusive Leadership',
      Instructor: 'Christina Homrighouse (cmg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 4699',
      Title: 'Advanced Desktop Applications',
      Instructor: 'Christina Homrighouse (cmg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 6431',
      Title: 'Fundraising, Grantmaking, and Lobbying',
      Instructor: 'Christina Homrighouse (cmg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 6675',
      Title: 'Inclusive Leadership',
      Instructor: 'Joe Grasso (jeg68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRID 6990',
      Title: 'Advanced Desktop Applications',
      Instructor: 'Stephen Kim (skk86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLE 2400',
      Title: 'Economics of Wages and Employment',
      Instructor: 'George Jakubson (gj10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLE 3440',
      Title: 'Development of Economic Thought and Institutions',
      Instructor: 'George Jakubson (gj10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLE 4430',
      Title: 'Compensation, Incentives, and Productivity',
      Instructor: 'Robert Smith (rss14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLE 5400',
      Title: 'Labor Economics',
      Instructor: 'Stephanie Thomas (srt82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLE 7460',
      Title: 'Seminar in Labor Economics II',
      Instructor: 'George Boyer (grb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLE 9400',
      Title: 'Workshop in Labor Economics',
      Instructor: 'Stephanie Thomas (srt82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 1100',
      Title: 'Introduction to U.S. Labor History',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 1845',
      Title: 'American Capitalism',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 2010',
      Title: 'Labor and Employment Law',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 2050',
      Title: 'Labor Relations',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 2060',
      Title: 'Writing Seminar in Law',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 2070',
      Title: 'Writing Seminar in History',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 3055',
      Title: 'Rhetoric of the Labor Movement',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 3095',
      Title: 'Labor, Work, and Employment in US Public Education',
      Instructor: 'Tejasvi Nagaraja (tn329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 3300',
      Title: 'Advocacy and Debate',
      Instructor: 'Veronica Martinez-Matsuda (vm248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 3830',
      Title: "Workers' Rights as Human Rights",
      Instructor: 'Veronica Martinez-Matsuda (vm248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 3870',
      Title: 'The History of Consumption: From Wedgwood to Wal-Mart',
      Instructor: 'Veronica Martinez-Matsuda (vm248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4012',
      Title: 'Managing and Resolving Conflict',
      Instructor: 'Veronica Martinez-Matsuda (vm248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4019',
      Title: 'Dispute Resolution Practicum',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4023',
      Title: 'Disability, Employment, and Workforce Development Policy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4027',
      Title: 'Campus Mediation Practicum',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4029',
      Title:
        'Campus Mediation Practicum II: Advanced Issues in Restorative Justice',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4033',
      Title: 'Disability Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4035',
      Title: 'Intersectional Disability Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4066',
      Title: 'Technological Change at Work',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4825',
      Title: 'The Art of Negotiation in Business and Sports',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 4880',
      Title: 'American Ideals',
      Instructor: 'Teal Arcadi (ta245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 5010',
      Title: 'Labor and Employment Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6012',
      Title: 'Managing and Resolving Conflict',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6019',
      Title: 'Dispute Resolution Practicum',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6020',
      Title: 'The Practice of Labor Arbitration',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6027',
      Title: 'Campus Mediation Practicum',
      Instructor: 'Michael Gold (meg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6029',
      Title:
        'Campus Mediation Practicum II: Advanced Issues in Restorative Justice',
      Instructor: 'Risa Lieberwitz (rll5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6066',
      Title: 'Technological Change at Work',
      Instructor: 'John McCarthy (jem543)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6189',
      Title: 'Current Issues in Collective Bargaining',
      Instructor: 'John McCarthy (jem543)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6300',
      Title: 'Advocacy and Debate',
      Instructor: 'Duanyi Yang (dy338)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 6825',
      Title: 'The Art of Negotiation in Business and Sports',
      Instructor: 'Duanyi Yang (dy338)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRLR 9800',
      Title: 'Workshop in Labor Relations, Law and History',
      Instructor: 'Adam Seth Litwin (al2284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 1220',
      Title: 'Introduction to Organizational Behavior',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 2230',
      Title: 'Leadership in Organizations',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 3240',
      Title: 'Understanding and Improving Decision Making',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 3260',
      Title: 'Power and Influence: Building Power from Nothing',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 3760',
      Title: 'Sport Psychology',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 4260',
      Title: 'Managing for Creativity',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 4795',
      Title: 'Managerial Negotiations',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 5260',
      Title: 'Being Effective: Power and Influence',
      Instructor: 'Vanessa Bohns (vkb28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 5275',
      Title: 'Leading and Managing Teams',
      Instructor: 'Tove Hammer (thh2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 5285',
      Title: 'Understanding and Improving Decision Making',
      Instructor: 'Sean Fath (sf562)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 5790',
      Title: 'Managerial Negotiations',
      Instructor: 'Sean Fath (sf562)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 6265',
      Title: 'Making and Selling Creative Ideas',
      Instructor: 'Brittany Bond (bb686)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 7235',
      Title: 'Data Analysis in Practice',
      Instructor: 'Emily Zitek (emz34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILROB 9200',
      Title: 'Organizational Behavior Workshop',
      Instructor: 'Brian Lucas (bl679)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 2100',
      Title: 'Introductory Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 2110',
      Title: 'Statistical Methods for the Social Sciences II',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 2130',
      Title: 'Applied Regression Analysis',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 3080',
      Title: 'Probability Models and Inference',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 3110',
      Title: 'Probability Models and Inference for the Social Sciences',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 4140',
      Title: 'Applied Design',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 4550',
      Title: 'Applied Time Series Analysis',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ILRST 5110',
      Title: 'Statistical Methods for the Social Sciences II',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IM 4990',
      Title: 'Honors Research I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'IM 4991',
      Title: 'Honors Research II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INDO 1100',
      Title: 'Elements of Indonesian Language and Culture',
      Instructor: 'Jolanda Pandin (jmp244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INDO 1122',
      Title: 'Elementary Indonesian II',
      Instructor: 'Jolanda Pandin (jmp244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INDO 2202',
      Title: 'Intermediate Indonesian II',
      Instructor: 'Jolanda Pandin (jmp244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INDO 3302',
      Title: 'Advanced Indonesian II',
      Instructor: 'Jolanda Pandin (jmp244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INDO 4402',
      Title: 'Advanced Indonesian for Research II',
      Instructor: 'Jolanda Pandin (jmp244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 1260',
      Title: 'Choices and Consequences in Computing',
      Instructor: 'Karen Levy (kl838)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 1300',
      Title: 'Introductory Design and Programming for the Web',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 1380',
      Title: 'Data Science for All',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 1998',
      Title: 'Freshmen Team Projects',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 2300',
      Title: 'Intermediate Design and Programming for the Web',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 2450',
      Title: 'Communication and Technology',
      Instructor: 'Royal Westwater (rw547)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 2750',
      Title: 'Robot Ethics',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 3140',
      Title: 'Computational Psychology',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 3152',
      Title: 'Introduction to Computer Game Design',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 3200',
      Title: 'New Media and Society',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 3350',
      Title: 'Text Mining History and Literature',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 3450',
      Title: 'Human-Computer Interaction Design',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4152',
      Title: 'Advanced Topics in Computer Game Design',
      Instructor: 'Rene Kizilcec (rfk65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4200',
      Title: 'Information Policy: Applied Research and Analysis',
      Instructor: 'Gilly Leshed (gl87)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4220',
      Title: 'Networks II: Market Design',
      Instructor: 'Andrea Ippolito (aki2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4310',
      Title: 'Interactive Information Visualization',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4320',
      Title: 'Introduction to Rapid Prototyping and Physical Computing',
      Instructor: 'Aditya Vashistha (av567)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4340',
      Title: 'App Design and Prototyping',
      Instructor: 'Jon McKenzie (jvm62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4400',
      Title: 'Qualitative User Research and Design Methods',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4420',
      Title: 'Human Computer Interaction Studio',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4430',
      Title: 'Teams and Technology',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4450',
      Title: 'Computer-Mediated Communication',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4490',
      Title: 'Social Behavior and Technology',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4561',
      Title: 'Evaluation and Society',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4800',
      Title: 'Behavioral Science Interventions',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4900',
      Title: 'Independent Reading and Research',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4910',
      Title: 'Teaching in Information Science',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4940',
      Title: 'Special Topics in Information Science',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4997',
      Title: 'Practical Training in Information Science',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 4998',
      Title: 'Team Projects',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5000',
      Title:
        'Practical Training in Information Science for International Students',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5152',
      Title: 'Advanced Topics in Computer Game Design',
      Instructor: 'Chao Yu (cy395)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5200',
      Title: 'Information Policy: Applied Research and Analysis',
      Instructor: 'Park Doing (pad9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5303',
      Title: 'Privacy in the Digital Age',
      Instructor: 'Shimon Edelman (se37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5304',
      Title: 'Data Science in the Wild',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5305',
      Title: 'User Experience and User Research',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5311',
      Title: 'Interactive Information Visualization',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5321',
      Title: 'Introduction to Rapid Prototyping and Physical Computing',
      Instructor: 'Claire Wardle (cw736)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5330',
      Title: 'Technology, Media, and Democracy',
      Instructor: 'Matthew Wilkens (mw966)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5355',
      Title: 'Human Computer Interaction Design',
      Instructor: 'Matthew Wilkens (mw966)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5375',
      Title: 'Machine Learning for Health',
      Instructor: 'Matthew Wilkens (mw966)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5400',
      Title: 'Qualitative User Research and Design Methods',
      Instructor: 'Matthew Wilkens (mw966)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5420',
      Title: 'Urban Design Strategies and Case Studies',
      Instructor: 'Matthew Wilkens (mw966)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5431',
      Title: 'Teams and Technology',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5440',
      Title: 'App Design and Prototyping',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5450',
      Title: 'Computer-Mediated Communication',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5455',
      Title: 'Smart Cities: Requirements, Ambitions, and Limitations',
      Instructor: 'Qian Yang (qy242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5500',
      Title: 'Health Tech Clinical Practicum',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5800',
      Title: 'Behavioral Science Interventions',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5900',
      Title: 'MPS Project',
      Instructor: 'Walker White (wmw2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5905',
      Title: 'Professional Career Development',
      Instructor: 'Tracy Mitrano (tbm3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5915',
      Title: 'Remaking the City',
      Instructor: 'Cristobal Cheyre Forestier (cac555)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5920',
      Title:
        'Specialization Project for Connective Media, Health Tech, and Urban Tech',
      Instructor: 'Jeff Rzeszotarski (jmr395)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 5940',
      Title: 'Special Topics in Information Science',
      Instructor: 'Cheng Zhang (cz448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6120',
      Title: 'Ubiquitous Computing',
      Instructor: 'Cheng Zhang (cz448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6220',
      Title: 'Networks II: Market Design',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6300',
      Title: 'Advanced Language Technologies',
      Instructor: 'Gilly Leshed (gl87)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6350',
      Title: 'Text Mining History and Literature',
      Instructor: 'Francois Guimbretiere (fvg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6450',
      Title: 'Computer-Mediated Communication',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6490',
      Title: 'Social Behavior and Technology',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6520',
      Title: 'Human Computer Interaction Graduate Studio',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6600',
      Title: 'Technology for Underserved Communities',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 6940',
      Title: 'Special Topics in Information Science',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 7060',
      Title: 'Digital Life Research Seminar',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 7090',
      Title: 'IS Colloquium',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 7900',
      Title: 'Independent Research',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'INFO 9900',
      Title: 'Thesis Research',
      Instructor: 'Malte Jung (mfj28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 1110',
      Title: 'Elementary Italian In Rome I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 1202',
      Title: 'Italian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 1212',
      Title: 'Italian Food Culture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 1401',
      Title: 'Intensive Elementary Italian',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 2130',
      Title: 'Italian Intermediate Composition and Conversation II in Rome',
      Instructor: 'Riccardo Sama (rs2576)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 2202',
      Title: 'Italian IV',
      Instructor: 'Valentina Fulginiti (vf65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 2204',
      Title: 'The Cinematic Eye of Italy',
      Instructor: 'Gianluca Pulsoni (gp365)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 2240',
      Title: 'One Italian Masterpiece I',
      Instructor: 'Nora Siena (ns929)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 3580',
      Title: 'Creating Renaissance Man (and Woman)',
      Instructor: 'Giulia Andreoni (ga275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 3600',
      Title: 'Machiavelli, Yesterday and Today',
      Instructor: 'Giulia Andreoni (ga275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 4200',
      Title: 'Special Topics in Italian Literature',
      Instructor: 'Michela Baraldi (mb348)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 4300',
      Title: 'Honors in Italian Literature',
      Instructor: 'Michela Baraldi (mb348)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 6400',
      Title: 'Special Topics in Italian Literature',
      Instructor: 'K.E. von Wittelsbach (keb11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 6420',
      Title: 'Mysticism in Medieval Europe',
      Instructor: 'K.E. von Wittelsbach (keb11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ITAL 6520',
      Title: 'Historicizing Communism',
      Instructor: 'Carolina Ciampaglia (cc863)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JAPAN 1102',
      Title: 'Elementary Japanese II',
      Instructor: 'Sahoko Ichikawa (si24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JAPAN 2202',
      Title: 'Intermediate Japanese II',
      Instructor: 'Sahoko Ichikawa (si24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JAPAN 3302',
      Title: 'High Intermediate Japanese II',
      Instructor: 'Sahoko Ichikawa (si24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JAPAN 4402',
      Title: 'Advanced Japanese II',
      Instructor: 'Sahoko Ichikawa (si24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JPLIT 6625',
      Title: 'Directed Readings',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JPLIT 6628',
      Title: 'Advanced Directed Readings',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 1102',
      Title: 'Elementary Modern Hebrew II',
      Instructor: 'Shalom Shoer (ss66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 1777',
      Title: 'Elementary Yiddish II',
      Instructor: 'Shalom Shoer (ss66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 2100',
      Title: 'Intermediate Modern Hebrew',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 2644',
      Title: 'Introduction to Judaism',
      Instructor: 'Philip Hollander (ph469)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 2790',
      Title: 'Jewish Films and Filmmakers: Hollywood and Beyond',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 2853',
      Title: 'The Law in Jewish History',
      Instructor: 'Elliot Shapiro (ehs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 2958',
      Title: 'Empires and Vampires: History of Eastern Europe',
      Instructor: 'Olga Litvak (ol76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 3102',
      Title: 'Advanced Modern Hebrew II',
      Instructor: 'Cristina Florea (cf476)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 3717',
      Title: 'Modern Sephardi and Mizrahi Identities',
      Instructor: 'Philip Hollander (ph469)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 3720',
      Title: 'Women in Biblical Israel',
      Instructor: 'Deborah Starr (das86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 3888',
      Title: 'Jews, Christians, and Others in Late Antiquity',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 4102',
      Title: 'Topics in Biblical Hebrew Prose',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 4195',
      Title: 'Identity Politics in the Ibero-Atlantic',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 4721',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: 'Mayer Juni (mj472)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 4742',
      Title:
        'Dying for God: Judaism, Christianity and the Meaning of Martyrdom',
      Instructor: 'Christine Leuenberger (cal22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 4767',
      Title: 'Natural History of Religion',
      Instructor: 'Olga Litvak (ol76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 4992',
      Title: 'Independent Study - Undergraduate',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 6195',
      Title: 'Identity Politics in the Ibero-Atlantic',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 6720',
      Title: 'Women in Biblical Israel',
      Instructor: 'Mayer Juni (mj472)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 6742',
      Title:
        'Dying for God: Judaism, Christianity and the Meaning of Martyrdom',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 6767',
      Title: 'Natural History of Religion',
      Instructor: 'Olga Litvak (ol76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 6777',
      Title: 'Modern Sephardi and Mizrahi Identities',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'JWST 6888',
      Title: 'Jews, Christians, and Others in Late Antiquity',
      Instructor: 'Deborah Starr (das86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KANAD 1100',
      Title: 'Elements of Kannada Language and Culture',
      Instructor: 'Meena Haribal (mmh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KHMER 1122',
      Title: 'Elementary Khmer II',
      Instructor: 'Hannah Phan (hp23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KHMER 2202',
      Title: 'Intermediate Khmer II',
      Instructor: 'Hannah Phan (hp23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KHMER 3301',
      Title: 'Advanced Khmer I',
      Instructor: 'Hannah Phan (hp23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KHMER 3302',
      Title: 'Advanced Khmer II',
      Instructor: 'Hannah Phan (hp23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KOREA 1102',
      Title: 'Elementary Korean II',
      Instructor: 'Meejeong Song (ms296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KOREA 1110',
      Title: 'Elementary Korean Reading and Writing II',
      Instructor: 'Meejeong Song (ms296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KOREA 2202',
      Title: 'Intermediate Korean II',
      Instructor: 'Meejeong Song (ms296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KOREA 2210',
      Title: 'Intermediate Korean Reading and Writing II',
      Instructor: 'Meejeong Song (ms296)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KOREA 3302',
      Title: 'High Intermediate Korean II',
      Instructor: 'Hankyul Kim (hk783)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'KOREA 4402',
      Title: 'Advanced Korean II',
      Instructor: 'Hankyul Kim (hk783)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 1420',
      Title: 'Grounding in Landscape Architecture II',
      Instructor: 'Martin Hogue (mh2448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 2020',
      Title: 'Medium of the Landscape II',
      Instructor: 'Mitchell Glass (mjg374)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 3020',
      Title: 'Integrating Theory and Practice II',
      Instructor: 'Jamie Vanucchi (jlv29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 3180',
      Title: 'Site Assembly',
      Instructor: 'Josh Cerra (jfc299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4020',
      Title: 'Capstone Community Design Studio',
      Instructor: 'Maria Goula (mg987)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4030',
      Title: 'Directed Study: The Concentration',
      Instructor: 'Zaneta Hong (zhh1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4100',
      Title: 'Computer Applications in Landscape Architecture',
      Instructor: 'Zaneta Hong (zhh1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4120',
      Title: 'Professional Practice',
      Instructor: 'Anne Weber (alw297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4830',
      Title: 'Seminar in Landscape Studies',
      Instructor: 'Valerie Aymer (vea3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4920',
      Title:
        'Creating the Urban Eden: Woody Plant Selection, Design, and Landscape Establishment',
      Instructor: 'Valerie Aymer (vea3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4970',
      Title: 'Individual Study in Landscape Architecture',
      Instructor: 'Valerie Aymer (vea3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4980',
      Title: 'Undergraduate Teaching',
      Instructor: 'Martin Hogue (mh2448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 4990',
      Title: 'Undergraduate Research',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5020',
      Title: 'Composition and Theory II',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5060',
      Title: 'Graphic Communication II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5090',
      Title: 'Master of Professional Studies Project',
      Instructor: 'Mitchell Glass (mjg374)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5100',
      Title: 'Computer Applications in Landscape Architecture',
      Instructor: 'Maria Goula (mg987)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5830',
      Title: 'Seminar in Landscape Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5900',
      Title: 'Theoretical Foundations',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5920',
      Title:
        'Creating the Urban Eden: Woody Plant Selection, Design, and Landscape Establishment',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5970',
      Title: 'Graduate Individual Study in Landscape Architecture',
      Instructor: 'Kathryn Gleason (klg16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 5980',
      Title: 'Graduate Teaching',
      Instructor: 'Jennifer Birkeland (jb2597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 6020',
      Title: 'Integrating Theory and Practice II',
      Instructor: 'Martin Hogue (mh2448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 6030',
      Title: 'Directed Study: The Concentration',
      Instructor: 'Jennifer Birkeland (jb2597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 6120',
      Title: 'Professional Practice',
      Instructor: 'Jennifer Birkeland (jb2597)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 6180',
      Title: 'Site Assembly',
      Instructor: 'Jamie Vanucchi (jlv29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 6940',
      Title: 'Special Topics in Landscape Architecture',
      Instructor: 'Josh Cerra (jfc299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 7020',
      Title: 'Advanced Design Studio',
      Instructor: 'Kathryn Gleason (klg16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LA 8900',
      Title: "Master's Thesis in Landscape Architecture",
      Instructor: 'Paula Horrigan (phh3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 1951',
      Title: 'Foreign Policy as Subversion',
      Instructor: 'Tamara Loos (tl14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 2091',
      Title:
        'A History of Human Trafficking in the Atlantic World, ca. 1400-1800',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 2170',
      Title: 'Early Modern Iberian Survey',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 2200',
      Title: 'Perspectives on Latin America',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 2307',
      Title: 'Histories of the African Diaspora',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 2308',
      Title: 'Modern Caribbean History',
      Instructor: 'Casey Schmitt (cs2437)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 3336',
      Title: 'Border Environments',
      Instructor: 'Laura Francis (lrf62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 3405',
      Title: 'A Maritime History of Early America, ca. 1450-1850',
      Instructor: 'Arturo Florentino Ruiz Mautino (ar2358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 3550',
      Title: 'Ancient Mexico and Central America',
      Instructor: 'Judith Byfield (jab632)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 3613',
      Title: 'Cornell Steel Band',
      Instructor: 'Judith Byfield (jab632)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 4000',
      Title: 'Contemporary Issues in Latin - Latino America',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 4666',
      Title: 'Specters of Latin America',
      Instructor: 'Casey Schmitt (cs2437)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 4970',
      Title: 'Independent Study in Latin American Studies',
      Instructor: 'John Henderson (jsh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 6000',
      Title: 'Contemporary Issues in Latin-Latino America',
      Instructor: 'Christopher Miller (cjm299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 6255',
      Title: 'Ancient Mexico and Central America',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 6336',
      Title: 'Border Environments',
      Instructor: 'Irina Troconis Gonzalez (irt23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATA 6666',
      Title: 'Specters of Latin America',
      Instructor: 'Tim Devoogd (tjd5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 1202',
      Title: 'Elementary Latin II',
      Instructor: 'Samantha Davis (scd225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 1205',
      Title: 'Intermediate Latin I',
      Instructor: 'Ethan Della Rocca (ehd35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 2201',
      Title: 'Latin Prose',
      Instructor: 'Todd Clary (tcc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 2205',
      Title: 'Virgil',
      Instructor: 'Daniel Gallagher (dbg223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 3220',
      Title: 'Rapid Reading in Latin',
      Instructor: 'Hayden Pelliccia (hnp1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 3286',
      Title: 'Independent Study in Latin, Undergraduate Level',
      Instructor: 'Michael Fontaine (mf268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 5212',
      Title: 'Elementary Latin II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 5215',
      Title: 'Intermediate Latin I',
      Instructor: 'Samantha Davis (scd225)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 5221',
      Title: 'Latin Prose',
      Instructor: 'Ethan Della Rocca (ehd35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 5225',
      Title: 'Virgil',
      Instructor: 'Todd Clary (tcc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 5230',
      Title: 'Rapid Reading in Latin',
      Instructor: 'Daniel Gallagher (dbg223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 6202',
      Title: 'Advanced Readings in Latin Literature',
      Instructor: 'Hayden Pelliccia (hnp1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 6214',
      Title:
        'The Commedia and the Classics: Antiquity Through the Eyes of Dante',
      Instructor: 'Michael Fontaine (mf268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 7262',
      Title: 'Latin Philosophical Texts',
      Instructor: 'Daniel Gallagher (dbg223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 7272',
      Title: 'Graduate Seminar in Latin',
      Instructor: 'Daniel Gallagher (dbg223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LATIN 7920',
      Title: 'Independent Study in Latin',
      Instructor: 'Scott MacDonald (scm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 3920',
      Title: 'The U.S. Constitution: Crisis, Change and Legitimacy',
      Instructor: 'Aziz Rana (ar643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 4051',
      Title: 'Death Penalty in America',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 4081',
      Title: 'International Human Rights Law and Advocacy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 4131',
      Title: 'The Nature, Functions, and Limits of Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 5001',
      Title: 'Civil Procedure',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 5061',
      Title: 'Criminal Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 5081',
      Title: 'Lawyering',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 5090',
      Title: 'Advanced Financial Statement Analysis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 5121',
      Title: 'Property',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6000',
      Title: 'Law In-Absentia Study',
      Instructor: 'Sheri Johnson (slj8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6001',
      Title: 'Accounting for Lawyers',
      Instructor: 'Elizabeth Brundige (eb456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6010',
      Title: 'Civil Procedure for LLMs',
      Instructor: 'Dawn Chutkow (dmc66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6011',
      Title: 'Administrative Law: The Law of the Regulatory State',
      Instructor: 'Kevin Clermont (kmc12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6013',
      Title: 'Business Litigation',
      Instructor: 'Maggie Gardner (mg2354)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6015',
      Title: 'Advanced Civil Procedure: Class Actions',
      Instructor: 'Alexander Reinert (aar239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6025',
      Title: 'Private Funds',
      Instructor: 'Emmanuel Arnaud (eha39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6027',
      Title: 'Campus Mediation Practicum',
      Instructor: 'Stephen Garvey (spg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6029',
      Title:
        'Campus Mediation Practicum II: Advanced Issues in Restorative Justice',
      Instructor: 'Avani Sood (ams779)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6051',
      Title: 'Advanced Legal Research in Business Law',
      Instructor: 'Rachel Goldberg (rtg67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6055',
      Title: 'In-House Lawyers: Day-to-Day, Deals and Managing a Crisis',
      Instructor: 'Jaclyn Kelley-Widmer (jak533)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6060',
      Title: 'Financial Statement Analysis',
      Instructor: 'Estelle McKee (emm28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6067',
      Title: 'Compliance Systems',
      Instructor: 'Estelle McKee (emm28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6070',
      Title: 'Federal Policy Making in Action',
      Instructor: 'Michelle Fongyee Whelan (maf282)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6081',
      Title: 'Animal Law',
      Instructor: 'Michelle Fongyee Whelan (maf282)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6085',
      Title: 'Law Practice Technology',
      Instructor: 'Lara Freed (lgf28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6105',
      Title:
        'Deciphering DeFi: Legal, Governance and Economic Issues Facing Decentralized Finance Platforms',
      Instructor: 'Lara Freed (lgf28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6122',
      Title: 'Public Health Law',
      Instructor: 'Kristen Stanley (ks78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6131',
      Title: 'Business Organizations',
      Instructor: 'Jonathan Feldman (jf655)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6135',
      Title:
        'Bioethics Mediation and Resolution of Ethical Dilemmas in Health Care',
      Instructor: 'Jonathan Feldman (jf655)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6158',
      Title: 'Client Counseling',
      Instructor: 'David Nichols (dcn6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6191',
      Title: 'Conflict of Laws',
      Instructor: 'Deborah Dinner (dd533)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6193',
      Title: 'The Practice of International Arbitration',
      Instructor: 'Emily Sherwin (els36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6201',
      Title: 'First Amendment Law',
      Instructor: 'Laura Underkuffler (lu27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6204',
      Title: 'Cornell Prison Education Program Teaching Practicum',
      Instructor: 'Laura Underkuffler (lu27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6231',
      Title: 'Comparative Copyright and Knowledge Protection',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6235',
      Title: 'Financial Distress, Bankruptcy and Restructuring',
      Instructor: 'Robert Sarachan (ras226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6264',
      Title: 'Criminal Procedures: Investigations',
      Instructor: 'Riley Keenan (rtk44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6273',
      Title: 'Consumer Data Privacy',
      Instructor: 'Riley Keenan (rtk44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6301',
      Title: 'Directed Reading',
      Instructor: 'Jeffrey Rachlinski (jjr7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6311',
      Title: 'Education Law',
      Instructor: 'Thomas Heiden (tjh66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6331',
      Title: 'Employment Law',
      Instructor: 'Donald Frederico (drf52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6401',
      Title: 'Evidence',
      Instructor: 'Olga Gutman (og11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6431',
      Title: 'Federal Courts',
      Instructor: 'Olga Gutman (og11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6436',
      Title: 'Practicing Criminal Defense in Federal Court',
      Instructor: 'Katrina Nobles (kn64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6441',
      Title: 'Federal Income Taxation',
      Instructor: 'Katrina Nobles (kn64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6454',
      Title: 'Haudenosaunee - New York State Relations',
      Instructor: 'Matthew Morrison (mmm72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6456',
      Title: 'Transgender People and the Law',
      Instructor: 'David Kappos (dk695)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6457',
      Title: 'Inclusion and Exclusion in American Law',
      Instructor: 'David Kappos (dk695)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6461',
      Title: 'Financial Institutions',
      Instructor: 'David Nichols (dcn6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6465',
      Title: 'Global M and A Practice',
      Instructor: 'Sanjeev Bhojraj (sb235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6471',
      Title: 'Health Law',
      Instructor: 'Sanjeev Bhojraj (sb235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6474',
      Title: 'High Growth Corporate Transactions II',
      Instructor: 'Sanjeev Bhojraj (sb235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6501',
      Title: 'Insurance Law',
      Instructor: 'Richard John (rtj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6511',
      Title: 'Intellectual Property',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6514',
      Title: 'Foreign, Comparative, and International Legal Research',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6521',
      Title: 'International Economic Law',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6550',
      Title: 'Gender and the Law',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6560',
      Title: 'Intermediate Accounting',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6566',
      Title: 'Intensive Depositions',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6568',
      Title: 'Internet Law, Privacy and Security',
      Instructor: 'Mariann Sullivan (ms2676)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6569',
      Title: 'Introduction to Depositions',
      Instructor: 'Jacob Sayward (jes77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6575',
      Title: 'Depositions',
      Instructor: 'Irina Marinescu (im373)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6601',
      Title: 'Land Use Law',
      Instructor: 'Irina Marinescu (im373)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6614',
      Title: 'Law Team',
      Instructor: 'Kristen Underhill (kau6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6632',
      Title: 'Transnational Corruption and the Law',
      Instructor: 'Dan Awrey (aja288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6641',
      Title: 'Professional Responsibility',
      Instructor: 'Edward McArdle (efm65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6643',
      Title: 'Law of Autonomous Vehicles',
      Instructor: 'Lara Freed (lgf28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6644',
      Title: 'Derivatives Law and Policy',
      Instructor: 'Diogo Magalhaes (dm727)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6646',
      Title: 'NFTs: Legal and Business Considerations',
      Instructor: 'Diora Ziyaeva (dz232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6649',
      Title: 'Anticorruption Laws: Rule of Law, Practice, and Public Policy',
      Instructor: 'Nelson Tebbe (nt277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6654',
      Title:
        'Negotiating Your Series A: Legal Aspects of Early Stage Venture Funding',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6681',
      Title: 'International Law and Foreign Direct Investment',
      Instructor: 'Kim Nayyer (kpn32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6701',
      Title: 'Legislation',
      Instructor: 'Murillo Campello (mnc35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6710',
      Title: 'Law and Literature',
      Instructor: 'Sherry Colb (sfc44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6730',
      Title: 'Multicultural Work Environment I and II',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6734',
      Title: 'Music Law',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6761',
      Title: 'Principles of American Legal Writing',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6768',
      Title: 'Public Finance',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6791',
      Title: 'Public International Law',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6821',
      Title: 'Securities Regulation',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6848',
      Title: 'Social Ventures',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6861',
      Title: 'Supervised Teaching',
      Instructor: 'Mark Faber (mef54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6862',
      Title: 'Supervised Experiential Learning',
      Instructor: 'James Grimmelmann (jtg243)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6871',
      Title: 'Supervised Writing',
      Instructor: 'Aziz Rana (ar643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6881',
      Title:
        'Supervised Teaching and Supervised Writing - Lawyering Program Honors Fellows',
      Instructor: 'Nelson Tebbe (nt277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6891',
      Title: 'Taxation of Corporations and Shareholders',
      Instructor: 'Celia Bigoness (cwb94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6896',
      Title: 'Technology Transactions II',
      Instructor: 'Odette Lienau (ol53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6898',
      Title: 'The Art of Negotiation in Business and Sports',
      Instructor: 'Michael Heise (mrh38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 6923',
      Title: 'Intensive Trial Advocacy',
      Instructor: 'Stewart Schwab (sjs15)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7034',
      Title: 'First Amendment Law Clinic 3',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7035',
      Title: 'First Amendment Law Clinic IV',
      Instructor: 'Keir Weyble (kw346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7066',
      Title:
        'Challenges to the Marketplace of Competing Ideas: Censorship and Regulation of Big Tech',
      Instructor: 'Michael Dorf (md494)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7072',
      Title: 'Animal Rights',
      Instructor: 'Randy Zelin (rz434)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7077',
      Title: 'Critical Legal Information Literacy',
      Instructor: 'Robert Green (rag5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7086',
      Title: 'Business and Human Rights',
      Instructor: 'Robert Porter (rop28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7123',
      Title: 'Chinese Law: Tradition and Modernization',
      Instructor: 'Ezra Young (ey237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7146',
      Title: 'Comparative Legal Philosophy',
      Instructor: 'Aziz Rana (ar643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7162',
      Title: 'Contemporary American Jury',
      Instructor: 'Saule Omarova (sto24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7175',
      Title: 'Deals Seminar: Drafting and Analyzing Corporate Agreements',
      Instructor: 'Takayuki Kihira (tk268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7179',
      Title: 'Digital Life Research Seminar',
      Instructor: 'Kristen Underhill (kau6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7187',
      Title: 'Disasters and Human Rights - Selected Issues',
      Instructor: 'Anthony Collins (arc265)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7189',
      Title: 'Current Issues in Collective Bargaining',
      Instructor: 'Michael Heise (mrh38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7269',
      Title: 'FAHS: Critical Perspectives: Racism, Xenophobia and Im/migration',
      Instructor: 'Oskar Liivak (ol10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7288',
      Title: 'Insanity',
      Instructor: 'Alison Shea (aas425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7295',
      Title: 'Global Labor and Employment Law',
      Instructor: 'Odette Lienau (ol53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7321',
      Title: 'International Criminal Law',
      Instructor: 'Deborah Dinner (dd533)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7368',
      Title: 'International Organizations and The World Legal Order',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7372',
      Title: 'Issues in FinTech',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7411',
      Title: 'Law and Higher Education',
      Instructor: 'Theodore Grossman (tmg49)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7578',
      Title: 'Markets, Democracy, and the Rule of Law',
      Instructor: 'Theodore Grossman (tmg49)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7580',
      Title: 'Markets, Morals, and Methods',
      Instructor: 'James Grimmelmann (jtg243)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7590',
      Title: 'Mortgage and Asset Securitization',
      Instructor: 'James Grimmelmann (jtg243)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7652',
      Title: 'Education Law Practicum',
      Instructor: 'Michelle Fongyee Whelan (maf282)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7695',
      Title: 'Restrictive Employment Covenants',
      Instructor: 'Thomas Heiden (tjh66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7743',
      Title: 'Seminar in Ethics and Value Policy',
      Instructor: 'Laura Underkuffler (lu27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7760',
      Title: 'Movement Lawyering Clinic I',
      Instructor: "Matthew D'Amore (mmd28)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7762',
      Title: 'Movement Lawyering Clinic II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7763',
      Title: 'Movement Lawyering Clinic III',
      Instructor: 'Emad Atiq (eha47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7764',
      Title:
        'Contemporary Challenges in International Law and U.S. Foreign Policy',
      Instructor: 'Ed Walters (ejw94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7766',
      Title: 'Taxation of Mergers and Acquisitions',
      Instructor: 'Ed Walters (ejw94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7767',
      Title: 'Movement Lawyering Clinic IV',
      Instructor: 'Dan Awrey (aja288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7783',
      Title: 'Topics in Intellectual Property',
      Instructor: 'Stephen Krause (sjk257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7790',
      Title: 'Afghanistan Assistance Clinic',
      Instructor: 'Stephen Krause (sjk257)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7801',
      Title: 'Asylum and Convention Against Torture Appellate Clinic',
      Instructor: 'Mohamed Arafa (ma2252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7810',
      Title: 'Advanced Asylum and Convention Against Torture Appellate Clinic',
      Instructor: 'Timothy Bixler (teb39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7811',
      Title: 'Capital Punishment Clinic I',
      Instructor: 'Timothy Bixler (teb39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7815',
      Title: 'Capital Punishment Clinic II',
      Instructor: 'Muna Ndulo (mbn5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7817',
      Title: 'Child Advocacy Practicum',
      Instructor: 'Jed Stiglitz (js2758)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7818',
      Title: 'Child Advocacy Practicum II',
      Instructor: 'Elizabeth Anker (esa52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7832',
      Title: 'Externship - Full Time',
      Instructor: 'Akua Akyea (aoa28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7834',
      Title: 'Externship - Part Time',
      Instructor: 'Howard Leib (hdl44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7839',
      Title: 'Entrepreneurship Clinic I',
      Instructor: 'Amanda Whorton (amw424)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7840',
      Title: 'Estate Planning Practicum',
      Instructor: 'Amanda Whorton (amw424)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7841',
      Title: '1L Immigration Law and Advocacy Clinic',
      Instructor: 'Chenay Weyble (cbw75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7845',
      Title: 'Advanced Entrepreneurship Clinic',
      Instructor: 'Robert Hockett (rch37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7854',
      Title: 'Tenants Advocacy Practicum I',
      Instructor: 'Nicholas Rostow (cnr39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7855',
      Title: 'International Human Rights: Litigation and Advocacy I',
      Instructor: 'Nicholas Rostow (cnr39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7857',
      Title: 'Farmworker Legal Assistance Clinic I',
      Instructor: 'Charles Whitehead (ckw26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7858',
      Title: 'Farmworker Legal Assistance Clinic II',
      Instructor: 'Kyle Westaway (kjw246)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7859',
      Title: 'Farmworker Legal Assistance Clinic III',
      Instructor: 'Kyle Westaway (kjw246)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7860',
      Title: 'International Human Rights: Litigation and Advocacy II',
      Instructor: 'Dan Awrey (aja288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7862',
      Title: 'Externship - Pro Bono Scholars Program',
      Instructor: 'Chenay Weyble (cbw75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7864',
      Title: 'Farmworker Legal Assistance Clinic IV',
      Instructor: 'George Hay (gah7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7866',
      Title: 'Advanced Criminal Defense Trial Practicum - Local Court',
      Instructor: 'Emmanuel Arnaud (eha39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7867',
      Title: 'First Amendment Law Clinic',
      Instructor: 'Dawn Chutkow (dmc66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7868',
      Title: 'First Amendment Law Clinic 2',
      Instructor: 'Amanda Whorton (amw424)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7870',
      Title: 'Juvenile Justice Clinic',
      Instructor: 'Jaclyn Kelley-Widmer (jak533)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7873',
      Title: 'Juvenile Justice Clinic II',
      Instructor: 'Elizabeth Brundige (eb456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7875',
      Title: 'Low-Income Taxpayer Law and Accounting Practicum',
      Instructor: 'Muna Ndulo (mbn5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7876',
      Title: 'Low-Income Taxpayer Law and Accounting Practicum II',
      Instructor: 'John Blume (jb94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7877',
      Title: 'Low-Income Taxpayer Law and Accounting Practicum III',
      Instructor: 'Emily Sherwin (els36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7879',
      Title: 'International Human Rights: Litigation and Advocacy IV',
      Instructor: 'Sherry Colb (sfc44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7891',
      Title: 'Tenants Advocacy Practicum II',
      Instructor: 'Olga Gutman (og11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7892',
      Title: 'Tenants Advocacy Practicum III',
      Instructor: 'Michael Huyghue (mlh77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7893',
      Title: 'Tenants Advocacy Practicum IV',
      Instructor: 'Emmanuel Arnaud (eha39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7905',
      Title: 'Advocacy for LGBT Communities Practicum',
      Instructor: 'Angela Cornell (abc49)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7906',
      Title: 'Advocacy for LGBT Communities Practicum II',
      Instructor: 'Sara Bronin (scb263)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7914',
      Title: 'Global Gender Justice Clinic',
      Instructor: 'Michael Dorf (md494)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7915',
      Title: 'Advanced Gender Justice Clinic',
      Instructor: 'Douglas Lasdon (dhl56)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7925',
      Title: 'New York Attorney General Practicum I',
      Instructor: 'Keir Weyble (kw346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7927',
      Title: 'Appellate Criminal Defense Clinic',
      Instructor: 'Sheri Johnson (slj8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7945',
      Title: 'Federal Indian Law Practicum I',
      Instructor: 'Emily Sherwin (els36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7946',
      Title: 'Federal Indian Law Practicum II',
      Instructor: 'Ian Kysel (imk48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7949',
      Title: 'Federal Indian Law Practcm III',
      Instructor: 'Emad Atiq (eha47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7950',
      Title: 'Federal Indian Law Practicum IV',
      Instructor: 'Aziz Rana (ar643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7953',
      Title: 'Securities Law Clinic I',
      Instructor: 'Dan Awrey (aja288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7954',
      Title: 'Securities Law Clinic II',
      Instructor: 'Louis Guard (lhg34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LAW 7955',
      Title: 'Securities Law Clinic III',
      Instructor: 'Lara Freed (lgf28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEAD 1960',
      Title: 'Leadership Training Practicum',
      Instructor: 'Amy Somchanhmavong (ayk3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEAD 3100',
      Title:
        'Foundations in Leadership: Skills for Professional Success and Life',
      Instructor: 'Larry VanDeValk (ljv4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEAD 4925',
      Title: 'Leadership Minor ePortfolio',
      Instructor: 'Marvin Pritts (mpp3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEAD 4970',
      Title: 'Undergraduate Experience in Leadership',
      Instructor: 'Donna Haeger (dlh266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEAD 5223',
      Title: 'Lifelong Learning, Just Sustainability and Learning Ecosystems',
      Instructor: 'Marvin Pritts (mpp3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5100',
      Title: 'Introduction to the U.S. Legal System',
      Instructor: 'Michael Dorf (md494)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5101',
      Title: 'Working with Business Contracts',
      Instructor: 'Michael Dorf (md494)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5108',
      Title: 'Compliance Systems',
      Instructor: 'Michael Dorf (md494)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5113',
      Title: 'U.S. Antitrust Law and Policy',
      Instructor: 'Mark Underberg (mau22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5114',
      Title: 'Business Immigration Law',
      Instructor: 'Mark Underberg (mau22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5116',
      Title: 'Cybersecurity, Policy and Governance',
      Instructor: 'Mark Underberg (mau22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 5117',
      Title: 'Privacy Law, Regulation and Business',
      Instructor: 'Richard John (rtj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 6100',
      Title: 'Mastering Negotiations',
      Instructor: 'Richard John (rtj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LEGAL 7100',
      Title: 'Capstone Project I',
      Instructor: 'Richard John (rtj1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LGBT 2290',
      Title: 'Introduction to Lesbian, Gay, Bisexual, and Transgender Studies',
      Instructor: 'Sara Warner (slw42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LGBT 3210',
      Title: 'Gender and the Brain',
      Instructor: 'Shelby Dietz (sbd3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LGBT 3550',
      Title: 'Decadence',
      Instructor: 'Ellis Hanson (eh36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LGBT 3990',
      Title: 'Undergraduate Independent Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LGBT 4701',
      Title: 'Nightlife',
      Instructor: 'Sara Warner (slw42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LGBT 6775',
      Title: 'Queer Time and the Senses',
      Instructor: 'Karen Jaime (kj12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 1100',
      Title: 'FWS: Language, Thought, and Reality',
      Instructor: 'Dorit Abusch (da45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 1101',
      Title: 'Introduction to Linguistics',
      Instructor: 'Helena Aparicio Terrasa (ha425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 1104',
      Title: 'WIM: Introduction to Cognitive Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 1170',
      Title: 'Introduction to Cognitive Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 2212',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 2215',
      Title: 'Psychology of Language',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 2223',
      Title: 'Language and the Law',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3302',
      Title: 'Introduction to Phonetics and Phonology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3314',
      Title: 'Introduction to Historical Linguistics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3315',
      Title: 'Old Norse I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3325',
      Title: 'Cayuga Language and Culture II',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3332',
      Title: 'Philosophy of Language',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3344',
      Title: 'Superlinguistics: Comics, Signs and Other Sequential Images',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 3390',
      Title: 'Independent Study in Linguistics',
      Instructor: 'Morten Christiansen (mhc27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4419',
      Title: 'Phonetics I',
      Instructor: 'Molly Diesing (md20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4424',
      Title: 'Computational Linguistics I',
      Instructor: 'Molly Diesing (md20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4425',
      Title: 'Pragmatics',
      Instructor: 'Molly Diesing (md20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4451',
      Title: 'Greek Comparative Grammar',
      Instructor: 'Draga Zec (dz17)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4477',
      Title: 'Experimental Methods in Language Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4492',
      Title: 'Honors Research Workshop II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 4494',
      Title: 'Honors Thesis Research',
      Instructor: 'Michael Weiss (mlw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6314',
      Title: 'Introduction to Historical Linguistics',
      Instructor: 'Michael Weiss (mlw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6402',
      Title: 'Phonology II',
      Instructor: 'Michael Weiss (mlw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6404',
      Title: 'Syntax II',
      Instructor: 'Brynhildur Stefansdottir (bs724)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6419',
      Title: 'Phonetics I',
      Instructor: 'Jessica Martin (jlm556)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6422',
      Title: 'Semantics II',
      Instructor: 'Carlotta Pavese (cp645)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6424',
      Title: 'Computational Linguistics I',
      Instructor: 'Dorit Abusch (da45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6425',
      Title: 'Pragmatics',
      Instructor: 'Dorit Abusch (da45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6451',
      Title: 'Greek Comparative Grammar',
      Instructor: 'Helena Aparicio Terrasa (ha425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6477',
      Title: 'Experimental Methods in Language Sciences',
      Instructor: 'Abigail Cohn (acc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6600',
      Title: 'Field Methods',
      Instructor: 'Miloje Despic (md682)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6603',
      Title: 'Research Workshop',
      Instructor: 'Molly Diesing (md20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6604',
      Title: 'Research Workshop',
      Instructor: 'Sarah Murray (sem269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6635',
      Title: 'Indo-European Workshop',
      Instructor: 'Alan Nussbaum (ajn8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6692',
      Title: 'Phonetic Data Analysis Workshop',
      Instructor: 'Mats Rooth (mr249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 6693',
      Title: 'Computational Psycholinguistics Discussion',
      Instructor: 'Brenda Schertz (bs794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 7702',
      Title: 'Directed Research',
      Instructor: 'Sam Tilsen (st657)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 7710',
      Title: 'Computational Seminar',
      Instructor: 'Marten van Schijndel (mv443)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LING 7712',
      Title: 'Syntax Seminar',
      Instructor: 'Michael Weiss (mlw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 1101',
      Title: 'Research Strategies in Africana and Latino Studies',
      Instructor: 'Tom Ottaviano (tjo65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 1820',
      Title: 'U.S. Borders, North and South',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 2020',
      Title: 'Spanish for Heritage Speakers',
      Instructor: 'Jon Parmenter (jwp35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 2100',
      Title: 'Introduction to Latinx Studies',
      Instructor: 'Maria Cristina Garcia (mcg20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 2152',
      Title: '(Im)migration and (Im)migrants: Then and Now',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 2460',
      Title: 'Contemporary Narratives by Latina Writers',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 3336',
      Title: 'Border Environments',
      Instructor: 'Mary Redmond (mkr4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 3405',
      Title: 'Multicultural Issues in Education',
      Instructor: 'Mary Redmond (mkr4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 4000',
      Title: 'Contemporary Issues in Latin - Latino America',
      Instructor: 'John Kennedy (jwk258)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 4210',
      Title: 'Undergraduate Independent Study',
      Instructor: 'Sergio Garcia-Rios (sig35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 4668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 4701',
      Title: 'Nightlife',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 4851',
      Title: 'Refugees',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 6000',
      Title: 'Contemporary Issues in Latin-Latino America',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 6210',
      Title: 'Graduate Student Independent Study',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 6336',
      Title: 'Border Environments',
      Instructor: 'Debra Castillo (dac9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 6668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Sofia Villenas (sav33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 6701',
      Title: 'Nightlife',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'LSP 6851',
      Title: 'Refugees',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 1510',
      Title: 'Modeling and Simulation of Real-World Scientific Problems',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 1900',
      Title: 'Freshman and Nontechnical Projects in Mechanical Engineering',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 2020',
      Title: 'Statics and Mechanics of Solids',
      Instructor: 'Nelly Andarawis-Puri (na424)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 2030',
      Title: 'Dynamics',
      Instructor: 'C Avedisian (cta2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 2250',
      Title: 'Mechanical Synthesis',
      Instructor: 'Rebecca Barthelmie (rb737)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 3130',
      Title: 'Atomic and Molecular Structure of Matter',
      Instructor: 'Gregory Bewley (gpb1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 3240',
      Title: 'Heat Transfer',
      Instructor: 'Lawrence Bonassar (lb244)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 3260',
      Title: 'System Dynamics',
      Instructor: 'Joseph Burns (jab16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4130',
      Title: 'Mechanics of Composite Structures',
      Instructor: 'John Richard Callister (jc62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4131',
      Title: 'Mechanics of Composite Structures',
      Instructor: 'Mark Campbell (mc288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4160',
      Title: 'Spacecraft Technology and Systems Architecture',
      Instructor: 'Lance Collins (lc246)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4161',
      Title: 'Spacecraft Technology and Systems Architecture',
      Instructor: 'Nikolaos Bouklas (nb589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4180',
      Title: 'Autonomous Mobile Robots',
      Instructor: 'Olivier Desjardins (od57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4220',
      Title: 'Introduction to Internet of Things — Technology and Engagement',
      Instructor: 'David Erickson (de54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4221',
      Title: 'Introduction to Internet of Things - Technology and Engagement',
      Instructor: 'Silvia Ferrari (sf375)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4230',
      Title: 'Intermediate Fluid Dynamics',
      Instructor: 'Elizabeth Fisher (emf4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4231',
      Title: 'Intermediate Fluid Dynamics',
      Instructor: 'Mahdi Esmaily Moghadam (me399)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4250',
      Title: 'FSAE Automotive Design Project',
      Instructor: 'Al George (arg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4291',
      Title: 'Supervised Senior Design Experience',
      Instructor: 'Christopher Hernandez, Professor (cjh275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4320',
      Title:
        'Integrated Micro Sensors and Actuators: Bridging the Physical and Digital Worlds',
      Instructor: 'Mostafa Hassani (sh2495)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4510',
      Title: 'Propulsion of Aircraft and Rockets',
      Instructor: 'Maha Haji (mh2498)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4530',
      Title: 'Computer-Aided Engineering: Applications to Biological Processes',
      Instructor: 'Guy Hoffman (gh384)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4590',
      Title: 'Introduction to Controlled Fusion: Principles and Technology',
      Instructor: 'Chung Yuen Hui (ch45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4610',
      Title: 'Entrepreneurship for Engineers',
      Instructor: 'Brian Kirby (bk88)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4630',
      Title: 'Advanced Product Design',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4631',
      Title: 'Advanced Product Design',
      Instructor: 'Atieh Moridi (am2975)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4670',
      Title: 'Polymer Mechanics',
      Instructor: 'Michel Louge (myl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4671',
      Title: 'Polymer Mechanics',
      Instructor: 'Douglas MacMartin (dgm224)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4770',
      Title: 'Engineering Vibrations',
      Instructor: 'Matthew Miller (mpm4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4850',
      Title: 'Special Technical Elective',
      Instructor: 'Mason Peck (mp336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4860',
      Title: 'Automotive Engineering',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4861',
      Title: 'Automotive Engineering',
      Instructor: 'Elaine Petro (emp245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4900',
      Title: 'Individual and Group Projects in Mechanical Engineering',
      Instructor: 'Stuart Phoenix (slp6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4950',
      Title: 'Special Major-Approved Elective',
      Instructor: 'Richard Rand (rhr2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4980',
      Title: 'Teaching Experience in Mechanical Engineering',
      Instructor: 'Hadas Ritz (hr32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 4998',
      Title: 'International Research Internship',
      Instructor: 'Andy Ruina (alr3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5010',
      Title: 'Future Energy Systems',
      Instructor: 'Wolfgang Sachse (whs3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5120',
      Title:
        "3D Printing Parts that Don't Break: From Processing to Performance",
      Instructor: 'Dmitry Savransky (ds264)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5135',
      Title: 'Mechanics of Composite Structures',
      Instructor: 'Daniel Selva (ds925)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5160',
      Title: 'Spacecraft Technology and Systems Architecture',
      Instructor: 'Robert Shepherd (rfs247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5180',
      Title: 'Autonomous Mobile Robots',
      Instructor: 'Meredith Silberstein (ms2682)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5210',
      Title: 'Dimensional Tolerancing in Mechanical Design',
      Instructor: 'Ankur Singh (as2833)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5220',
      Title: 'Introduction to Internet of Things — Technology and Engagement',
      Instructor: 'Timothy Sands (tas297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5230',
      Title: 'Intermediate Fluid Dynamics with CFD',
      Instructor: 'Sadaf Sobhani (ss4222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5260',
      Title: 'Design for Manufacture and Assembly',
      Instructor: 'Marjolein van der Meulen (mcv3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5310',
      Title: 'Advanced Thermodynamics of Multiphase Systems',
      Instructor: 'Jane Wang (zw24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5469',
      Title: 'Energy Seminar II',
      Instructor: 'Jingjie Yeo (jy876)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5510',
      Title: 'Propulsion of Aircraft and Rockets',
      Instructor: 'Chas Williamson (cw26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5530',
      Title: 'Computer-Aided Engineering: Applications to Biological Processes',
      Instructor: 'Zhiting Tian (zt223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5630',
      Title: 'Advanced Product Design',
      Instructor: 'Alan Zehnder (atz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5670',
      Title: 'Polymer Mechanics',
      Instructor: 'K. Max Zhang (kz33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5770',
      Title: 'Engineering Vibrations',
      Instructor: 'Rajesh Bhaskaran (rb88)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5790',
      Title: 'Nonlinear Dynamics and Chaos',
      Instructor: 'Matt Ulinski (mu25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5860',
      Title: 'Automotive Engineering',
      Instructor: 'Olivier Desjardins (od57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5920',
      Title: 'Systems Analysis Behavior and Optimization',
      Instructor: 'Van Adams (vha3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5940',
      Title: 'Professional Development for Master of Engineering in MAE',
      Instructor: 'Douglas MacMartin (dgm224)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5949',
      Title: 'Enterprise Engineering Colloquium',
      Instructor: 'Zhiting Tian (zt223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 5950',
      Title: 'Theory and Practice of Systems Architecture',
      Instructor: 'C Avedisian (cta2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6040',
      Title: 'Tribology and Surface Engineering',
      Instructor: 'Robert Shepherd (rfs247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6230',
      Title: 'Computational Fluid Dynamics',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6260',
      Title: 'Multiscale Computational Mechanics',
      Instructor: 'Perrine Pepiot (pp427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6310',
      Title: 'Turbulence and Turbulent Flows',
      Instructor: 'K. Max Zhang (kz33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6540',
      Title: 'Plasmas for Propulsion',
      Instructor: 'Hadas Ritz (hr32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6670',
      Title: 'Soft Tissue Biomechanics II: Viscoelasticity and Phasic Theory',
      Instructor: 'K. Max Zhang (kz33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6720',
      Title: 'Advanced Astrodynamics',
      Instructor: 'David Erickson (de54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6730',
      Title: 'Robot Manipulation',
      Instructor: 'John Richard Callister (jc62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6780',
      Title: 'Multivariable Control Theory',
      Instructor: 'Van Adams (vha3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6900',
      Title: 'Special Investigations in Mechanical and Aerospace Engineering',
      Instructor: 'Hadas Kress-Gazit (hk478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6910',
      Title: 'M.Eng. Independent Study',
      Instructor: 'Guy Hoffman (gh384)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6950',
      Title: 'Special Topics',
      Instructor: 'Mason Peck (mp336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 6998',
      Title: 'Graduate Research Internship for International Students',
      Instructor: 'Mason Peck (mp336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 7880',
      Title: 'Continuum Mechanics and Thermodynamics',
      Instructor: 'Mason Peck (mp336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 7999',
      Title: 'Mechanical and Aerospace Engineering Colloquium',
      Instructor: 'Atieh Moridi (am2975)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MAE 8900',
      Title: 'Research in Mechanical and Aerospace Engineering',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1006',
      Title: 'Academic Support for MATH 1106',
      Instructor: 'Brendan Caseria (bjc297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1011',
      Title: 'Academic Support for MATH 1110',
      Instructor: 'Brendan Caseria (bjc297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1012',
      Title: 'Academic Support for MATH 1120',
      Instructor: 'Brendan Caseria (bjc297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1021',
      Title: 'Academic Support for MATH 2210',
      Instructor: 'Brendan Caseria (bjc297)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1106',
      Title: 'Modeling with Calculus for the Life Sciences',
      Instructor: 'Mark Jauquet (maj29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1110',
      Title: 'Calculus I',
      Instructor: 'Mark Jauquet (maj29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1120',
      Title: 'Calculus II',
      Instructor: 'Prairie Wentworth-Nice (pew45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1340',
      Title: 'Strategy, Cooperation, and Conflict',
      Instructor: 'Prairie Wentworth-Nice (pew45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1710',
      Title: 'Statistical Theory and Application in the Real World',
      Instructor: 'James Belk (jmb226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1910',
      Title: 'Calculus for Engineers',
      Instructor: 'James Belk (jmb226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 1920',
      Title: 'Multivariable Calculus for Engineers',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 2130',
      Title: 'Calculus III',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 2210',
      Title: 'Linear Algebra',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 2220',
      Title: 'Multivariable Calculus',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 2240',
      Title: 'Theoretical Linear Algebra and Calculus',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 2930',
      Title: 'Differential Equations for Engineers',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 2940',
      Title: 'Linear Algebra for Engineers',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 3040',
      Title: 'Prove It!',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 3110',
      Title: 'Introduction to Analysis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 3320',
      Title: 'Introduction to Number Theory',
      Instructor: 'Kimoi Kemboi (sjk269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 3340',
      Title: 'Abstract Algebra',
      Instructor: 'Renee Mirka (rem379)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 3360',
      Title: 'Applicable Algebra',
      Instructor: 'Justin Moore (jtm237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4030',
      Title: 'History of Mathematics',
      Instructor: 'Andrew Melchionna (am2433)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4130',
      Title: 'Honors Introduction to Analysis I',
      Instructor: 'Elise McMahon (ecm236)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4140',
      Title: 'Honors Introduction to Analysis II',
      Instructor: 'John Whelan (jhw268)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4180',
      Title: 'Complex Analysis',
      Instructor: 'Mary Ann Huntley (mh688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4210',
      Title: 'Nonlinear Dynamics and Chaos',
      Instructor: 'Quincy Loney (qel2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4260',
      Title: 'Numerical Analysis: Linear and Nonlinear Problems',
      Instructor: 'Quincy Loney (qel2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4280',
      Title: 'Introduction to Partial Differential Equations',
      Instructor: 'Inbeom Lee (il279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4310',
      Title: 'Linear Algebra',
      Instructor: 'Emily Dautenhahn (esd54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4340',
      Title: 'Honors Introduction to Algebra',
      Instructor: 'Trevor Jones (ttj9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4420',
      Title: 'Introduction to Combinatorics II',
      Instructor: 'Chaitanya Tappu (ct596)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4500',
      Title: 'Matrix Groups',
      Instructor: 'Camil Muscalu (fm69)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4540',
      Title: 'Introduction to Differential Geometry',
      Instructor: 'Marcelo Aguiar (ma18)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4710',
      Title: 'Basic Probability',
      Instructor: 'Marcelo Aguiar (ma18)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4720',
      Title: 'Statistics',
      Instructor: 'Daniel Halpern-Leistner (dsh233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4740',
      Title: 'Stochastic Processes',
      Instructor: 'Daniel Halpern-Leistner (dsh233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4820',
      Title: 'Topics in Logic and the Foundations of Mathematics',
      Instructor: 'Michael Nussbaum (mn66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4900',
      Title: 'Supervised Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4901',
      Title: 'Supervised Reading',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 4980',
      Title: 'Special Study for Mathematics Teaching',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 5080',
      Title: 'Special Study for Teachers',
      Instructor: 'Carl Poitras (cbp8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 5420',
      Title: 'Introduction to Combinatorics II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6120',
      Title: 'Complex Analysis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6150',
      Title: 'Partial Differential Equations',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6220',
      Title: 'Applied Functional Analysis',
      Instructor: 'Kelly Delp (kd288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6320',
      Title: 'Algebra',
      Instructor: 'Kelly Delp (kd288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6350',
      Title: 'Homological Algebra',
      Instructor: 'Matthew Durham (mgd65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6370',
      Title: 'Algebraic Number Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6410',
      Title: 'Enumerative Combinatorics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6510',
      Title: 'Algebraic Topology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6540',
      Title: 'Homotopy Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6670',
      Title: 'Algebraic Geometry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6720',
      Title: 'Probability Theory II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6730',
      Title: 'Mathematical Statistics I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 6830',
      Title: 'Model Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7120',
      Title: 'Topics in Analysis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7290',
      Title: 'Seminar on Scientific Computing and Numerics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7390',
      Title: 'Topics in Lie Groups and Lie Algebras',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7560',
      Title: 'Topology and Geometric Group Theory Seminar',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7580',
      Title: 'Topics in Topology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7620',
      Title: 'Topics in Geometry',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7710',
      Title: 'Topics in Probability Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7820',
      Title: 'Seminar in Logic',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MATH 7900',
      Title: 'Supervised Reading and Research',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 1101',
      Title: 'FWS: Aspects of Medieval Culture',
      Instructor: 'Savannah Caldwell (sc2936)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 1740',
      Title: 'Imperial China',
      Instructor: 'Ryan Randle (rar348)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 2082',
      Title: 'Of Ice and Men: Masculinities in the Medieval North',
      Instructor: 'Zachary Thomas (zt245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 2170',
      Title: 'Early Modern Iberian Survey',
      Instructor: 'Alice Wolff (acw262)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 2355',
      Title: 'Introduction to Medieval Art and Culture',
      Instructor: 'Thari Zweers (tlz5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 3080',
      Title: 'Icelandic Family Sagas',
      Instructor: 'Patrick Naeve (pgn23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 3120',
      Title: 'Beowulf',
      Instructor: 'Samuel Barber (sjb354)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 3200',
      Title: 'The Viking Age',
      Instructor: 'Samuel Barber (sjb354)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 3210',
      Title: 'Medieval Philosophy',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 3315',
      Title: 'Old Norse I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 4002',
      Title: 'Latin Philosophical Texts',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 4351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Oren Falk (of24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 4420',
      Title: 'Tang Poetry: Themes and Contexts',
      Instructor: 'Laura Francis (lrf62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 6020',
      Title: 'Latin Philosophical Texts',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 6120',
      Title: 'Beowulf',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 6210',
      Title: 'Topics in Medieval Philosophy',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 6351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Thomas Hill (tdh1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 6425',
      Title: 'Mysticism in Medieval Europe',
      Instructor: 'Thomas Hill (tdh1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 8010',
      Title: 'Directed Study - Individual',
      Instructor: 'Oren Falk (of24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MEDVL 8020',
      Title: 'Directed Study - Group',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5020',
      Title: 'Managerial Reporting',
      Instructor: 'Daniel Szpiro (das247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5080',
      Title: 'Operations Management',
      Instructor: 'Srinagesh Gavirneni (sg337)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5090',
      Title: 'Strategy',
      Instructor: 'Garrick Blalock (gb78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5110',
      Title: 'Financial Modeling',
      Instructor: 'Garrick Blalock (gb78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5225',
      Title: 'Systems and Analytics',
      Instructor: 'Garrick Blalock (gb78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5260',
      Title: 'Advanced Corporate Finance',
      Instructor: 'David Nichols (dcn6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5390',
      Title: 'Profiles in Leadership',
      Instructor: 'Eric Lewis (eel33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5640',
      Title: 'Entrepreneurship',
      Instructor: 'Margarita Tsoutsoura (mt765)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MGMT 5830',
      Title: 'Investments',
      Instructor: 'Joseph Wilson (jtw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 1102',
      Title: 'Foundations in Leadership',
      Instructor: 'Andrew MacVey (apm249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 1111',
      Title: 'Leadership Laboratory I',
      Instructor: 'Andrew MacVey (apm249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 2202',
      Title: 'Army Doctrine and Decision Making',
      Instructor: 'Charles Ouellette (cmo89)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 2211',
      Title: 'Leadership Laboratory II',
      Instructor: 'Charles Ouellette (cmo89)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 3302',
      Title: 'Applied Leadership in Small Unit Operations',
      Instructor: 'Stephen Ficchi (slf236)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 3311',
      Title: 'Leadership Laboratory III',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 4400',
      Title: 'Special Problems for Advanced Undergraduates',
      Instructor: 'James Tully (jet255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 4402',
      Title: 'Company Grade Leadership',
      Instructor: 'James Tully (jet255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MILS 4411',
      Title: 'Leadership Laboratory IV',
      Instructor: 'James Tully (jet255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 1190',
      Title: 'Biomaterials for the Skeletal System',
      Instructor: 'Eve Donnelly (eld26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 2060',
      Title: 'Atomic and Molecular Structure of Matter',
      Instructor: 'Chekesha Watson (cml66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 2620',
      Title: 'Electronic Materials for the Information Age',
      Instructor: 'Chekesha Watson (cml66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 2900',
      Title: 'Special Projects in Materials Science and Engineering',
      Instructor: 'R. van Dover (rbv2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 2920',
      Title: 'Research Involvement IIb',
      Instructor: 'R. van Dover (rbv2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 3040',
      Title: 'Kinetics, Diffusion, and Phase Transformations',
      Instructor: 'R. van Dover (rbv2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 3050',
      Title: 'Electronic, Magnetic, and Dielectric Properties of Materials',
      Instructor: 'R. van Dover (rbv2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 3070',
      Title: 'Materials Design Concepts I',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 3120',
      Title: 'Junior Laboratory II',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 3900',
      Title: 'Special Projects in Materials Science and Engineering',
      Instructor: 'Julia Dshemuchadse (jd732)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 3920',
      Title: 'Research Involvement IIIb',
      Instructor: 'Julia Dshemuchadse (jd732)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 4060',
      Title: 'Senior Experimental Thesis II',
      Instructor: 'Darrell Schlom (ds636)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 4070',
      Title: 'Materials Design Concepts II',
      Instructor: 'Darrell Schlom (ds636)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 4900',
      Title: 'Special Projects in Materials Science and Engineering',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 4920',
      Title: 'Research Involvement IVb',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 4950',
      Title: 'Undergraduate Teaching Involvement',
      Instructor: 'Lisa Thompson (lrt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5005',
      Title: 'MSE MEng Professional Development',
      Instructor: 'Lisa Thompson (lrt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5010',
      Title: 'MEng Project - Ongoing',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5011',
      Title: 'MEng Project - Terminal',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5150',
      Title: 'Structures and Materials for Sustainable Energy Systems',
      Instructor: 'R. van Dover (rbv2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5210',
      Title: 'Properties of Solid Polymers',
      Instructor: 'Marty Murtagh (mjm43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5440',
      Title:
        'Soap Bubbles, Snowflakes, and Steps: Interfacial and Surface Phenomena in Materials Science',
      Instructor: 'Marty Murtagh (mjm43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5620',
      Title:
        'Biomineralization: The Formation and Properties of Inorganic Biomaterials',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5720',
      Title: 'Computational Materials Science',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5802',
      Title: 'Materials Structure and Mechanical Properties',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5840',
      Title: 'Kinetics, Diffusion, and Phase Transformation',
      Instructor: 'Alexander Deyhim (akd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5850',
      Title: 'Electronic, Magnetic, and Dielectric Properties of Materials',
      Instructor: 'Alexander Deyhim (akd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5860',
      Title: 'Atomic and Molecular Structure of Matter',
      Instructor: 'Alexander Deyhim (akd9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 5862',
      Title: 'Introduction to Electronic Materials',
      Instructor: 'Petru Petrina (pp25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 6010',
      Title: 'Chemistry of Materials',
      Instructor: 'Christopher Ober (cko3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 6040',
      Title: 'Kinetics of Reactions in Condensed Matter',
      Instructor: 'Christopher Umbach (ccu1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 6210',
      Title: 'Solid State Chemistry',
      Instructor: 'Lara Estroff (lae37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 7930',
      Title: 'Peer Mentoring and Leadership Essentials',
      Instructor: 'Nicole Benedek (nab83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 8000',
      Title: 'Research in Materials Science',
      Instructor: 'Nicole Benedek (nab83)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 8010',
      Title: 'Materials Science and Engineering Colloquium',
      Instructor: 'Shefford Baker (spb14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MSE 8020',
      Title: 'Materials Science Research Seminars',
      Instructor: 'Julia Dshemuchadse (jd732)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 1100',
      Title: 'Elements of Musical Notation',
      Instructor: 'Rafael Torralvo da Silva (rt468)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 1105',
      Title: 'Building Musical Skills',
      Instructor: 'Rafael Torralvo da Silva (rt468)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 1202',
      Title: 'Classical Music from 1750 to the Present',
      Instructor: 'James Spinazzola (jms862)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 1212',
      Title: 'Music on the Brain',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 1466',
      Title: 'Physics of Musical Sound',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 1701',
      Title: 'FWS: Sound, Sense and Ideas',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2102',
      Title: 'Theory, Materials and Techniques II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2112',
      Title: 'Collaborative Songwriting',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2201',
      Title: 'Introduction to Music Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2221',
      Title: 'Bach and Handel',
      Instructor: 'Zoe Weiss (zw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2311',
      Title: 'The Art and Craft of Music Journalism',
      Instructor: 'Annie Lewandowski (apl72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2330',
      Title: 'Music in and of East Asia',
      Instructor: 'Robert Thorne (ret6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2421',
      Title: 'Computers in Music Performance',
      Instructor: 'Robert Thorne (ret6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2441',
      Title: 'Shaping Sound II',
      Instructor: 'Robert Thorne (ret6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 2703',
      Title: 'Thinking Media',
      Instructor: 'Thomas Cressy (tac245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3324',
      Title: 'Singing from the Heart: Choral Music and the Human Experience',
      Instructor: 'Lee Tyson (lkt34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3422',
      Title: 'Perform it Yourself',
      Instructor: 'Lee Tyson (lkt34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3431',
      Title: 'Sound Design',
      Instructor: 'Lawrence Shuster (lbs239)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3511',
      Title: 'Individual Instruction',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3512',
      Title: 'Individual Instruction',
      Instructor: 'Annie Lewandowski (apl72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3513',
      Title: 'Individual Instruction',
      Instructor: 'Benjamin Piekut (bdp63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3514',
      Title: 'Individual Instruction',
      Instructor: 'David Yearsley (dgy2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3602',
      Title: 'Chorus',
      Instructor: 'David Yearsley (dgy2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3603',
      Title: 'Glee Club',
      Instructor: 'Christopher Miller (cjm299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3604',
      Title: 'Chorale',
      Instructor: 'Kevin Ernste (kme32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3610',
      Title: 'Cornell Gamelan Ensemble',
      Instructor: 'Marianthi Papalexandri-Alexandri (mp955)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3613',
      Title: 'Cornell Steel Band',
      Instructor: 'Erik Born (ecb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3615',
      Title: 'Jazz Repertory Ensemble',
      Instructor: 'Anna Steppler (ams828)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3616',
      Title: 'Cornell Hip-Hop Collective',
      Instructor: 'Piyawat Louilarpprasert (pl553)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3621',
      Title: 'Cornell Symphony Orchestra',
      Instructor: 'Warren Cross (wdc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3631',
      Title: 'Cornell Wind Symphony',
      Instructor: 'Warren Cross (wdc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3634',
      Title: 'Cornell Percussion Group',
      Instructor: 'Tamara Acosta (tca46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3660',
      Title: 'Music Improvisation Ensemble',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3901',
      Title: 'Supplemental Study in Music',
      Instructor: 'Desmond Bratton (drb333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 3902',
      Title: 'Choral Musicianship',
      Instructor: 'Ilze Brink-Button (ib255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4121',
      Title: 'Advanced Conducting',
      Instructor: 'Blaise Bryski (bdb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4341',
      Title: 'Writing Musical Ethnography',
      Instructor: 'Louis Arques (la372)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4440',
      Title: 'FutureSound',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4501',
      Title: 'Individual Instruction',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4601',
      Title: 'Chamber Singers',
      Instructor: 'Peter Chwazik (pac254)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4615',
      Title: 'Jazz Ensemble',
      Instructor: 'Anna Coogan (atc86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4616',
      Title: 'Jazz Combos',
      Instructor: 'Emily DiAngelo (ead236)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4621',
      Title: 'Cornell Chamber Orchestra',
      Instructor: 'Gregory Evans (ge75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4631',
      Title: 'Chamber Flute Ensemble',
      Instructor: 'Eric Feinstein (ehf6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4641',
      Title: 'Advanced Instruction in Gamelan',
      Instructor: 'Lucy Fitz Gibbon (lhf33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4651',
      Title: 'Chamber Music Ensemble',
      Instructor: 'Melissa Gardiner (mmg252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4667',
      Title: 'Sonic Remains: Media, Performance, and Material Culture',
      Instructor: 'John Haines-Eitzen (jah242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4901',
      Title: 'Independent Study in Music',
      Instructor: 'Ricardo Lugo-Garay (rll258)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 4912',
      Title: 'Honors in Music',
      Instructor: 'Daniel Hawkins (dhh67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 6341',
      Title: 'Writing Musical Ethnography',
      Instructor: 'Thomas Feng (ttf8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 6400',
      Title: 'Thinking Media Studies',
      Instructor: 'Timothy Ball (tb565)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 6410',
      Title: 'Bending Instruments',
      Instructor: 'Ariana Kim (ak932)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 6440',
      Title: 'FutureSound',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 6667',
      Title: 'Sonic Remains: Media, Performance, and Material Culture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 7111',
      Title: 'Composition',
      Instructor: 'Annie Lewandowski (apl72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 7321',
      Title: 'Politics, Utopias, and Noise in the Sound Archive',
      Instructor: 'Mike Lee (mcl77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 7356',
      Title: 'Rhetoric of Social Movements',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 7501',
      Title: 'Historical Performance Practice',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'MUSIC 7901',
      Title: 'Independent Study in Music',
      Instructor: 'Judy Park (jp626)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NACCT 5532',
      Title: 'Fraud Examination',
      Instructor: 'Marquise Riley (msr259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 1100',
      Title: 'Drill Lab-Independent Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 1102',
      Title: 'Sea Power and Maritime Affairs',
      Instructor: 'Tyler Trainor (tst45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 1142',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Sean Mansfield (stm86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 2242',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Tyler Trainor (tst45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 2301',
      Title: 'Principles of Navigation',
      Instructor: 'Sean Mansfield (stm86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 3202',
      Title: 'Naval Ships Systems II (Weapons)',
      Instructor: 'Sean Mansfield (stm86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 3342',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Tyler Trainor (tst45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 4402',
      Title: 'Leadership and Ethics',
      Instructor: 'Sean Mansfield (stm86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 4411',
      Title: 'Fundamentals of Maneuver Warfare',
      Instructor: 'Scott Hardy (sah347)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 4442',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Anthony Roach (acr266)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NAVS 4991',
      Title: 'Independent Study for Naval Science',
      Instructor: 'Edwin Powers (ep472)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 3000',
      Title: 'Designing New Ventures',
      Instructor: 'Tom Schryver (tps1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 4720',
      Title: 'Managing Family and Privately Held Firms',
      Instructor: 'Margarita Tsoutsoura (mt765)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5000',
      Title: 'Intermediate Accounting',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5010',
      Title: 'Taxes and Business Strategy',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5020',
      Title: 'Managerial Accounting and Reporting',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5040',
      Title: 'Federal Income Taxation of Real Estate Ventures',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5060',
      Title: 'Financial Statement Analysis',
      Instructor: 'Ryan Guggenmos (rdg222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5070',
      Title: 'Entrepreneurship for Scientists and Engineers',
      Instructor: 'Ryan Guggenmos (rdg222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5075',
      Title: 'Big Red Ventures',
      Instructor: 'Ryan Guggenmos (rdg222)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5090',
      Title: 'Advanced Financial Statement Analysis',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5110',
      Title: 'Financial Modeling',
      Instructor: 'David Nichols (dcn6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5111',
      Title: 'Foundations of Financial Modeling',
      Instructor: 'Sanjeev Bhojraj (sb235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5120',
      Title: 'Applied Portfolio Management',
      Instructor: 'Sanjeev Bhojraj (sb235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5140',
      Title: 'Ethics and Corporate Culture',
      Instructor: 'Sanjeev Bhojraj (sb235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5150',
      Title: 'Leadership Theory and Practice',
      Instructor: 'Bradley Treat (bnt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5180',
      Title: 'Intro to Design and Innovation',
      Instructor: 'Bradley Treat (bnt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5205',
      Title: 'Digital Business and Retail Operations',
      Instructor: 'Tom Schryver (tps1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5245',
      Title: 'Introduction to Macroeconomics',
      Instructor: 'David Nichols (dcn6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5250',
      Title: 'Cayuga Fund Equity Analyst',
      Instructor: 'Xinyu Zhang (xz687)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5255',
      Title: 'Global Macroeconomics News and Events',
      Instructor: 'Xinyu Zhang (xz687)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5301',
      Title: 'Intermediate Design and Programming for Web',
      Instructor: 'Xinyu Zhang (xz687)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5305',
      Title: 'Entrepreneurial Finance: Valuation and Term Sheet Design',
      Instructor: 'David Nichols (dcn6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5330',
      Title: 'Management Cases',
      Instructor: 'Scott Stewart (sds58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5350',
      Title: 'Federal Income Taxation of Corporations and Shareholders',
      Instructor: 'Dana Radcliffe (dmr42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5355',
      Title:
        'Federal Income Taxation of Flow Through Entities, Estates and Trusts',
      Instructor: 'Dana Radcliffe (dmr42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5360',
      Title: 'Investment Banking Essentials',
      Instructor: 'Dana Radcliffe (dmr42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5370',
      Title: 'Intensive Private Equity Practicum',
      Instructor: 'Michael Hostetler (mjh35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5380',
      Title: 'The Business Idea Factory',
      Instructor: 'Michael Hostetler (mjh35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5390',
      Title: 'Profiles in Leadership',
      Instructor: 'Michael Hostetler (mjh35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5410',
      Title: 'Project Management',
      Instructor: 'Michael Hostetler (mjh35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5420',
      Title: 'Investment and Portfolio Management',
      Instructor: 'Stefanie Kubanek (sek274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5490',
      Title: 'Corporate Finance Immersion/Practicum',
      Instructor: 'Stefanie Kubanek (sek274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5530',
      Title: 'Accounting and Financial Decision Making',
      Instructor: 'Vishal Gaur (vg77)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5560',
      Title: 'Investment Banking Immersion/Practicum',
      Instructor: 'Sofia Kalantzi (sk2922)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5580',
      Title: 'Corporate Financial Policy',
      Instructor: 'Sofia Kalantzi (sk2922)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5590',
      Title: 'The Venture Capital Industry and Private Equity Markets',
      Instructor: 'Sofia Kalantzi (sk2922)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5615',
      Title: 'Digital Platform Strategy',
      Instructor: 'Scott Stewart (sds58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5640',
      Title: 'Designing New Ventures',
      Instructor: 'Ori Heffetz (oh33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5645',
      Title: 'Dilemmas in Founding New Ventures',
      Instructor: 'Ori Heffetz (oh33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5650',
      Title: 'Corporate Governance',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5670',
      Title: 'Management Writing',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5672',
      Title: 'Writing Style',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5680',
      Title: 'Management Presentations',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5682',
      Title: 'Interpersonal Communications',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5685',
      Title: 'Courageous Communication',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5690',
      Title: 'Management Consulting Essentials',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5710',
      Title: 'Cornell Management Simulation',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5770',
      Title: 'Entrepreneurship in Creative Industries',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5780',
      Title: 'Consulting Problem-Solving Process',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5790',
      Title: 'Applied Principles of Business Strategy',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5830',
      Title: 'Investment Research and Asset Management Practicum',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5885',
      Title: 'Advanced Critical Thinking for Business Leaders',
      Instructor: 'Kyle Harms (kjh235)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5940',
      Title:
        'Mergers and Acquisitions - Accounting, Modeling and Evaluations of Deals',
      Instructor: 'Tom Schryver (tps1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 5980',
      Title: 'Behavioral Finance',
      Instructor: 'Peter Balnaves (pmb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6029',
      Title: 'Leading Agile Innovation',
      Instructor: 'Scott Bearse (sfb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6030',
      Title: 'Strategies for Sustainability',
      Instructor: 'Scott Bearse (sfb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6035',
      Title: 'Advanced Topics in Sustainable Global Enterprise',
      Instructor: 'Scott Bearse (sfb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6060',
      Title: 'Evaluating Capital Investment Projects',
      Instructor: 'Scott Bearse (sfb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6070',
      Title: 'Designing Data Products',
      Instructor: 'Scott Bearse (sfb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6130',
      Title: 'Women and Leadership',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6145',
      Title: 'AI Strategy and Applications',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6200',
      Title: 'Marketing Research',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6240',
      Title: 'Strategic Product and Marketing Immersion',
      Instructor: 'John McKinley (jwm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6320',
      Title: 'Core Leadership Skills for a VUCA World',
      Instructor: 'David Capaldi (dbc3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6330',
      Title: 'Actualizing Your Startup - Part II',
      Instructor: 'David Capaldi (dbc3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6340',
      Title: 'Customer Analytics and Strategy',
      Instructor: 'Peter Balnaves (pmb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6370',
      Title:
        'Current Global Issues for Business: China, India, Latin America, Europe and beyond',
      Instructor: 'Peter Balnaves (pmb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6380',
      Title: 'Finance and Sustainable Global Enterprise Colloquium',
      Instructor: 'Bradley Treat (bnt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6430',
      Title: 'Managerial Spreadsheet Modeling',
      Instructor: 'Joseph Wilson (jtw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6460',
      Title: 'Financial Institutions',
      Instructor: 'Joseph Wilson (jtw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6470',
      Title: 'Advanced Spreadsheet Modeling',
      Instructor: 'Joseph Wilson (jtw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6480',
      Title: 'Digital Technology Practicum',
      Instructor: 'Joseph Wilson (jtw45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6500',
      Title: 'Strategic Operations Immersion Practicum',
      Instructor: 'Natalia Santamaria (nst43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6550',
      Title: 'Business Data Analysis with SQL',
      Instructor: 'Matthew Baron (mdb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6560',
      Title: 'Valuation Principles',
      Instructor: 'Matthew Baron (mdb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6575',
      Title: 'Topics in ESG Investing',
      Instructor: 'Matthew Baron (mdb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6580',
      Title: 'Sustainable Global Enterprise Practicum Project',
      Instructor: 'Matthew Baron (mdb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6581',
      Title: 'Sustainable Global Enterprise Practicum Project',
      Instructor: 'Matthew Baron (mdb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6585',
      Title: 'Sustainable Global Enterprise in Practice',
      Instructor: 'Matthew Baron (mdb327)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6607',
      Title: 'Executive Compensation',
      Instructor: 'Paul Clancy (pjc279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6650',
      Title: 'The Strategic Management of Technology and Innovation',
      Instructor: 'Paul Clancy (pjc279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6682',
      Title: 'Crisis Communications for Business Leaders',
      Instructor: 'Paul Clancy (pjc279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6690',
      Title: 'Building a Consumer Internet Business',
      Instructor: 'Daniel Szpiro (das247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6710',
      Title: 'Ethical Decision Making in Management',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6720',
      Title: 'Managing Family and Privately Held Firms',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6820',
      Title: 'Negotiation I: Negotiation Essentials',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6860',
      Title: 'Startup Learning Series',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6870',
      Title:
        'Leading Across Differences: Understanding Identity, Dialogue, and Influence',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6880',
      Title: 'Financial Distress, Bankruptcy and Restructuring',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6910',
      Title: 'Physical Product Entrepreneurship',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6920',
      Title: 'Machine Learning Applications in Business',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBA 6930',
      Title: 'Strategy and Tactics of Pricing',
      Instructor: 'Drew Pascarella (ddp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5020',
      Title: 'Managerial Reporting',
      Instructor: 'Daniel Szpiro (das247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5180',
      Title: 'Design Thinking',
      Instructor: 'Daniel Szpiro (das247)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5260',
      Title: 'Leaders in Emerging Markets, In Search of Global Opportunities',
      Instructor: 'Stefanie Kubanek (sek274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5295',
      Title: 'Future of Work',
      Instructor: 'Stefanie Kubanek (sek274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5550',
      Title: 'Entrepreneurship and Alternative Finance in Emerging Economies',
      Instructor: 'Lourdes Casanova (lc683)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5600',
      Title: 'FinTech Intensive Practicum',
      Instructor: 'Lourdes Casanova (lc683)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5640',
      Title: 'Sales and Business Development',
      Instructor: 'Anne-Claire Roesch (ar888)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5710',
      Title: 'Cryptocurrencies and Blockchains',
      Instructor: 'Jeffrey Schwartz (jls387)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5770',
      Title: 'Entrepreneurship in Creative Industries',
      Instructor: 'Peter Cornelius (pc694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 5800',
      Title: 'Digital Marketing Intensive Practicum',
      Instructor: 'Peter Cornelius (pc694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6030',
      Title: 'Big Data in Marketing',
      Instructor: 'Peter Balnaves (pmb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6320',
      Title: 'Core Leadership Skills for a VUCA World',
      Instructor: 'Peter Balnaves (pmb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6570',
      Title: 'Business Models',
      Instructor: 'Steven Gal (ssg22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6600',
      Title:
        'Great Books V2.0: Lessons for Living and Leading in a Digital World',
      Instructor: 'Steven Gal (ssg22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6630',
      Title: 'Managerial Decision Making',
      Instructor: 'Rafael Pass (rnp3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6750',
      Title: 'Leading Digital Transformation and Innovation',
      Instructor: 'Mukti Khaire (mvk34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6770',
      Title: 'Digital Wealth Management',
      Instructor: 'Mukti Khaire (mvk34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NBAY 6821',
      Title: 'Negotiation Essentials',
      Instructor: 'Sherif Nasser (szn2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 4530',
      Title: 'Marketing Management',
      Instructor: 'Ronghan Wang (rw572)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 5010',
      Title: 'Data Analytics and Modeling',
      Instructor: 'William Schmidt (ws366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 5080',
      Title: 'Managing Operations',
      Instructor: 'William Schmidt (ws366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 5500',
      Title: 'Financial Accounting',
      Instructor: 'William Schmidt (ws366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 5530',
      Title: 'Marketing Management',
      Instructor: 'William Schmidt (ws366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 5560',
      Title: 'Managerial Finance',
      Instructor: 'William Schmidt (ws366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NCC 5580',
      Title: 'Managing Operations',
      Instructor: 'William Schmidt (ws366)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NEPAL 1100',
      Title: 'Elements of Nepali Language and Culture',
      Instructor: 'Hom Acharya (hpa8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NEPAL 1102',
      Title: 'Elementary Nepali II',
      Instructor: 'Hom Acharya (hpa8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NEPAL 2202',
      Title: 'Intermediate Nepali Conversation II',
      Instructor: 'Hom Acharya (hpa8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NEPAL 2204',
      Title: 'Intermediate Nepali Composition II',
      Instructor: 'Hom Acharya (hpa8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NEPAL 3302',
      Title: 'Advanced Nepali II',
      Instructor: 'Hom Acharya (hpa8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 1312',
      Title: 'Introduction to Urdu Script',
      Instructor: 'Mariam Fatima (mf655)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 1777',
      Title: 'Elementary Yiddish II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 1960',
      Title:
        'FWS: Seeing the Past in the Future: The Ancient Near East in Modern Science Fiction',
      Instructor: 'Cale Staley (cas555)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2204',
      Title: 'Introduction to Quranic Arabic',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2461',
      Title: 'History of Minorities in Ottoman West Asia and North Africa',
      Instructor: 'Mostafa Minawi (mm2492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2546',
      Title: 'Magic and Witchcraft in the Greco-Roman World',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2565',
      Title: 'Global Heritage',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2644',
      Title: 'Introduction to Judaism',
      Instructor: 'Caitlin Barrett (ceb329)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2668',
      Title: 'Ancient Egyptian Civilization',
      Instructor: 'Adam Smith (ats73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2674',
      Title: 'History of the Modern Middle East',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2701',
      Title: 'The Aegean and East Mediterranean Bronze Age c. 3000-1000 BCE',
      Instructor: 'Christopher Monroe (cmm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2790',
      Title: 'Jewish Films and Filmmakers: Hollywood and Beyond',
      Instructor: 'Sibel Karakoc (sk2657)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2812',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: 'Sturt Manning (sm456)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 2985',
      Title: 'Egyptomania? Egypt and the Greco-Roman World',
      Instructor: 'Elliot Shapiro (ehs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 3519',
      Title:
        'History of State and Society in Modern Iran: Through Literature and Film',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 3542',
      Title: 'The Ottoman Empire 1800-1922',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 3717',
      Title: 'Modern Sephardi and Mizrahi Identities',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 3720',
      Title: 'Women in Biblical Israel',
      Instructor: 'Stephen Sansom (sas688)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 3750',
      Title: 'Humanities Scholars Research Methods',
      Instructor: 'Iago Gocheleishvili (ig44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 3888',
      Title: 'Jews, Christians, and Others in Late Antiquity',
      Instructor: 'Mostafa Minawi (mm2492)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4008',
      Title: 'Literature and Relationality',
      Instructor: 'Deborah Starr (das86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4334',
      Title: 'Media and Experience',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4560',
      Title: 'Theory and Method in Near Eastern Studies',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4721',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: 'Eman Ghanayem (eag249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4767',
      Title: 'Natural History of Religion',
      Instructor: 'Parisa Vaziri (pv248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4795',
      Title:
        'Looking for Love: Visual and Literary Cultures of Love in the Medieval Mediterranean, 1100 - 1400 AD',
      Instructor: 'Benjamin Anderson (bwa32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4922',
      Title: 'Archaeological Ethics',
      Instructor: 'Deborah Starr (das86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4992',
      Title: 'Independent Study, Undergraduate Level',
      Instructor: 'Christine Leuenberger (cal22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4998',
      Title: 'Senior Honors Essay',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 4999',
      Title: 'Senior Honors Essay',
      Instructor: 'Cynthia Robinson (cr94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6334',
      Title: 'Media and Experience',
      Instructor: 'Lori Khatchadourian (lk323)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Ross Brann (rb23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6519',
      Title:
        'History of State and Society of Modern Iran: Through Literature and Film',
      Instructor: 'Makda Weatherspoon (mgw49)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6560',
      Title: 'Theory and Method in Near Eastern Studies',
      Instructor: 'Ziad Fahmy (zaf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6642',
      Title: 'Topics in Ancient History',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6668',
      Title: 'Ancient Egyptian Civilization',
      Instructor: 'Christopher Monroe (cmm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6720',
      Title: 'Women in Biblical Israel',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6722',
      Title: 'Graduate Colloquium',
      Instructor: 'David Powers (dsp4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6767',
      Title: 'Natural History of Religion',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6777',
      Title: 'Modern Sephardi and Mizrahi Identities',
      Instructor: 'Shalom Shoer (ss66)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6888',
      Title: 'Jews, Christians, and Others in Late Antiquity',
      Instructor: 'Deborah Starr (das86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6922',
      Title: 'Archaeological Ethics',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 6992',
      Title: 'Independent Study: Graduate Level',
      Instructor: 'Iago Gocheleishvili (ig44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NES 7701',
      Title: 'The Aegean and East Mediterranean Bronze Age c. 3000-1000 BCE',
      Instructor: 'Abdel-Fattah Shahda (as3859)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NMI 5062',
      Title: 'CFA Review Level II',
      Instructor: 'Scott Stewart (sds58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NMI 5063',
      Title: 'CFA Review Level III',
      Instructor: 'Scott Stewart (sds58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5020',
      Title: 'PhD Seminar - Market Microstructure',
      Instructor: 'Gideon Saar (gs25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5030',
      Title: 'Applied Microeconomics II: Game Theory',
      Instructor: 'Michael Waldman (mw46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5040',
      Title: 'PhD Seminar in Accounting',
      Instructor: 'Eric Yeung (pey4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5060',
      Title: 'PhD Seminar - Corporate Finance Theory',
      Instructor: 'Adrian Aycan Corum (aac256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5150',
      Title:
        'PhD Seminar in Consumer Behavior: The Self in Consumption and Commerce',
      Instructor: 'Stijn van Osselaer (smv64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5170',
      Title: 'PhD Seminar in Micro Organizational Behavior',
      Instructor: 'Stijn van Osselaer (smv64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5220',
      Title: 'Doctoral Seminar in Quantitative Models',
      Instructor: 'Stijn van Osselaer (smv64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NRE 5480',
      Title: 'PhD Seminar in Entrepreneurship',
      Instructor: 'Simone Tang (st933)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 1220',
      Title: 'Nutrition and the Life Cycle',
      Instructor: 'Elizabeth Johnson (elj54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 2061',
      Title:
        'Site-Specific Preparation for Engaged Learning in Global and Public Health Sciences',
      Instructor: 'Laura Bellows (llb238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 2470',
      Title: 'Food for Contemporary Living',
      Instructor: 'Roger Figueroa Bautista (rf453)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 2600',
      Title: 'Introduction to Global Health',
      Instructor: 'David Silbey (ds90)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3030',
      Title: 'Nutrition, Health and Vegetarian Diets',
      Instructor: 'Kathleen Rasmussen (kmr5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3060',
      Title: 'Nutrition and Global Health',
      Instructor: 'John Hoddinott (jfh246)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3150',
      Title: 'Obesity and the Regulation of Body Weight',
      Instructor: 'David Sahn (des16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3310',
      Title: 'Human Nutrition and Nutrient Metabolism',
      Instructor: 'Jeanne Moseley (jmm298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3410',
      Title: 'Human Anatomy and Physiology',
      Instructor: 'Barbara Strupp (bjs13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3420',
      Title: 'Human Anatomy and Physiology Laboratory',
      Instructor: 'Tashara Leak (tml226)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 3600',
      Title: 'Epidemiology',
      Instructor: 'Julia Finkelstein (jlf288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4000',
      Title: 'Directed Readings',
      Instructor: 'Saurabh Mehta (sm939)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4010',
      Title: 'Empirical Research',
      Instructor: 'Patricia Cassano (pac6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4020',
      Title: 'Supervised Fieldwork',
      Instructor: 'Erin Green (emg232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4030',
      Title: 'Teaching Apprenticeship',
      Instructor: 'Erin Green (emg232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4200',
      Title: 'Diet and the Microbiome',
      Instructor: 'Erin Green (emg232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4250',
      Title: 'Nutrition Communications and Counseling',
      Instructor: 'Jeanne Moseley (jmm298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4300',
      Title:
        'Proteins, Transcripts, and Metabolism: Big Data in Molecular Nutrition',
      Instructor: 'Stephanie Bostic (smb482)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4500',
      Title: 'Public Health Nutrition',
      Instructor: 'Jenna Golan (jmg559)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4620',
      Title:
        'Preparation for Cross-Cultural Engagement and Collaborative Research',
      Instructor: 'Dan Berry (dcb37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4880',
      Title: 'Applied Dietetics in Food Service Systems',
      Instructor: 'Marie Caudill (mac379)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4990',
      Title: 'Honors Problem',
      Instructor: 'Marie Caudill (mac379)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4997',
      Title:
        'Experiential Learning in Global and Public Health in Washington, DC',
      Instructor: "Kimberly O'Brien (koo4)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 4998',
      Title: 'Inquiry in Politics and Policy',
      Instructor: 'John Michael (jjm484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 6000',
      Title: 'Special Problems for Graduate Students',
      Instructor: 'John Michael (jjm484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 6190',
      Title: 'Division of Nutritional Sciences Seminar',
      Instructor: 'John Michael (jjm484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 6320',
      Title: 'Regulation of Macronutrient Metabolism',
      Instructor: 'John Michael (jjm484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 6520',
      Title: 'The Foundations of Epidemiology',
      Instructor: 'Corinna Noel (can64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 6600',
      Title: 'Epidemiology',
      Instructor: "Kimberly O'Brien (koo4)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 6980',
      Title: 'International Nutrition Seminar',
      Instructor: 'Kelly Quinn (kmq7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 7030',
      Title: 'Seminar in Nutritional Sciences',
      Instructor: 'Laura Bellows (llb238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 8990',
      Title: "Master's Thesis and Research",
      Instructor: 'Elad Tako (et79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NS 9990',
      Title: 'Doctoral Thesis and Research',
      Instructor: 'Tolunay Beker Aydemir (tb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NSE 4840',
      Title: 'Introduction to Controlled Fusion: Principles and Technology',
      Instructor: 'David Hammer (dah5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 1201',
      Title: 'Global Water Sustainability',
      Instructor: 'Peter McIntyre (pbm3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 2010',
      Title: 'Environmental Conservation',
      Instructor: 'Peter McIntyre (pbm3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 2201',
      Title: 'Society and Natural Resources',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 2320',
      Title: 'Nature and Culture',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 2600',
      Title: 'Field Research in the Ecological Arts',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 2830',
      Title: 'DNA, Genes and Genetic Diversity',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 3110',
      Title: 'Fish Ecology, Conservation, and Management',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 3111',
      Title: 'Fish Ecology Laboratory',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 3240',
      Title: 'Sustainable, Ecologically Based Management of Water Resources',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 3250',
      Title: 'Forest Management and Maple Syrup Production',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 3260',
      Title: 'Applied Conservation Ecology',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 3320',
      Title: 'Introduction to Ethics and Environment',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4120',
      Title: 'Wildlife Population Analysis: Techniques and Models',
      Instructor: 'Joseph Yavitt (jby1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4150',
      Title: 'Conservation with Communities for One Health',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4280',
      Title: 'Principles and Practices of Applied Wildlife Science',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4302',
      Title: 'Environmental Policy Processes III',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4440',
      Title: 'Resource Management and Environment Law',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4520',
      Title: 'Land Use and Sustainable Livelihoods in the Nilgiris',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4601',
      Title: 'Decision Making in Natural Resource Management',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4750',
      Title: 'Environmental Justice and Policy',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4940',
      Title: 'Special Topics in Natural Resources',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4960',
      Title: 'Internship in Natural Resources',
      Instructor: 'Richard Stedman (rcs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4970',
      Title:
        'Individual Study in Environmental Social Science and Resource Policy',
      Instructor: 'James Tantillo (jat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4971',
      Title: 'Individual Study in Applied Ecology and Conservation Ecology',
      Instructor: 'Anna Davidson (amd355)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4972',
      Title: 'Individual Study in Ecosystem Science and Biochemistry',
      Instructor: 'Anna Davidson (amd355)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4980',
      Title: 'Undergraduate Teaching in Natural Resources',
      Instructor: 'Matthew Hare (mph75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 4990',
      Title: 'Undergraduate Research',
      Instructor: 'Matthew Hare (mph75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 5110',
      Title: 'Fish Ecology, Conservation, and Management',
      Instructor: 'Matthew Hare (mph75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 5750',
      Title: 'Environmental Justice and Policy',
      Instructor: 'Lars Rudstam (lgr1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6000',
      Title: 'Introduction to Graduate Study in Natural Resources',
      Instructor: 'Lars Rudstam (lgr1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6040',
      Title: 'Seminar on Selected Topics in Resource Policy and Management',
      Instructor: 'Rebecca Schneider (rls11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6100',
      Title: 'Collaborative and Reproducible Data Science in R',
      Instructor: 'Peter Smallidge (pjs23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6120',
      Title: 'Wildlife Population Analysis: Techniques and Models',
      Instructor: 'Peter Smallidge (pjs23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6200',
      Title: 'Spatial Modeling and Analysis',
      Instructor: 'Kristi Sullivan (kls20)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6240',
      Title:
        'Sustainable Water Resource Management in the Face of Climate Change',
      Instructor: 'James Tantillo (jat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6250',
      Title: 'Forest Management and Maple Syrup Production',
      Instructor: 'James Tantillo (jat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6260',
      Title: 'Applied Conservation Ecology',
      Instructor: 'James Tantillo (jat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6280',
      Title: 'Principles and Practices of Applied Wildlife Science',
      Instructor: 'James Tantillo (jat4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6300',
      Title: 'Current Topics in Molecular Ecology and Population Genomics',
      Instructor: 'Evan Cooch (egc7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6601',
      Title: 'Decision Making in Natural Resource Management',
      Instructor: 'Evan Cooch (egc7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6960',
      Title: 'Perspectives in Global Development',
      Instructor: 'Amanda Rodewald (adr79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 6970',
      Title: 'Graduate Individual Study in Natural Resources',
      Instructor: 'Amanda Rodewald (adr79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 7900',
      Title: 'Graduate-Level Thesis Research',
      Instructor: 'Paul Curtis (pdc1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 8900',
      Title: "Master's Thesis Research",
      Instructor: 'Bruce Lauber (tbl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'NTRES 9900',
      Title: 'Doctoral-Level Thesis Research',
      Instructor: 'Richard Booth (rsb6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 1380',
      Title: 'Data Science for All',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 3120',
      Title:
        'Practical Tools for Operations Research, Machine Learning and Data Science',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 3310',
      Title: 'Optimization II',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 3510',
      Title: 'Introduction to Engineering Stochastic Processes I',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4120',
      Title:
        'Inventory, Operations, and Supply Chain Management: Models and Optimization',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4126',
      Title: 'Principles of Supply Chain Management',
      Instructor: 'Peter Frazier (pf98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4152',
      Title: 'Entrepreneurship for Engineers',
      Instructor: 'Peter Frazier (pf98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4340',
      Title: 'Applications of Optimization: Modeling and Computation',
      Instructor: 'Peter Frazier (pf98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4350',
      Title: 'Introduction to Game Theory',
      Instructor: 'Peter Frazier (pf98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4600',
      Title: 'Introduction to Financial Engineering',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4740',
      Title: 'Statistical Data Mining I',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4820',
      Title: 'Spreadsheet-Based Modeling and Data Analysis',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4990',
      Title: 'Teaching in ORIE',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 4999',
      Title: 'ORIE Project',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5126',
      Title: 'Principles of Supply Chain Management',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5129',
      Title: 'Data Science for e-Retail and the Sharing Economy',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5135',
      Title: 'Computational Integer Programming',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5142',
      Title: 'Systems Analysis Behavior and Optimization',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5191',
      Title: 'Selected Topics in Applied ORIE',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5270',
      Title: 'Big Data Technologies',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5310',
      Title: 'Optimization II',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5340',
      Title: 'Applications of Optimization: Modeling and Computation',
      Instructor: 'David Goldberg (dag369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5350',
      Title: 'Introduction to Game Theory',
      Instructor: 'Eric Gentsch (elg46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5370',
      Title: 'Optimization Modeling in Finance',
      Instructor: 'Eric Gentsch (elg46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5510',
      Title: 'Introduction to Engineering Stochastic Processes I',
      Instructor: 'Eric Gentsch (elg46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5550',
      Title: 'Applied Time Series Analysis',
      Instructor: 'John Richard Callister (jc62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5582',
      Title: 'Monte Carlo Methods in Financial Engineering',
      Instructor: 'Brenda Dietrich (bld34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5610',
      Title: 'Financial Engineering with Stochastic Calculus II',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5640',
      Title: 'Statistics for Financial Engineering',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5735',
      Title: 'Graph-Based Data Science for Networked Systems',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5740',
      Title: 'Statistical Data Mining I',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5751',
      Title: 'Learning, Inference, and Decision Making from Data',
      Instructor: 'John Richard Callister (jc62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5820',
      Title: 'Spreadsheet-Based Modeling and Data Analysis',
      Instructor: 'Damek Davis (dsd95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5910',
      Title: 'Manufacturing Option Project',
      Instructor: 'Damek Davis (dsd95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5911',
      Title: 'Manufacturing Option Project',
      Instructor: 'Damek Davis (dsd95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5940',
      Title: 'Systems Engineering Project',
      Instructor: 'Damek Davis (dsd95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5981',
      Title: 'Applied ORIE and IT Project',
      Instructor: 'Damek Davis (dsd95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 5999',
      Title: 'Special Projects in ORIE',
      Instructor: 'Kathryn Caggiano (kec4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6125',
      Title: 'Computational Methods in Operations Research',
      Instructor: 'Kathryn Caggiano (kec4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6170',
      Title: 'Engineering Societal Systems',
      Instructor: 'Brenda Dietrich (bld34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6328',
      Title: 'Convex Analysis',
      Instructor: 'Damek Davis (dsd95)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6334',
      Title: 'Combinatorial Optimization',
      Instructor: 'Peter Frazier (pf98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6360',
      Title: 'Optimization Under Uncertainty: Robust and Online Models',
      Instructor: 'David Williamson (dw36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6510',
      Title: 'Probability',
      Instructor: 'Gennady Samorodnitsky (gs18)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6580',
      Title: 'Simulation',
      Instructor: 'John Richard Callister (jc62)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 6780',
      Title: 'Bayesian Statistics and Data Analysis',
      Instructor: 'Jamol Pender (jjp274)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 7391',
      Title: 'Selected Topics in Mathematical Programming',
      Instructor: 'Madeleine Udell (mru8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 7590',
      Title: 'Selected Topics in Applied Probability',
      Instructor: 'Frans Schalekamp (fms9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 7900',
      Title: 'Special Investigations',
      Instructor: 'Jim Dai (jd694)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 7999',
      Title: 'PhD Independent Research',
      Instructor: 'Kathryn Caggiano (kec4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 9000',
      Title: 'ORIE Graduate Colloquium',
      Instructor: 'Christina Yu (cel85)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 9100',
      Title: 'Enterprise Engineering Colloquium',
      Instructor: 'Eric Gentsch (elg46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ORIE 9110',
      Title: 'M.Eng. Professional Review',
      Instructor: 'Oktay Gunluk (ong5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 4717',
      Title: 'Energy Transition: Policy, Financial, and Business Interactions',
      Instructor: 'Drew Riedl (adr97)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 4858',
      Title: 'Business and Inequality',
      Instructor: 'Drew Riedl (adr97)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5000',
      Title: 'Special Studies',
      Instructor: 'Laurie Miller (ljm44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5012',
      Title: 'Professional Development for Public Affairs',
      Instructor: 'John Mathiason (jrm534)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5051',
      Title: 'English in Global Contexts',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5053',
      Title: 'Academic Writing',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5110',
      Title: 'Public Administration',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5114',
      Title: 'Systems Leadership',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5118',
      Title:
        'Diversity in Leadership: Experience, Perspective and Relatability in Public Affairs',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5133',
      Title: 'Law and Public Agency Decisions',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5172',
      Title: 'Environmental Justice and Policy',
      Instructor: "Thomas O'Toole (tjo22)"
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5173',
      Title: 'Market Regulation',
      Instructor: 'Eric Foley (ejf36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5220',
      Title: 'Public Finance: Economics of the Public Sector',
      Instructor: 'Eric Foley (ejf36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5310',
      Title: 'Applied Multivariate Statistics in Public Affairs',
      Instructor: 'Dan Lamb (dll5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5345',
      Title: 'Evaluation of International Programs and Projects',
      Instructor: 'Laura Cabrera (lac19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5383',
      Title: 'Translational Research for Executives',
      Instructor: 'Paula Younger (pey5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5411',
      Title: 'Technological Change at Work',
      Instructor: 'Daniel Manne (dpm255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5418',
      Title: 'Strategic Stakeholder Engagement',
      Instructor: 'Rebecca Brenner (rjm478)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5431',
      Title: 'Fundraising, Grantmaking, and Lobbying',
      Instructor: 'Rick Geddes (rrg24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5441',
      Title: 'Effective Writing for Public Policy',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5443',
      Title: 'Systems Thinking for Executives I',
      Instructor: 'Douglas Miller (dlm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5444',
      Title: 'Systems Thinking for Executives II',
      Instructor: 'Douglas Miller (dlm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5472',
      Title:
        'Leveraging Information Technology for Public and Nonprofit Management',
      Instructor: 'Douglas Miller (dlm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5570',
      Title: 'Corporate Responsibility',
      Instructor: 'Douglas Miller (dlm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5573',
      Title: 'Corporate Responsibility and Public Affairs',
      Instructor: 'Douglas Miller (dlm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5612',
      Title: 'Intergovernmental Relations',
      Instructor: 'John Mathiason (jrm534)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5634',
      Title: 'Corruption, Governance, and Development',
      Instructor: 'Elizabeth Day (ead255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5717',
      Title: 'Energy Transition: Policy, Financial, and Business Interactions',
      Instructor: 'Adam Seth Litwin (al2284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5755',
      Title: 'Infrastructure Financing',
      Instructor: 'Rebecca Darling (rmd228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5757',
      Title: 'Infrastructure Project Management and Finance Practicum',
      Instructor: 'Rebecca Darling (rmd228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5855',
      Title: 'International Human Rights',
      Instructor: 'Rebecca Darling (rmd228)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5858',
      Title: 'Business and Inequality',
      Instructor: 'Joe Grasso (jeg68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5900',
      Title: 'Consulting for Nonprofit and Government Organizations',
      Instructor: 'Dan Lamb (dll5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5910',
      Title:
        'Special Topics: Cornell Institute for Public Affairs Domestic Capstone',
      Instructor: 'Laura Cabrera (lac19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5920',
      Title: 'Public Affairs Externships',
      Instructor: 'Laura Cabrera (lac19)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5950',
      Title:
        'Special Topics: Cornell Institute for Public Affairs International Capstone',
      Instructor: 'Ning Su (ns864)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5951',
      Title: 'Systems Thinking, Mapping, and Leadership Practicum II',
      Instructor: 'Andrew Siwo (ats45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5953',
      Title: 'Executive Master of Public Administration (EMPA) Capstone',
      Instructor: 'Andrew Siwo (ats45)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PADM 5979',
      Title: 'Environmental Finance and Impact Investing Practicum',
      Instructor: 'Dan Lamb (dll5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 1050',
      Title: 'PAM Career Explorations',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 2000',
      Title: 'Intermediate Microeconomics',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 2030',
      Title: 'Population and Public Policy',
      Instructor: 'Brandon Tripp (bkt24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 2208',
      Title: 'Social Inequality',
      Instructor: 'Brandon Tripp (bkt24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3020',
      Title: 'Native Politics and the Nation-to-Nation Relationship',
      Instructor: 'Brandon Tripp (bkt24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3090',
      Title:
        'Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3100',
      Title: 'Multiple Regression Analysis',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3130',
      Title: 'Behavioral Economics and Public Policy',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3160',
      Title: 'Labor Markets and Public Policy',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3180',
      Title: 'Health Disparities',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3301',
      Title: 'Intermediate Policy Analysis',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3340',
      Title: 'Corporations, Shareholders, and Policy',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3764',
      Title: 'Intellectual Property Law and Policy',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3780',
      Title:
        'Sick Around the World? Comparing Health Care Systems Around the World',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3870',
      Title: 'Economic Evaluations in Health Care',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 3910',
      Title: 'Federal Policy Making in Action',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 4010',
      Title: 'Empirical Research',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 4160',
      Title: 'The Ethnography of Poverty and Inequality',
      Instructor: 'Nicholas Courtney (nc426)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 4280',
      Title: 'The Economics of Risky Health Behaviors',
      Instructor: 'Ronald Christie (ric38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 4950',
      Title: 'Engaged Learning Capstone',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 4990',
      Title: 'Honors Program',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5020',
      Title: 'Native Politics and the Nation-to-Nation Relationship',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5090',
      Title:
        'Strategic Advocacy: Lobbying and Interest Group Politics in Washington, D.C.',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5130',
      Title: 'Behavioral Economics and Public Policy',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5280',
      Title: 'Population Health for Health Managers',
      Instructor: 'Brandon Tripp (bkt24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5290',
      Title: 'The Economics and Regulation of Risky Health Behaviors',
      Instructor: 'Zhuan Pei (zp53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5301',
      Title: 'Intermediate Policy Analysis',
      Instructor: 'Adriana Reyes (amr454)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5334',
      Title: 'Corporations, Shareholders, and Policy',
      Instructor: 'Sharon Tennyson (st96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5540',
      Title: 'Health Law for Managers',
      Instructor: 'Rick Geddes (rrg24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5580',
      Title: 'The Healthcare Industry from a Consulting Perspective',
      Instructor: 'Daniel Manne (dpm255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5583',
      Title: 'Managing Operations',
      Instructor: 'Nicolas Ziebarth (nrz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5633',
      Title: 'Health Care Finance for Managers',
      Instructor: 'Donald Kenkel (dsk10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5673',
      Title: 'Health Policy for Managers',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5679',
      Title: 'Desktop and Modeling Solutions',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5713',
      Title: 'Leadership, Innovation and Change Management',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5740',
      Title:
        'Short Course in Fundamentals of Health Facility Planning for Managers',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5813',
      Title: 'Disruptive Innovation in Health Care I',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5870',
      Title: 'Economic Evaluations in Health Care',
      Instructor: 'Suzanne Simonetta (sjs12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5900',
      Title: 'Special Topics in Health Administration and Finance',
      Instructor: 'Rosemary Avery (rja7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5903',
      Title: 'Quality Improvement for Managers',
      Instructor: 'Maureen Waller (mrw37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5952',
      Title: 'Field Study in Health Administration and Planning',
      Instructor: 'John Cawley (jhc38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5953',
      Title: 'Field Studies for Health Managers',
      Instructor: 'Maureen Waller (mrw37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 5990',
      Title: 'Challenges and Trends in the Health Services Industry',
      Instructor: 'Nicolas Bottan (nlb75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6000',
      Title: 'Special Problems for Graduate Students',
      Instructor: 'Max Kapustin (mk2624)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6020',
      Title: 'Intermediate Statistics for Sociological Research',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6091',
      Title: 'Empirical Strategies for Policy Research II',
      Instructor: 'Laura Tach (lmt88)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6280',
      Title: 'Family Demography',
      Instructor: 'Douglas Miller (dlm336)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6420',
      Title: 'Health Economics II',
      Instructor: 'Rosemary Avery (rja7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6440',
      Title: 'Health Economics Workshop',
      Instructor: 'Nicholas Courtney (nc426)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6810',
      Title: 'Demography Training Seminar',
      Instructor: 'Ronald Christie (ric38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 6950',
      Title: 'Spatial Demography',
      Instructor: 'Brandon Tripp (bkt24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 8990',
      Title: "Master's Thesis and Research",
      Instructor: 'Julie Carmalt (jhc48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PAM 9990',
      Title: 'Doctoral Thesis and Research',
      Instructor: 'John Cawley (jhc38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1100',
      Title: 'Beginning Swimming',
      Instructor: 'Susan Ball (seb27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1101',
      Title: 'Advanced Beginning Swimming',
      Instructor: 'Susan Ball (seb27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1103',
      Title: 'Advanced Swimming',
      Instructor: 'Alisha Kewalramani (ark243)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1104',
      Title: 'Swimming Conditioning',
      Instructor: 'Alisha Kewalramani (ark243)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1130',
      Title: 'Open Water Scuba',
      Instructor: 'Ramineh Abedini (ra654)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1132',
      Title: 'Rescue Diver',
      Instructor: 'Ramineh Abedini (ra654)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1134',
      Title: 'Bahamas Dive Trip',
      Instructor: 'Susan Ball (seb27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1150',
      Title: 'Ballroom Dancing',
      Instructor: 'Ramineh Abedini (ra654)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1153',
      Title: 'Beginning Ballroom Dance Rhythm',
      Instructor: 'Jacob Lichter (jl3894)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1155',
      Title: 'Introduction to Belly Dancing',
      Instructor: 'Ramineh Abedini (ra654)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1157',
      Title: 'West African Dance',
      Instructor: 'Susan Ball (seb27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1160',
      Title: 'Latin Dance',
      Instructor: 'Jacob Lichter (jl3894)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1162',
      Title: 'Salsa',
      Instructor: 'Patrick Shaffer (ps973)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1167',
      Title: 'Introduction to Tango',
      Instructor: 'Patrick Shaffer (ps973)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1170',
      Title: 'Introduction to Swing Dance',
      Instructor: 'Patrick Shaffer (ps973)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1171',
      Title: 'Intermediate Swing Dance',
      Instructor: 'Jen Gudaz (jag245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1183',
      Title: 'Dance Technique II/Modern',
      Instructor: 'Jen Gudaz (jag245)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1184',
      Title: 'Dance Technique III - Classical',
      Instructor: 'Patrick Shaffer (ps973)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1185',
      Title: 'Dance Technique III - Modern',
      Instructor: 'Brigitta Putnam (bar28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1188',
      Title: 'Dance Technique Workshop',
      Instructor: 'Timothy Sayers (tjs338)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1233',
      Title: 'Bootcamp',
      Instructor: 'Iska Ziver (irz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1235',
      Title: "8 O'Clock Rock",
      Instructor: 'Iska Ziver (irz2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1236',
      Title: 'Cardio Fuego',
      Instructor: 'June Seaney (js126)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1237',
      Title: 'Yasaride',
      Instructor: 'June Seaney (js126)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1238',
      Title: 'Barre',
      Instructor: 'Olumayowa Willoughby (oaw5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1241',
      Title: 'Mobility and Core Training',
      Instructor: 'Michael Ristorucci (mlr24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1242',
      Title: 'Fit Trifecta',
      Instructor: 'Michael Ristorucci (mlr24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1245',
      Title: 'Indoor Stationary Cycling',
      Instructor: 'Michael Ristorucci (mlr24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1246',
      Title: 'Open Gym Class',
      Instructor: 'Juan Brache (jbb284)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1250',
      Title: 'Army ROTC Physical Training',
      Instructor: 'Lesley Greene (llg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1260',
      Title: 'Cardio Kickboxing',
      Instructor: 'Lesley Greene (llg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1261',
      Title: 'Fitness and Conditioning',
      Instructor: 'Lesley Greene (llg3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1262',
      Title: 'Fitness for Women',
      Instructor: 'Miles Yeung-Tieu (mey26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1265',
      Title: 'Wellness and Fitness',
      Instructor: 'P. Suber (pbs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1270',
      Title: 'Introduction to Jogging',
      Instructor: 'Miles Yeung-Tieu (mey26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1271',
      Title: 'Jogging Tours',
      Instructor: 'Juan Aldape Munoz (jma377)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1272',
      Title: 'Walking Tours',
      Instructor: 'Jason Berg (jwb394)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1273',
      Title: 'Walking Meditation',
      Instructor: 'Symphony Howe (sah397)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1290',
      Title: 'Introduction to Gymnastics',
      Instructor: 'Matt Hayes (mh249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1300',
      Title: 'Introduction to Bowling',
      Instructor: 'Priscilla Hummel (plh64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1320',
      Title: 'Professional Instructional Golf',
      Instructor: 'Linda Aigen (lja53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1321',
      Title: 'Recreational Golf',
      Instructor: 'Melissa Weiner (mbw82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1331',
      Title: 'Intermediate-Advanced Downhill Skiing-Snowboarding',
      Instructor: 'Melissa Burress (mb376)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1340',
      Title: 'Juggling',
      Instructor: 'Kimberley Alger-Norton (ka362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1345',
      Title: 'Introduction to Boxing',
      Instructor: 'Kimberley Alger-Norton (ka362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1346',
      Title: 'Intermediate Boxing',
      Instructor: 'Priscilla Hummel (plh64)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1347',
      Title: 'Brazilian Jiu Jitsu Fundamentals',
      Instructor: 'Laurie Cuomo (lrc82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1350',
      Title: 'HIIT Boxing',
      Instructor: 'Erika Echaniz (ede32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1360',
      Title: 'Jeet Kune Do and MMA',
      Instructor: 'Symphony Howe (sah397)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1365',
      Title: 'Karate Basics',
      Instructor: 'Andrew MacVey (apm249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1366',
      Title: 'Karate',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1371',
      Title: 'Okinawan Karate-do',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1375',
      Title: 'Beginning Tae Kwon Do',
      Instructor: 'Dustin Paul (drp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1376',
      Title: 'Intermediate Tae Kwon Do',
      Instructor: 'Bert Adams-Kucik (mja12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1380',
      Title: 'Tai Chi Chuan',
      Instructor: 'Kimberley Alger-Norton (ka362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1385',
      Title: 'Thai Boxing',
      Instructor: 'Kimberley Alger-Norton (ka362)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1395',
      Title: 'Self Defense and Personal Safety in the Modern World',
      Instructor: 'Dustin Paul (drp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1396',
      Title: 'Filipino Kali',
      Instructor: 'Michael Stewart (mts96)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1405',
      Title: 'Living Routines',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1420',
      Title: 'Introduction to Meditation',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1421',
      Title: 'Relaxation and Stress Management',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1422',
      Title: 'Meditation and Relaxation',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1427',
      Title: 'Ashtanga Yoga Foundations',
      Instructor: 'Jamie Jett (jj563)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1429',
      Title: 'Vinyasa Yoga',
      Instructor: 'Jamie Jett (jj563)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1430',
      Title: 'Introduction to Yoga',
      Instructor: 'Jamie Jett (jj563)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1431',
      Title: 'Intermediate Yoga',
      Instructor: 'Jamie Jett (jj563)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1440',
      Title: 'Introduction to Badminton',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1441',
      Title: 'Intermediate Badminton',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1445',
      Title: 'Outdoor Beginning Tennis',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1446',
      Title: 'Outdoor Intermediate Tennis',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1447',
      Title: 'Outdoor Advanced Tennis',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1465',
      Title: 'Introduction to Squash',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1466',
      Title: 'Intermediate Squash',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1482',
      Title: 'Introduction to Large Boat Sailing',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1505',
      Title: 'Introduction to Trap and Skeet',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1510',
      Title: 'Riflery',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1515',
      Title: 'Introduction to Handgun Safety',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1520',
      Title: 'Introduction to Archery',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1527',
      Title: 'Olympic Fencing',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1540',
      Title: 'Introduction to Skating',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1545',
      Title: 'Beginning Figure Skating',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1546',
      Title: 'Intermediate Figure Skating',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1547',
      Title: 'Advanced Figure Skating',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1550',
      Title: 'Introduction to Ice Hockey',
      Instructor: 'Jon LaRock (jwl286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1551',
      Title: 'Intermediate Ice Hockey',
      Instructor: 'Ethan Smith (ejs43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1555',
      Title: 'Basketball Officiating',
      Instructor: 'Ethan Smith (ejs43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1560',
      Title: 'Basketball',
      Instructor: 'Ethan Smith (ejs43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1565',
      Title: 'Soccer',
      Instructor: 'Ethan Smith (ejs43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1570',
      Title: 'Beginning-Intermediate Volleyball',
      Instructor: 'Ethan Smith (ejs43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1571',
      Title: 'Advanced Volleyball',
      Instructor: 'Gregory Brown (ggb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1580',
      Title: 'Principles of Weight Training',
      Instructor: 'Gregory Brown (ggb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1581',
      Title: 'Weight Training for Women',
      Instructor: 'Gregory Brown (ggb26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1582',
      Title: 'Advanced Weight Training',
      Instructor: 'Jonathan Billing (jmb269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1600',
      Title: 'Introduction to Aerials',
      Instructor: 'Jonathan Billing (jmb269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1601',
      Title: 'Backcountry Cooking',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1603',
      Title: 'Snowshoeing and Winter Travel',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1605',
      Title: 'Day Hiking',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1606',
      Title: 'Outdoor Birding Basics',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1607',
      Title: 'Backcountry Photography',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1608',
      Title: 'Trail Running',
      Instructor: 'Shad Ryan (str52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1609',
      Title: 'Geocaching',
      Instructor: 'Shad Ryan (str52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1610',
      Title: 'Backpacking in the Finger Lakes',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1613',
      Title: 'Wilderness Survival Skills',
      Instructor: 'Jose Delgado (jad25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1615',
      Title: 'Introduction to Circus Arts',
      Instructor: 'Jose Delgado (jad25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1616',
      Title: 'Introduction to Camping',
      Instructor: 'John Doris (jmd378)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1625',
      Title: 'Wilderness First Aid',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1628',
      Title: 'Unicycling',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1630',
      Title: 'Caving',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1640',
      Title: 'Basic Rock Climbing',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1641',
      Title: 'Basic Rock Climbing: Closing the Adventure Gap',
      Instructor: 'Han Cho (hdc9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1642',
      Title: "Women's Basic Rock Climbing",
      Instructor: 'John Burger (jeb233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1645',
      Title: 'Southwest Climbing Expedition',
      Instructor: 'John Burger (jeb233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1646',
      Title: 'Intermediate Rock Climbing',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1647',
      Title: 'Sport Lead Climbing',
      Instructor: 'Andrew MacVey (apm249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1651',
      Title: 'Introduction to Outdoor Rock Climbing',
      Instructor: 'Kevin Seaman (ks273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1653',
      Title: 'Shawangunks Rock Climbing',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1654',
      Title: 'Ice Climbing',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1655',
      Title: 'Introduction to Traditional Lead Climbing',
      Instructor: 'Priscilla Timberlake (pt29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1657',
      Title: 'Tree Climbing',
      Instructor: 'Nicholas Boyar (nbb34)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1659',
      Title: 'Redwoods Tree Climbing',
      Instructor: 'Lewis Freedman (lmf10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1663',
      Title: 'Ropes Course Programming',
      Instructor: 'Kathy Morris (km72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1664',
      Title: 'Mountain Biking',
      Instructor: 'Jennifer Cunningham-Ryan (jrc92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1666',
      Title: 'Bike Touring',
      Instructor: 'Jessica Caporizzo (jac629)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1668',
      Title: 'Recreational Biking',
      Instructor: 'Gina Newlin (gkn2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1671',
      Title: 'Recreational Canoeing',
      Instructor: 'Jessica Caporizzo (jac629)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1675',
      Title: 'Stand Up Paddleboarding',
      Instructor: 'Jennifer Cunningham-Ryan (jrc92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1690',
      Title: 'Cross Country Skiing',
      Instructor: 'Jennifer Cunningham-Ryan (jrc92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1702',
      Title: 'Outdoor Yoga',
      Instructor: 'Lewis Freedman (lmf10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1726',
      Title: 'Wilderness First Responder',
      Instructor: 'Lewis Freedman (lmf10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1851',
      Title: 'Leadership Laboratory I',
      Instructor: 'Lewis Freedman (lmf10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1852',
      Title: 'Leadership Laboratory II',
      Instructor: 'Lewis Freedman (lmf10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1853',
      Title: 'Leadership Laboratory III',
      Instructor: 'Linda Aigen (lja53)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1854',
      Title: 'Leadership Laboratory IV',
      Instructor: 'Lewis Freedman (lmf10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1861',
      Title: 'Initial Military Experiences II',
      Instructor: 'Felisha Li (fal46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1863',
      Title: 'Intermediate Military Experiences II',
      Instructor: 'Felisha Li (fal46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1865',
      Title: 'Junior Officer Leadership Experiences II',
      Instructor: 'Felisha Li (fal46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1867',
      Title: 'Precommissioning Laboratory',
      Instructor: 'Felisha Li (fal46)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1871',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Arthur Falkson (abf11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1873',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Arthur Falkson (abf11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1875',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Arthur Falkson (abf11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1877',
      Title: 'Naval Professional Laboratory',
      Instructor: 'Arthur Falkson (abf11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PE 1999',
      Title: 'Physical Education Independent Study',
      Instructor: 'Arthur Falkson (abf11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PERSN 1321',
      Title: 'Elementary Persian-Farsi II',
      Instructor: 'Iago Gocheleishvili (ig44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PERSN 2322',
      Title: 'Intermediate Persian-Farsi II',
      Instructor: 'Iago Gocheleishvili (ig44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PERSN 5510',
      Title: 'Graduate Studies in Persian',
      Instructor: 'Iago Gocheleishvili (ig44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1100',
      Title: 'Introduction to Philosophy',
      Instructor: 'Dean Da Vee (dad356)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1110',
      Title: 'FWS: Philosophy in Practice',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1111',
      Title: 'FWS: Philosophical Problems',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1112',
      Title: 'FWS: Philosophical Conversations',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1620',
      Title: 'Introduction to Cognitive Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1621',
      Title: 'WIM: Introduction to Cognitive Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1650',
      Title: 'Philosophy of Race',
      Instructor: 'Amy Ramirez (alr298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1918',
      Title: 'Conversations in Moral Psychology',
      Instructor: 'Alex Esposito (ave9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 1920',
      Title: 'Introduction to Political Theory',
      Instructor: 'Daniel Manne (dpm255)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2220',
      Title: 'Modern Philosophy',
      Instructor: 'Matthew Paskell (mrp233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2310',
      Title: 'Introduction to Deductive Logic',
      Instructor: 'Adriene Takaoka (bat58)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2410',
      Title: 'Ethics',
      Instructor: 'Eve Dietl (eag264)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2420',
      Title: 'Social and Political Philosophy',
      Instructor: 'Theodore Korzukhin (tk283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2540',
      Title: 'Introduction to Indian Philosophy',
      Instructor: 'Dean Da Vee (dad356)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2830',
      Title: 'Introduction to Decision Theory',
      Instructor: 'Erin Gerber (ehg44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2960',
      Title: 'Ethics and the Environment',
      Instructor: 'Brianna Zgurich (bmz9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 2990',
      Title: 'Foundations of Law and Society',
      Instructor: 'Timothy Kwiatek (tmk86)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 3203',
      Title: 'Aristotle',
      Instructor: 'Quitterie Gounot (qmg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 3210',
      Title: 'Medieval Philosophy',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 3231',
      Title: "Kant's Ethics",
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 3710',
      Title: 'Philosophy of Language',
      Instructor: 'Benjamin Yost (bsy9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 3900',
      Title: 'Independent Study',
      Instructor: 'Laura Niemi (ln279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 3915',
      Title: 'Moral Psychology in Action',
      Instructor: 'Patchen Markell (ppm48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4002',
      Title: 'Latin Philosophical Texts',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4110',
      Title: 'Greek Philosophical Texts',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4220',
      Title: 'Topics in Modern Philosophy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4311',
      Title: 'Topics in Logic and the Foundations of Mathematics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4490',
      Title: 'Feminism and Philosophy',
      Instructor: 'Justin Steinberg (jds467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4610',
      Title: 'Topics in Epistemology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4720',
      Title: 'Pragmatics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4900',
      Title: 'Informal Study for Honors I',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 4901',
      Title: 'Informal Study for Honors II',
      Instructor: 'Harold Hodes (hth3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6010',
      Title: 'Greek Philosophical Texts',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6020',
      Title: 'Latin Philosophical Texts',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6030',
      Title: 'German Philosophical Texts',
      Instructor: 'Kate Manne (kam468)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6203',
      Title: 'Aristotle',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6210',
      Title: 'Topics in Medieval Philosophy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6220',
      Title: 'Topics in Modern Philosophy',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6290',
      Title: 'Proseminar in the History of Philosophy',
      Instructor: 'David Shoemaker (dws267)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6311',
      Title: 'Topics in Logic and the Foundations of Mathematics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6410',
      Title: 'Seminar in Ethics and Value Theory',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6450',
      Title: 'Humor and Morality',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6490',
      Title: 'Feminism and Philosophy',
      Instructor: 'Theodore Korzukhin (tk283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6610',
      Title: 'Topics in Epistemology',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6713',
      Title: 'Philosophy of Language',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6720',
      Title: 'Pragmatics',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 6731',
      Title: 'Semantics II',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHIL 7000',
      Title: 'Informal Study',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1012',
      Title: 'Physics 1112 Supplement',
      Instructor: 'Jim Baker (jeb94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1013',
      Title: 'Physics 2213 Supplement',
      Instructor: 'Jim Baker (jeb94)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1102',
      Title: 'General Physics II',
      Instructor: 'Nicholas Taylor (nwt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1110',
      Title: 'Introduction to Experimental Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1112',
      Title: 'Physics I: Mechanics and Heat',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1116',
      Title: 'Physics I: Mechanics and Special Relativity',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1190',
      Title: 'Introductory Laboratory (Transfer Supplement)',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 1204',
      Title: 'Physics of Musical Sound',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2208',
      Title: 'Fundamentals of Physics II',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2210',
      Title: 'Exploring Experimental Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2213',
      Title: 'Physics II: Electromagnetism',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2214',
      Title: 'Physics III: Oscillations, Waves, and Quantum Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2216',
      Title: 'Introduction to Special Relativity',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2217',
      Title: 'Physics II: Electricity and Magnetism',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 2218',
      Title: 'Physics III: Waves and Thermal Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 3310',
      Title: 'Intermediate Experimental Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 3316',
      Title: 'Basics of Quantum Mechanics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 3318',
      Title: 'Analytical Mechanics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 3360',
      Title: 'Electronic Circuits',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4400',
      Title: 'Informal Advanced Laboratory',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4410',
      Title: 'Advanced Experimental Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4443',
      Title: 'Intermediate Quantum Mechanics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4444',
      Title: 'Introduction to Particle Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4484',
      Title: 'Teaching and Learning Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4485',
      Title: 'Teaching Experience I',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4486',
      Title: 'Teaching Experience II',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4487',
      Title: 'Teaching Experience III',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4488',
      Title: 'Statistical Mechanics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4490',
      Title: 'Independent Study in Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4499',
      Title: 'Senior Thesis II',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 4500',
      Title: 'Cultivating Public Engagement in Physics',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 6500',
      Title: 'Informal Graduate Laboratory',
      Instructor: 'Nam Jung Kim (nk652)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 6510',
      Title: 'Advanced Experimental Physics',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 6520',
      Title: 'Projects in Experimental Physics',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 6562',
      Title: 'Statistical Physics I',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 7636',
      Title: 'Solid-State Physics II',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 7645',
      Title: 'An Introduction to the Standard Model of Particle Physics',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 7652',
      Title: 'Relativistic Quantum Field Theory II',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 7684',
      Title: 'Teaching and Learning Physics',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PHYS 7690',
      Title: 'Independent Study in Physics',
      Instructor: 'Robert Fulbright (rmf14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 1130',
      Title:
        'Light and Life: The Relationship between Light and Life in the Natural World',
      Instructor: 'Randy Wayne (row1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 2490',
      Title: 'Hollywood Biology: Science in Cinema',
      Instructor: 'Michael Scanlon (mjs298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 3420',
      Title: 'Plant Physiology, Lectures',
      Instructor: 'Carmen Catala (cc283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 3421',
      Title: 'Plant Physiology, Laboratory',
      Instructor: 'Tom Silva (ts21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 3430',
      Title: 'Molecular Biology and Genetic Engineering of Plants',
      Instructor: 'Tom Silva (ts21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 3431',
      Title:
        'Laboratory in Molecular Biology and Genetic Engineering of Plants',
      Instructor: 'Jian Hua (jh299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 3880',
      Title: 'Genetic Engineering of Food Crops: Myths and Truths',
      Instructor: 'Jian Hua (jh299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 4000',
      Title: 'Concepts and Techniques in Computational Biology',
      Instructor: 'Jian Hua (jh299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 4620',
      Title: 'Plant Biochemistry',
      Instructor: 'Susheng Gan (sg288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 5420',
      Title: 'Plant Physiology, Lectures',
      Instructor: 'Gaurav Moghe (gdm67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 5430',
      Title: 'Molecular Biology and Genetic Engineering of Plants',
      Instructor: 'Jocelyn Rose (jr286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 5431',
      Title:
        'Laboratory in Molecular Biology and Genetic Engineering of Plants',
      Instructor: 'Carmen Catala (cc283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 6000',
      Title: 'Concepts and Techniques in Computational Biology',
      Instructor: 'Jian Hua (jh299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 6560',
      Title: 'Topics in Plant Evolution',
      Instructor: 'Jian Hua (jh299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 6620',
      Title: 'Plant Biochemistry',
      Instructor: 'Jian Hua (jh299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 6841',
      Title: 'Plant Form and Function: Anatomy, Cell Biology, and Development',
      Instructor: 'Gaurav Moghe (gdm67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 6880',
      Title: 'Genetic Engineering of Food Crops: Myths and Truths',
      Instructor: 'Kevin Nixon (kcn2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 7000',
      Title: 'Seminar in Plant Biology',
      Instructor: 'Jocelyn Rose (jr286)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 7410',
      Title: 'Problems in Plant Biology',
      Instructor: 'Adrienne Roeder (ahr75)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 7440',
      Title: 'Graduate Research in Plant Biology',
      Instructor: 'Susheng Gan (sg288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBIO 9900',
      Title: 'PhD Dissertation Research',
      Instructor: 'Susheng Gan (sg288)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 2010',
      Title: 'Plants, Genes, and Global Food Production',
      Instructor: 'Virginia Moore (vm377)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 2250',
      Title: 'Plant Genetics',
      Instructor: 'Bruce Reisch (bir1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 2253',
      Title: 'Lectures in Plant Genetics',
      Instructor: 'Bruce Reisch (bir1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 4170',
      Title:
        'Quantitative Genetics for Analysis and Improvement of Complex Traits',
      Instructor: 'Bruce Reisch (bir1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 6100',
      Title: 'Practicum in Plant Breeding',
      Instructor: 'Bruce Reisch (bir1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 7000',
      Title: 'Seminar in Plant Breeding and Genetics',
      Instructor: 'Bruce Reisch (bir1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 7170',
      Title:
        'Quantitative Genetics for Analysis and Improvement of Complex Traits',
      Instructor: 'Kelly Robbins (krr73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 8900',
      Title: 'Master of Science Thesis Research',
      Instructor: 'Kelly Robbins (krr73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLBRG 9900',
      Title: 'PhD Dissertation Research',
      Instructor: 'Walter De Jong (wsd2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 1102',
      Title: 'Hands-On Horticulture for Gardeners',
      Instructor: 'Marvin Pritts (mpp3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 1250',
      Title: 'Organic Vegetable Gardening',
      Instructor: 'Marvin Pritts (mpp3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 2150',
      Title: 'Coffee, Cloves, and Chocolate: Plant Explorers and Thieves',
      Instructor: 'Steve Reiners (sr43)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 4500',
      Title: 'Fruit Crop Physiology',
      Instructor: 'Don Rakow (dr14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 4551',
      Title:
        'Principles of Nutrition and Nutrient Management in Crops and Landscape Plants',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 4920',
      Title:
        'Creating the Urban Eden: Woody Plant Selection, Design, and Landscape Establishment',
      Instructor: 'Lailiang Cheng (lc89)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 4975',
      Title: 'Leadership Development for Officers in Plant Science Clubs',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 5850',
      Title: 'Public Garden Management',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 5920',
      Title:
        'Creating the Urban Eden: Woody Plant Selection, Design, and Landscape Establishment',
      Instructor: 'Elizabeth Lamb (eml38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 6253',
      Title: 'Advanced Postharvest Biology: Postharvest Technology',
      Instructor: 'Neil Mattson (nsm47)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 6500',
      Title: 'Fruit Crop Physiology',
      Instructor: 'Don Rakow (dr14)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 6551',
      Title:
        'Principles of Nutrition and Nutrient Management in Crops and Landscape Plants',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 7000',
      Title: 'Seminar in Horticulture',
      Instructor: 'Nina Bassuk (nlb2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 8900',
      Title: 'Master of Science Thesis Research',
      Instructor: 'Chris Watkins (cbw3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLHRT 9900',
      Title: 'PhD Dissertation Research',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 4250',
      Title: 'DNA Targeting: Applications, Reagents, and Impact',
      Instructor: 'Adam Bogdanove (ajb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 5020',
      Title: 'Systems Epidemiology for Plant Pathology',
      Instructor: 'Sarah Pethybridge (sjp277)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 6010',
      Title: 'Molecular Biology of Plant-Microbe Interactions',
      Instructor: 'Clare Casteel (clc269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 6250',
      Title: 'DNA Targeting: Applications, Reagents, and Impact',
      Instructor: 'Adam Bogdanove (ajb7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 6380',
      Title: 'Filamentous Fungal Genetics and Genomics',
      Instructor: 'Barbara Turgeon (bgt1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 6610',
      Title: 'Diagnostic Lab Experience',
      Instructor: 'Karen Snover-Clift (kls13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 6811',
      Title: 'PPPMB Seminar Series II',
      Instructor: 'Kerik Cox (kdc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 6820',
      Title: 'Graduate Student Research Updates',
      Instructor: 'Michelle Heck (mlc68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 7000',
      Title: 'Seminar in Plant Pathology and Plant-Microbe Biology',
      Instructor: 'Barbara Turgeon (bgt1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 8900',
      Title: 'Master of Science Thesis Research',
      Instructor: 'Awais Khan (mak427)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLPPM 9900',
      Title: 'PhD Dissertation Research',
      Instructor: 'Gary Bergstrom (gcb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 1115',
      Title: 'The Nature of Plants',
      Instructor: 'Taryn Bauerle (tlb33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 1150',
      Title: 'CSI: Forensic Botany',
      Instructor: 'Taryn Bauerle (tlb33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 1420',
      Title: 'Functional Plant Biology',
      Instructor: 'William Crepet (wlc1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 2010',
      Title: 'Magical Mushrooms, Mischievous Molds',
      Instructor: 'Tom Silva (ts21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 2013',
      Title: 'Mushrooms, Molds and More',
      Instructor: 'Tom Silva (ts21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 2990',
      Title: 'Introduction to Research Methods in Plant Science',
      Instructor: 'Tom Silva (ts21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 3940',
      Title: 'Skills for Public Engagement',
      Instructor: 'Tom Silva (ts21)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4460',
      Title: 'Plant Behavior and Biotic Interactions, Lecture',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4825',
      Title: 'Museum and Park Interpretation',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4900',
      Title: 'Reflection on Plant Sciences Experiential Learning',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4925',
      Title: 'Plant Sciences Senior Portfolio',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4950',
      Title: 'Senior Seminar in Plant Sciences',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4960',
      Title: 'Undergraduate Internship in Plant Sciences',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4970',
      Title: 'Individual Study in Plant Sciences',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4975',
      Title: 'Leadership through Peer Mentoring in the Plant Sciences',
      Instructor: 'Kathie Hodge (kh11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4980',
      Title: 'Undergraduate Teaching Experience in Plant Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 4990',
      Title: 'Independent Undergraduate Research in Plant Science',
      Instructor: 'Carlyn Buckler (csb36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 5030',
      Title: 'Hemp Breeding and Genetics',
      Instructor: 'Robert Raguso (rar229)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 5045',
      Title: 'Chemistry and Pharmacology of Cannabis',
      Instructor: 'Sonja Skelly (sms92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 5060',
      Title: 'Hemp Processing',
      Instructor: 'Sonja Skelly (sms92)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 5825',
      Title: 'Museum and Park Interpretation',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 5940',
      Title: 'Skills for Public Engagement',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 6900',
      Title: 'Graduate Individual Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 6940',
      Title: 'Special Topics in Plant Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCI 7980',
      Title: 'Graduate Teaching Experience in Plant Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 3210',
      Title: 'Soil and Crop Management for Sustainability',
      Instructor: 'Harold Van Es (hmv1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 3800',
      Title: 'Principles and Practices in Certified Organic Agriculture',
      Instructor: 'Matthew Ryan (mrr232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 4130',
      Title: 'Physiology of Crop Productivity',
      Instructor: 'Matthew Ryan (mrr232)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 4200',
      Title: 'Geographic Information Systems (GIS): Concepts and Application',
      Instructor: 'Tim Setter (tls1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 4440',
      Title: 'Integrated Pest Management',
      Instructor: 'Ying Sun (ys776)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 4660',
      Title: 'Soil Ecology',
      Instructor: 'Ying Sun (ys776)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5130',
      Title: 'Physiology of Crop Productivity',
      Instructor: 'John Losey (jel27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5200',
      Title: 'Geographic Information Systems (GIS): Concepts and Application',
      Instructor: 'John Losey (jel27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5210',
      Title: 'Soil and Crop Management for Sustainability',
      Instructor: 'Janice Thies (jet25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5440',
      Title: 'Integrated Pest Management',
      Instructor: 'Janice Thies (jet25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5500',
      Title: 'Master Composter Training and Extension Internship',
      Instructor: 'Janice Thies (jet25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5660',
      Title: 'Soil Ecology',
      Instructor: 'Tim Setter (tls1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 5800',
      Title: 'Principles and Practices in Certified Organic Agriculture',
      Instructor: 'Ying Sun (ys776)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 6200',
      Title: 'Spatial Modeling and Analysis',
      Instructor: 'Ying Sun (ys776)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 6600',
      Title: 'Remote Sensing Fundamentals',
      Instructor: 'Harold Van Es (hmv1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 7000',
      Title: 'Seminar in Soil and Crop Sciences',
      Instructor: 'John Losey (jel27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 8900',
      Title: 'Master of Science Thesis Research',
      Instructor: 'John Losey (jel27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PLSCS 9900',
      Title: 'PhD Dissertation Research',
      Instructor: 'Janice Thies (jet25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1104',
      Title: 'FWS: Gender and Crime: The Case of the Female Detective',
      Instructor: 'Aoise Stratford (aas68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1160',
      Title: 'FWS:Wonderlands and Other Worlds',
      Instructor: 'Aoise Stratford (aas68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1164',
      Title: 'FWS: Page to Stage to Kick-Ball-Change: Adapting Musical Theatre',
      Instructor: 'Joshua Cole (jbc276)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1166',
      Title: 'FWS: Feminist Theater in the 21st Century',
      Instructor: 'Andrew Colpitts (adc267)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1167',
      Title: 'FWS: Bad',
      Instructor: 'Caitlin Kane (cak269)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1410',
      Title: 'Media Production Laboratory',
      Instructor: 'Lexi Turner (lct63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1610',
      Title: 'Production Technology Laboratory',
      Instructor: 'Jeffrey Palmer (jpp237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1611',
      Title: 'Rehearsal and Performance',
      Instructor: 'Jason Simms (jbs457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 1670',
      Title: 'Student Laboratory Theatre Company',
      Instructor: 'Beth Milles (bfm6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2000',
      Title: 'Media Studies Minor Colloquium',
      Instructor: 'Shanti Pillai (sp984)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2220',
      Title: 'Dance Technique II/Modern',
      Instructor: 'Beth Milles (bfm6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2240',
      Title: 'Dance Technique Workshop',
      Instructor: 'Jeremy Braddock (jb358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2452',
      Title: 'Introduction to Japanese Film',
      Instructor: 'Miles Yeung-Tieu (mey26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2490',
      Title: 'Jewish Films and Filmmakers: Hollywood and Beyond',
      Instructor: 'Juan Aldape Munoz (jma377)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2540',
      Title: 'Introduction to Film Analysis: Meaning and Value',
      Instructor: 'Andrew Campana (ac2794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2610',
      Title: 'Production Crew Laboratory',
      Instructor: 'Andrew Campana (ac2794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2660',
      Title: 'Television',
      Instructor: 'Andrew Campana (ac2794)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2681',
      Title: 'Shakespeare in the Twenty-First Century',
      Instructor: 'Elliot Shapiro (ehs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2703',
      Title: 'Thinking Media',
      Instructor: 'Jessica Bardsley (jb2368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2800',
      Title: 'Introduction to Acting',
      Instructor: 'Jason Simms (jbs457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2805',
      Title: 'Explorations in Creative Collaboration',
      Instructor: 'Sarah Bernstein (seb57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 2901',
      Title: 'Spanish Performance Studio: RVVR Caberet Literario',
      Instructor: 'Warren Cross (wdc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3000',
      Title: 'Independent Study',
      Instructor: 'Nick Salvato (ngs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3210',
      Title: 'Dance Technique III - Classical',
      Instructor: 'Roger Gilbert (rsg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3220',
      Title: 'Dance Technique III - Modern',
      Instructor: 'Erik Born (ecb234)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3225',
      Title: 'Mapping the Moving Body I',
      Instructor: 'Carolyn Goelzer (cjg54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3350',
      Title: 'Technology and the Moving Body I',
      Instructor: 'Theo Black (tb353)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3351',
      Title: 'Transpositioning the Body I',
      Instructor: 'Theo Black (tb353)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3421',
      Title: 'Literary Theory on the Edge',
      Instructor: 'Beth Milles (bfm6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3481',
      Title: 'Imagining Migration in Film and Literature',
      Instructor: 'J Gainor (jeg11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3515',
      Title: 'Video and New Media: Art, Theory, Politics',
      Instructor: 'Fatima Sowe (fs386)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3531',
      Title: 'Screenwriting',
      Instructor: 'Carolyn Goelzer (cjg54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3551',
      Title: 'Global Cinema II',
      Instructor: 'Panagiotis Angelopoulos (paa68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3570',
      Title: 'Film and Video Production I',
      Instructor: 'Jason Simms (jbs457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3610',
      Title: 'Creative Apprenticeship',
      Instructor: 'Sabine Haenni (sh322)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3615',
      Title: 'Costume Construction Studio',
      Instructor: 'Bruce Levitt (bal5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3631',
      Title: 'Project: Terrarium Imagined; World Building Through Allegory',
      Instructor: 'Sara Warner (slw42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3632',
      Title:
        'Production Design for Film, Television and Contemporary and Digital Media Studio I',
      Instructor: 'Austin Bunn (ab2346)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3660',
      Title: 'Costume Design Studio',
      Instructor: 'P. Suber (pbs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3680',
      Title: 'Sound Design',
      Instructor: 'Beth Milles (bfm6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3724',
      Title: 'The Tragic Theatre',
      Instructor: 'Carolyn Goelzer (cjg54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3751',
      Title: 'Global Stages II',
      Instructor: 'Nick Salvato (ngs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3758',
      Title: 'Contemporary American Theatre on Stage and Screen',
      Instructor: 'Warren Cross (wdc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3770',
      Title: 'Shakespeare: The Late Plays',
      Instructor: 'Jeffrey Palmer (jpp237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3800',
      Title: 'Acting II',
      Instructor: 'Samantha Sheppard (sns87)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 3801',
      Title: 'Intermediate Studies in Acting Techniques',
      Instructor: 'Sarah Bernstein (seb57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4020',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'David Feldshuh (dmf6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4222',
      Title: 'Advanced Dance Technique',
      Instructor: 'Daniel Pfeffer (dfp42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4225',
      Title: 'Mapping the Moving Body II',
      Instructor: 'P. Suber (pbs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4230',
      Title: 'Pre-Professional Technique and Repertory',
      Instructor: 'Miles Yeung-Tieu (mey26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4350',
      Title: 'Technology and the Moving Body II',
      Instructor: 'Miles Yeung-Tieu (mey26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4351',
      Title: 'Transpositioning the Body II',
      Instructor: 'P. Suber (pbs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4401',
      Title: 'Advanced Documentary Production',
      Instructor: 'P. Suber (pbs6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4504',
      Title: 'The City: Asia',
      Instructor: 'Philip Lorenz (pal37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4505',
      Title: 'Playwriting II',
      Instructor: 'Sabine Haenni (sh322)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4532',
      Title: 'Advanced Screenwriting',
      Instructor: 'Timothy Murray (tcm1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4585',
      Title: 'Film and Video Production II',
      Instructor: 'Daniel Pfeffer (dfp42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4605',
      Title: 'Oscar Wilde',
      Instructor: 'Jessica Bardsley (jb2368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4701',
      Title: 'Nightlife',
      Instructor: 'Jeffrey Palmer (jpp237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4880',
      Title: 'Fundamentals of Directing II',
      Instructor: 'Jason Simms (jbs457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4950',
      Title: 'Honors Research Tutorial I',
      Instructor: 'Sarah Bernstein (seb57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 4951',
      Title: 'Honors Research Tutorial II',
      Instructor: 'Jason Simms (jbs457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 6020',
      Title: 'U.S. Cultures of War and Empire',
      Instructor: 'Jason Simms (jbs457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 6400',
      Title: 'Thinking Media Studies',
      Instructor: 'Sarah Bernstein (seb57)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 6421',
      Title: 'Literary Theory on the Edge',
      Instructor: 'Warren Cross (wdc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 6551',
      Title: 'Global Cinema II',
      Instructor: 'Warren Cross (wdc4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 6701',
      Title: 'Nightlife',
      Instructor: 'Frederick Ahl (fma2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 7000',
      Title: 'Independent Study for Graduate Students in Theatre',
      Instructor: 'Sara Warner (slw42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 7100',
      Title: 'The Pedagogy of Performing and Media Arts',
      Instructor: 'J Gainor (jeg11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 7401',
      Title: 'Advanced Documentary Production',
      Instructor: 'Philip Lorenz (pal37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PMA 9900',
      Title: 'Thesis and Research Projects',
      Instructor: 'Carolyn Goelzer (cjg54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'POLSH 1131',
      Title: 'Elementary Polish I',
      Instructor: 'Ewa Bachminska (eb583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'POLSH 2034',
      Title: 'Intermediate Polish II',
      Instructor: 'Ewa Bachminska (eb583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PORT 1220',
      Title: 'Elementary Brazilian Portuguese II',
      Instructor: 'Denise Osborne (dmo67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PORT 2020',
      Title: 'Intermediate Brazilian Portuguese for Spanish Speakers II',
      Instructor: 'Denise Osborne (dmo67)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 1102',
      Title: 'Introduction to Cognitive Science',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 1104',
      Title: 'WIM: Introduction to Cognitive Science',
      Instructor: 'Shaun Nichols (sbn44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 1130',
      Title: 'FWS:Behavioral Evolution Psych',
      Instructor: 'Mary Elson (me436)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 1140',
      Title: 'FWS: Perception, Cognition & Development',
      Instructor: 'Karen Sasmita (ss3837)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 1200',
      Title: 'Conversations in Moral Psychology',
      Instructor: 'Elif Celikors (ec839)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 2090',
      Title: 'Developmental Psychology',
      Instructor: 'Laura Niemi (ln279)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 2091',
      Title: 'WIM: Developmental Psychology',
      Instructor: 'Michael Goldstein (mhg26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 2150',
      Title: 'Psychology of Language',
      Instructor: 'Michael Goldstein (mhg26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 2800',
      Title: 'Introduction to Social Psychology',
      Instructor: 'Morten Christiansen (mhc27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 2801',
      Title: 'Introduction to Social Psychology: Writing in the Majors',
      Instructor: 'Tom Gilovich (tdg1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 2940',
      Title: 'Better Decisions for Life, Love and Money',
      Instructor: 'Tom Gilovich (tdg1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3140',
      Title: 'Computational Psychology',
      Instructor: 'Suzanne Shu (sbs78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3150',
      Title: 'Obesity and the Regulation of Body Weight',
      Instructor: 'Shimon Edelman (se37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3160',
      Title: 'Auditory Perception: The Music Lab',
      Instructor: 'Dan Berry (dcb37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3250',
      Title: 'Adult Psychopathology',
      Instructor: 'Carol Krumhansl (clk4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3280',
      Title: 'Field Practicum II',
      Instructor: 'Harry Segal (hgs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3310',
      Title: 'Developmental Psychopathology',
      Instructor: 'Harry Segal (hgs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3320',
      Title: 'Biopsychology of Learning and Memory',
      Instructor: 'Jane Mendle (jem482)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3420',
      Title:
        'Human Perception: Application to Computer Graphics, Art, and Visual Display',
      Instructor: 'Tim Devoogd (tjd5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 3450',
      Title: 'On Being Social',
      Instructor: 'David Field (djf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4210',
      Title: 'Native American Psychology',
      Instructor: 'Vivian Zayas (vz29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4320',
      Title: 'Topics in Cognitive Science',
      Instructor: 'Adam Hoffman (ajh324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4382',
      Title: 'Language and Thought',
      Instructor: 'Shimon Edelman (se37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4390',
      Title: 'Neural Circuits for Social Behavior',
      Instructor: 'Yarden Kedar (yek2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4600',
      Title: 'Neural Representations',
      Instructor: 'Katherine Tschida (kat227)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4700',
      Title: 'Undergraduate Research in Psychology',
      Instructor: 'Thomas Cleland (tac29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4710',
      Title: 'Advanced Undergraduate Research in Psychology',
      Instructor: 'Morten Christiansen (mhc27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4800',
      Title: 'Social Psychology of Race & Racism',
      Instructor: 'Thomas Cleland (tac29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4850',
      Title: 'The Self',
      Instructor: 'Katherine Tschida (kat227)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4910',
      Title: 'Research Methods in Psychology',
      Instructor: 'Tim Devoogd (tjd5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 4940',
      Title: 'Moral Psychology in Action',
      Instructor: 'Amy Krosch (ark256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6000',
      Title: 'General Research Seminar',
      Instructor: 'Shimon Edelman (se37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6140',
      Title: 'Computational Psychology',
      Instructor: 'Charles Trautmann (cht2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6210',
      Title: 'Behavioral and Brain Sciences',
      Instructor: 'David Field (djf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6271',
      Title: 'Topics in Biopsychology',
      Instructor: 'Christiane Linster (cl243)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6420',
      Title:
        'Human Perception: Applications to Computer Graphics, Art, and Visual Display',
      Instructor: 'Tom Gilovich (tdg1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6450',
      Title: 'On Being Social',
      Instructor: 'Michael Goldstein (mhg26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6600',
      Title: 'Neural Representations',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6800',
      Title: 'Social Psychology of Race & Racism',
      Instructor: 'Carol Krumhansl (clk4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6850',
      Title: 'The Self',
      Instructor: 'David Levitsky (dal4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 6910',
      Title: 'Research Methods in Psychology',
      Instructor: 'David Pizarro (dap54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 7000',
      Title: 'Research in Biopsychology',
      Instructor: 'Vivian Zayas (vz29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 7090',
      Title: 'Developmental Psychology',
      Instructor: 'Harry Segal (hgs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 7100',
      Title: 'Research in Human Experimental Psychology',
      Instructor: 'David Smith (dms248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 7160',
      Title: 'Auditory Perception: The Music Lab',
      Instructor: 'Barbara Strupp (bjs13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 7200',
      Title: 'Research in Social Psychology and Personality',
      Instructor: 'Vivian Zayas (vz29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 7760',
      Title: 'Proseminar in Social Psychology II',
      Instructor: 'Alexander Ophir (ago25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 9000',
      Title: 'Doctoral Thesis Research in Biopsychology',
      Instructor: 'Khena Swallow (kms424)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 9100',
      Title: 'Doctoral Thesis Research in Human Experimental Psychology',
      Instructor: 'Marianella Casasola (mc272)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PSYCH 9200',
      Title: 'Doctoral Thesis Research in Social Psychology and Personality',
      Instructor: 'Barbara Koslowski (bmk2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PUNJB 1122',
      Title: 'Elementary Punjabi II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'PUNJB 2202',
      Title: 'Intermediate Punjabi II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'QUECH 1220',
      Title: 'Elementary Quechua II',
      Instructor: 'Soledad Chango (msc299)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2204',
      Title: 'Introduction to Quranic Arabic',
      Instructor: 'Munther Younes (may2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2208',
      Title: 'The History of Religious Life in Imperial China',
      Instructor: 'Tj Hinrichs (th289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2250',
      Title: 'Introduction to Asian Religions',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2257',
      Title:
        'Vanishing World: Religious Reflections on the Climate Crisis, Mass Extinction and Ecosystem Collapse',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2279',
      Title: 'Chinese Mythology',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2644',
      Title: 'Introduction to Judaism',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 2853',
      Title: 'The Law in Jewish History',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3150',
      Title: 'Medieval Philosophy',
      Instructor: 'Jane-Marie Law (jml16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3341',
      Title: 'Mahayana Buddhism',
      Instructor: 'Robin McNeal (rm253)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3344',
      Title: 'Introduction to Indian Philosophy',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3416',
      Title: 'Zen Buddhism: Ecology, Sustainability and Daily Life',
      Instructor: 'Olga Litvak (ol76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3720',
      Title: 'Women in Biblical Israel',
      Instructor: 'Scott MacDonald (scm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3738',
      Title: 'Identity in the Ancient World',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 3888',
      Title: 'Jews, Christians, and Others in Late Antiquity',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4100',
      Title: 'Latin Philosophical Texts',
      Instructor: 'Jane-Marie Law (jml16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4102',
      Title: 'Topics in Biblical Hebrew Prose',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Astrid Van Oyen (av475)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4742',
      Title:
        'Dying for God: Judaism, Christianity and the Meaning of Martyrdom',
      Instructor: 'Jason Mokhtarian (jsm467)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4767',
      Title: 'Natural History of Religion',
      Instructor: 'Scott MacDonald (scm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4991',
      Title: 'Directed Study',
      Instructor: 'Lauren Monroe (lm283)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4995',
      Title: 'Senior Honors Essay I',
      Instructor: 'Benjamin Anderson (bwa32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 4996',
      Title: 'Senior Honors Essay II',
      Instructor: 'Olga Litvak (ol76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6020',
      Title: 'Latin Philosophical Texts',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6210',
      Title: 'Topics in Medieval Philosophy',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Daniel Boucher (djb38)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6425',
      Title: 'Mysticism in Medieval Europe',
      Instructor: 'Ross Brann (rb23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6616',
      Title: 'Zen Buddhism: Ecology, Sustainability and Daily Life',
      Instructor: 'Jane-Marie Law (jml16)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6720',
      Title: 'Women in Biblical Israel',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6742',
      Title:
        'Dying for God: Judaism, Christianity and the Meaning of Martyrdom',
      Instructor: 'Kim Haines-Eitzen (kjh10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6767',
      Title: 'Natural History of Religion',
      Instructor: 'Scott MacDonald (scm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RELST 6888',
      Title: 'Jews, Christians, and Others in Late Antiquity',
      Instructor: 'Scott MacDonald (scm8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 1102',
      Title: 'FWS: The Craft of Storytelling',
      Instructor: 'Giulia Andreoni (ga275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 1108',
      Title: 'FWS:Cultural Identities; Cultural Differences',
      Instructor: 'Elise Finielz (eff36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 1109',
      Title: 'FWS: Image and Imagination',
      Instructor: 'Elise Finielz (eff36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 1113',
      Title: 'FWS: Thinking and Thought',
      Instructor: 'K.E. von Wittelsbach (keb11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 1114',
      Title: 'FWS: Semiotics',
      Instructor: 'Romain Pasquer Brochard (rp524)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 1120',
      Title: 'FWS: Animals in Global Cinema: Human and Nonhuman',
      Instructor: 'Nicholas Huelster (neh55)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 2901',
      Title: 'Spanish Performance Studio: RVVR Caberet Literario',
      Instructor: 'Vinh Pham (vpp25)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 3115',
      Title: 'Video and New Media: Art, Theory, Politics',
      Instructor: 'Sarena Tien (sst72)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 4210',
      Title: 'Existentialism',
      Instructor: 'Ti Alkire (eha1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 5070',
      Title: 'Methodology of Romance Language Learning and Teaching',
      Instructor: 'Ewa Bachminska (eb583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 6525',
      Title: 'Historicizing Communism',
      Instructor: 'Panagiotis Angelopoulos (paa68)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ROMS 6855',
      Title: 'Gramsci and Cultural Politics',
      Instructor: 'Timothy Murray (tcm1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 1104',
      Title: 'Conversation Practice',
      Instructor: 'Raissa Krivitsky (rvk3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 1122',
      Title: 'Elementary Russian through Film',
      Instructor: 'Viktoria Tsimberov (vt13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 1126',
      Title: 'Reading Russian Press',
      Instructor: 'Viktoria Tsimberov (vt13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 1132',
      Title: 'Self-Paced Elementary Russian II',
      Instructor: 'Slava Paperno (sp27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 2204',
      Title: 'Intermediate Composition and Conversation',
      Instructor: 'Viktoria Tsimberov (vt13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 3304',
      Title: 'Advanced Composition and Conversation',
      Instructor: 'Slava Paperno (sp27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 3310',
      Title: 'Advanced Reading',
      Instructor: 'Slava Paperno (sp27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 4491',
      Title: 'Reading Course: Russian Literature in the Original Language',
      Instructor: 'Viktoria Tsimberov (vt13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSA 6634',
      Title: 'Russian for Russian Specialists',
      Instructor: 'Viktoria Tsimberov (vt13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSL 2150',
      Title: 'Russian Culture, History, and Politics through Film',
      Instructor: 'Raissa Krivitsky (rvk3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSL 4492',
      Title: 'Supervised Reading in Russian Literature',
      Instructor: 'Nancy Pollak (np27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'RUSSL 6611',
      Title: 'Supervised Reading and Research',
      Instructor: 'Nancy Pollak (np27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SANSK 3302',
      Title: 'Advanced Sanskrit II',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SANSK 5510',
      Title: 'Graduate Studies in Sanskrit',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 2025',
      Title: "Apartheid's Afterlife",
      Instructor: 'Abikal Borah (ab2524)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 2240',
      Title: 'Dance Technique Workshop',
      Instructor: 'Juan Aldape Munoz (jma377)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 2241',
      Title: 'Game of Thrones: Multi-Media Fantasies',
      Instructor: 'Andrea Bachner (asb76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 2675',
      Title: 'Cultures of the Cold War',
      Instructor: 'Jeremy Braddock (jb358)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 2750',
      Title: 'Introduction to Humanities',
      Instructor: 'Karen Pinkus (kep44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 2812',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: 'Kaja Tally-Schumacher (kjt59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 3120',
      Title: 'Seminar in Greek',
      Instructor: 'Maddie Reynolds (mlr292)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 3625',
      Title: 'Paris, Capital of Modernity?',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 3742',
      Title: 'Africans and African Americans in Literature',
      Instructor: 'Mathura Umachandran (myu2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 3750',
      Title: 'Humanities Scholars Research Methods',
      Instructor: 'Kelly Presutti (kmp275)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4008',
      Title: 'Literature and Relationality',
      Instructor: 'Mukoma Ngugi (mwn39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4605',
      Title: 'Black Speculative Fiction',
      Instructor: 'Durba Ghosh (dg256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4666',
      Title: 'Specters of Latin America',
      Instructor: 'Eman Ghanayem (eag249)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4667',
      Title: 'Sonic Remains: Media, Performance, and Material Culture',
      Instructor: 'Derrick Spires (drs385)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Irina Troconis Gonzalez (irt23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: 'Maria Edurne Zuazu Bermejo (mz373)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4670',
      Title: 'Race and Justice After DNA',
      Instructor: 'Yomaira Figueroa-Vasquez (ycf2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4701',
      Title: 'Nightlife',
      Instructor: 'Leslie Alexander (lma1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4750',
      Title: 'Senior Capstone Seminar for Humanities Scholars',
      Instructor: 'Noah Tamarkin (nt383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4800',
      Title: 'Rural Humanities Seminar',
      Instructor: 'Karen Jaime (kj12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4866',
      Title: 'Producing Cloth Cultures',
      Instructor: 'Maddie Reynolds (mlr292)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 4916',
      Title: 'Modern Chinese Art',
      Instructor: 'Kaja Tally-Schumacher (kjt59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6356',
      Title: 'Rhetoric of Social Movements',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6666',
      Title: 'Specters of Latin America',
      Instructor: 'Kaja McGowan (kmm22)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6667',
      Title: 'Sonic Remains: Media, Performance, and Material Culture',
      Instructor: 'An-Yi Pan (ap76)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6668',
      Title:
        'Afro-Diasporic Afterlives: The Archive, Refusal, and the Disappeared',
      Instructor: 'Bamba Ndiaye (can74)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6669',
      Title:
        'From Slavery to Mass Incarceration: A History of Policing in Black Communities',
      Instructor: 'Irina Troconis Gonzalez (irt23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6670',
      Title: 'Race and Justice After DNA',
      Instructor: 'Maria Edurne Zuazu Bermejo (mz373)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6800',
      Title: 'Rural Humanities Seminar',
      Instructor: 'Yomaira Figueroa-Vasquez (ycf2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SHUM 6819',
      Title: 'Urban Justice',
      Instructor: 'Leslie Alexander (lma1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SINHA 1100',
      Title: 'Elements of Sinhala Language and Culture',
      Instructor: 'Bandara Herath (mph82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SINHA 1122',
      Title: 'Elementary Sinhala II',
      Instructor: 'Bandara Herath (mph82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SINHA 2202',
      Title: 'Intermediate Sinhala II',
      Instructor: 'Bandara Herath (mph82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SINHA 4400',
      Title: 'Literary Sinhala II',
      Instructor: 'Bandara Herath (mph82)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SNLIT 6602',
      Title: 'Topics in Sanskrit Literature II',
      Instructor: 'Lawrence McCrea (ljm223)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 1101',
      Title: 'Introduction to Sociology',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2030',
      Title: 'Population and Public Policy',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2100',
      Title:
        'What Is Science? An Introduction to the Social Studies of Science and Technology',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2190',
      Title: 'Introduction to Economic Sociology',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2208',
      Title: 'Social Inequality',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2250',
      Title: 'Schooling and Society',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2270',
      Title: 'The Computerization of the American Social System',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 2710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 3170',
      Title: 'Nationalism and Identity',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 3180',
      Title: 'Health Disparities',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 3240',
      Title: 'Environmental Sociology',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 3710',
      Title: 'Comparative Social Inequalities',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4010',
      Title: 'Diasporic and Indigenous Health',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4120',
      Title: 'Health and Social Context',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4160',
      Title: 'The Ethnography of Poverty and Inequality',
      Instructor: 'Sharon Sassler (ss589)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4560',
      Title: 'Evaluation and Society',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4910',
      Title: 'Independent Study',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4950',
      Title: 'Honors Research',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4960',
      Title: 'Honors Thesis: Senior Year',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 4980',
      Title: 'Engaged Learning Capstone',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 5020',
      Title: 'Basic Problems in Sociology II',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 5190',
      Title: 'Workshop on Social Inequality',
      Instructor: 'Victor Nee (vgn1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 5710',
      Title:
        "America's Promise: Social and Political Context of American Education",
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6000',
      Title: 'Doing Research With Marginalized Populations',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6020',
      Title: 'Intermediate Statistics for Sociological Research',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6040',
      Title: 'Advanced Statistics for Sociological Research',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6080',
      Title: 'Proseminar in Sociology',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6200',
      Title: 'Political Culture',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6270',
      Title: 'Sociology of Religion',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6280',
      Title: 'Family Demography',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6310',
      Title: 'Qualitative Research Methods for Studying Science',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 6910',
      Title: 'Independent Study',
      Instructor: 'Vida Maralani (vm343)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 8920',
      Title: 'Graduate Research',
      Instructor: 'Kendra Bischoff (kb536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SOC 8960',
      Title: 'Thesis Research',
      Instructor: 'Joseph Sullivan (jfs325)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 1220',
      Title: 'Elementary Spanish II',
      Instructor: 'Brisa Teutli (bt54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 1230',
      Title: 'Continuing Spanish',
      Instructor: 'Brisa Teutli (bt54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 1305',
      Title: 'FWS:Narrating the Spanish Civil War',
      Instructor: 'Brisa Teutli (bt54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2000',
      Title: 'Spanish for Heritage Speakers',
      Instructor: 'Brisa Teutli (bt54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2070',
      Title: 'Intermediate Spanish for the Medical and Health Professions',
      Instructor: 'Federico Giordano Perla (fg287)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2090',
      Title: 'Intermediate Spanish I (Composition and Conversation)',
      Instructor: 'Lu Han (lh664)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2095',
      Title: 'Spanish Intermediate Composition and Conversation II',
      Instructor: 'Lilly Schaber (lss259)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2130',
      Title: 'Advanced Spoken Spanish',
      Instructor: 'Juan Escalona Torres (jme252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2140',
      Title: 'Modern Spanish Survey',
      Instructor: 'Stephanie Lopez (sml363)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2150',
      Title: 'Contemporary Latin American Survey',
      Instructor: 'Daryl Spurlock (ds945)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2170',
      Title: 'Early Modern Iberian Survey',
      Instructor: 'Roberto Ibanez Ricouz (rdi9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2180',
      Title: 'Advanced Spanish Writing Workshop',
      Instructor: 'Isabel Calderon Reyes (ic356)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2200',
      Title: 'Perspectives on Latin America',
      Instructor: 'Emilia Illana Mahiques (ei78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2205',
      Title: 'Perspectives on Latin America in Spanish',
      Instructor: 'Emilia Illana Mahiques (ei78)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 2460',
      Title: 'Contemporary Narratives by Latina Writers',
      Instructor: 'Ashley Edlund-Chescheir (ame237)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 3240',
      Title: 'Iberian Modern Political Cultures',
      Instructor: 'Hannah Cole (hrc37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 3325',
      Title: 'Politics and Fiction in Latin America',
      Instructor: 'Itziar Rodriguez de Rivera (ir224)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 3335',
      Title: 'Border Environments',
      Instructor: 'Itziar Rodriguez de Rivera (ir224)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 3970',
      Title: 'Ruined Landscapes and the Visual Archive',
      Instructor: 'Mary Redmond (mkr4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 4020',
      Title: 'Reading the Body in Medicine and Fiction',
      Instructor: 'Mary Redmond (mkr4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 4200',
      Title: 'Special Topics in Spanish Literature',
      Instructor: 'Monica Bevia (mjb383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 4300',
      Title: 'Honors Work II',
      Instructor: 'Monica Bevia (mjb383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 4666',
      Title: 'Specters of Latin America',
      Instructor: 'Monica Bevia (mjb383)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 4895',
      Title: 'Cyborgs, Animals, and Monsters',
      Instructor: 'Andre Nascimento (adn52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 6335',
      Title: 'Border Environments',
      Instructor: 'Juan Escalona Torres (jme252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 6400',
      Title: 'Special Topics in Spanish Literature',
      Instructor: 'Nilsa Maldonado-Mendez (nbm4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 6525',
      Title: 'Historicizing Communism',
      Instructor: 'Macarena Tejada Lopez (mt639)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 6666',
      Title: 'Specters of Latin America',
      Instructor: 'Silvia Amigo-Silvestre (sa254)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 6670',
      Title: 'Fictions of the Environment',
      Instructor: 'Silvia Amigo-Silvestre (sa254)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SPAN 6950',
      Title: "The People's Irruptions: Latin American Critical Thinking",
      Instructor: 'Juan Escalona Torres (jme252)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 1102',
      Title: 'Histories of the Future',
      Instructor: 'Rachel Prentice (rep35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 1123',
      Title: 'FWS: Technology and Society Topics',
      Instructor: 'Wanheng Hu (wh429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2011',
      Title:
        'What Is Science? An Introduction to the Social Studies of Science and Technology',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2061',
      Title: 'Ethics and the Environment',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2071',
      Title: 'Introduction to the History of Medicine',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2131',
      Title: 'Science Fiction',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2468',
      Title: 'Medicine, Culture, and Society',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2721',
      Title: 'History of Mental Health and Mental Illness in the United States',
      Instructor: 'Stephen Hilgartner (shh6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2751',
      Title: 'Robot Ethics',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2812',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 2851',
      Title: 'Communication, Environment, Science, and Health',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 3042',
      Title: 'The Politics of Technology',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 3181',
      Title: 'Living in an Uncertain World: Science, Technology, and Risk',
      Instructor: 'Juno Parrenas (jsp324)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 3241',
      Title: 'Environmental Sociology',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 3601',
      Title: 'Ethical Issues in Engineering Practice',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 3991',
      Title: 'Undergraduate Independent Study',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4040',
      Title: 'Digital Due Process Clinic',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4168',
      Title: 'Race and Asia in World History',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4200',
      Title: 'Information Policy: Applied Research and Analysis',
      Instructor: 'Suman Seth (ss536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4231',
      Title: 'Gender and Technology in Historical Perspectives',
      Instructor: 'Anindita Banerjee (ab425)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4451',
      Title: 'Making Science Policy: The Real World',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4561',
      Title: 'Evaluation and Society',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4634',
      Title: 'Curating the British Empire',
      Instructor: 'Alex Nading (amn242)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4650',
      Title: 'Advanced Topics in Clinical Ethics',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4667',
      Title: 'Sonic Remains: Media, Performance, and Material Culture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4670',
      Title: 'Race and Justice After DNA',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4691',
      Title: 'Food, Agriculture, and Society',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4721',
      Title:
        'Peace Building in Conflict Regions: Case Studies Sub-Saharan Africa Israel Palestinian Territories',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 4992',
      Title: 'Honors Project II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6061',
      Title: 'Science, Technology and Capitalism',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6101',
      Title: 'Sense, Movement, Sociality',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6168',
      Title: 'Race and Asia in World History',
      Instructor: 'Stephen Vider (sv484)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6311',
      Title: 'Qualitative Research Methods for Studying Science',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6634',
      Title: 'Curating the British Empire',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6667',
      Title: 'Sonic Remains: Media, Performance, and Material Culture',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6670',
      Title: 'Race and Justice After DNA',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 6991',
      Title: 'Graduate Independent Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STS 7937',
      Title: 'Proseminar in Peace Studies',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 1380',
      Title: 'Data Science for All',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 2100',
      Title: 'Introductory Statistics',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 2110',
      Title: 'Statistical Methods for the Social Sciences II',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 2150',
      Title: 'Introductory Statistics for Biology',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 3080',
      Title: 'Probability Models and Inference',
      Instructor: 'Sumanta Basu (sb2457)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 3110',
      Title: 'Probability Models and Inference for the Social Sciences',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 3200',
      Title: 'Biological Statistics II',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 3510',
      Title: 'Introduction to Engineering Stochastic Processes I',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4060',
      Title: 'Python Programming and its Applications in Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4090',
      Title: 'Theory of Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4140',
      Title: 'Applied Design',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4520',
      Title: 'Statistical Computing',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4550',
      Title: 'Applied Time Series Analysis',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4750',
      Title: 'Understanding Machine Learning',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4780',
      Title: 'Bayesian Data Analysis: Principles and Practice',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4970',
      Title: 'Undergraduate Supervised Teaching',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4980',
      Title: 'Tutorial in Actuarial Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4990',
      Title: 'Undergraduate Individual Study in Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4995',
      Title: 'Internship in Data Science',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 4999',
      Title: 'Undergraduate Dissertation Research',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5045',
      Title: 'Python Programming and its Applications in Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5065',
      Title: 'Big Data Management and Analysis',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5090',
      Title: 'Theory of Statistics',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5110',
      Title: 'Statistical Methods for the Social Sciences II',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5140',
      Title: 'Applied Design',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5150',
      Title: 'Introductory Statistics for Biology',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5201',
      Title: 'Biological Statistics II',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5520',
      Title: 'Statistical Computing',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5550',
      Title: 'Applied Time Series Analysis',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5640',
      Title: 'Statistics for Financial Engineering',
      Instructor: 'Jeremy Entner (jfe35)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5750',
      Title: 'Understanding Machine Learning',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5780',
      Title: 'Bayesian Data Analysis: Principles and Practice',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5980',
      Title: 'Tutorial in Actuarial Statistics',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5990',
      Title: 'Directed Studies in Applied Statistics',
      Instructor: 'Melissa Smith (ms429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5995',
      Title: 'Internship in Data Science',
      Instructor: 'Melissa Smith (ms429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 5999',
      Title: 'Applied Statistics MPS Data Analysis Project',
      Instructor: 'Melissa Smith (ms429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 6730',
      Title: 'Mathematical Statistics I',
      Instructor: 'Melissa Smith (ms429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 6780',
      Title: 'Bayesian Statistics and Data Analysis',
      Instructor: 'Melissa Smith (ms429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 6940',
      Title: 'Graduate Special Topics in Statistics',
      Instructor: 'Melissa Smith (ms429)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 6970',
      Title: 'Individual Graduate Study in Statistics',
      Instructor: 'Ahmed El Alaoui (ae333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 7180',
      Title: 'Generalized Linear Models',
      Instructor: 'Ahmed El Alaoui (ae333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 7951',
      Title: 'Advanced Statistical Consulting',
      Instructor: 'Ahmed El Alaoui (ae333)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 7999',
      Title: 'Graduate Level Dissertation Research',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'STSCI 9999',
      Title: 'Doctoral Level Dissertation Research',
      Instructor: 'Kevin Packard (kcp48)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SWAHL 1101',
      Title: 'Elementary Swahili II',
      Instructor: 'Happiness Bulugu (hpb36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SWAHL 1107',
      Title: 'Elementary Swahili for Global Health',
      Instructor: 'Happiness Bulugu (hpb36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SWAHL 1108',
      Title: 'Elementary Swahili Jumpstart',
      Instructor: 'Happiness Bulugu (hpb36)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SWAHL 2102',
      Title: 'Intermediate Swahili II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SWED 2040',
      Title: 'Intermediate Swedish II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 1900',
      Title: 'Systems Engineering Project for Freshmen',
      Instructor: 'Sirietta Simoncini (ss2583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 4050',
      Title: 'Systems Engineering Design Fundamentals',
      Instructor: 'Sirietta Simoncini (ss2583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 4200',
      Title:
        'Inventory, Operations, and Supply Chain Management: Models and Optimization',
      Instructor: 'Sirietta Simoncini (ss2583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 4900',
      Title: 'Systems Engineering Project for Undergraduates',
      Instructor: 'Sirietta Simoncini (ss2583)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5050',
      Title: 'Systems Engineering Design Fundamentals',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5140',
      Title: 'Economic and Financial Decisions for Engineers',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5160',
      Title: 'Managing and Modeling Complex Systems for Organizational Leaders',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5170',
      Title: 'Energy Policies for Systems Transition',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5200',
      Title: 'Systems Analysis Behavior and Optimization',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5360',
      Title: 'Design and Construction of IoT Devices',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5400',
      Title: 'Theory and Practice of Systems Architecture',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5500',
      Title: 'Systems Modeling Language: Fundamentals and Practice',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5700',
      Title: 'Special Topics in Systems Engineering',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5740',
      Title: 'Design Thinking for Complex Systems',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5880',
      Title: 'Industrial Big Data Analytics and Machine Learning',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 5900',
      Title: 'Systems Engineering Design Project',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 6100',
      Title: 'Systems Seminar Series',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 6400',
      Title: 'Theory and Practice of Systems Architecture',
      Instructor: 'David Schneider (drs44)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 6610',
      Title: 'Applied Model Based Systems Engineering II',
      Instructor: 'Al George (arg2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 6620',
      Title: 'Applied Model Based Systems Engineering III',
      Instructor: 'Joshua Jahani (jj454)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 6880',
      Title: 'Industrial Big Data Analytics and Machine Learning',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'SYSEN 8100',
      Title: 'Systems Seminar Series - PhD',
      Instructor: 'David Goldberg (dag369)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TAG 1100',
      Title: 'Elements of Tagalog-Filipino Language and Culture',
      Instructor: 'Maria Theresa Savella (mts12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TAG 1122',
      Title: 'Elementary Tagalog-Filipino II',
      Instructor: 'Maria Theresa Savella (mts12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TAG 2202',
      Title: 'Intermediate Tagalog-Filipino II',
      Instructor: 'Maria Theresa Savella (mts12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TAG 3302',
      Title: 'Advanced Tagalog-Filipino II',
      Instructor: 'Maria Theresa Savella (mts12)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TAMIL 2202',
      Title: 'Intermediate Tamil II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5010',
      Title: 'Values at Play in Digital Technologies',
      Instructor: 'Emanuel Moss (em683)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5110',
      Title: 'Early Adopters',
      Instructor: 'Aaron Holiday (ah643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5200',
      Title: 'Product Management',
      Instructor: 'Aaron Holiday (ah643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5220',
      Title: 'Visual and Interaction Design for Digital Products',
      Instructor: 'Aaron Holiday (ah643)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5230',
      Title: 'Data Storytelling to Add Value and Build Better',
      Instructor: 'Keith Cowing (krc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5240',
      Title: 'Interface as Brand',
      Instructor: 'Keith Cowing (krc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5250',
      Title: 'Applied Technopoetics',
      Instructor: 'Keith Cowing (krc24)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5260',
      Title: 'User Experience Research',
      Instructor: 'Juliette Cezzar (jc2987)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5270',
      Title: 'Practical Introduction to Computer Security and Policy',
      Instructor: 'Dionna McPhatter (dcm298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5320',
      Title: 'Law for Non-Lawyers',
      Instructor: 'Dionna McPhatter (dcm298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5910',
      Title: 'Startup Studio',
      Instructor: 'Dionna McPhatter (dcm298)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5920',
      Title: 'BigCo Studio',
      Instructor: 'Rei Inamoto (ri63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5930',
      Title: 'PiTech Studio',
      Instructor: 'Rei Inamoto (ri63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TECH 5999',
      Title: 'Independent Study',
      Instructor: 'Rei Inamoto (ri63)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'THAI 1100',
      Title: 'Elements of Thai Language and Culture',
      Instructor: 'Ngampit Jagacinski (nj13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'THAI 1122',
      Title: 'Elementary Thai II',
      Instructor: 'Ngampit Jagacinski (nj13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'THAI 2202',
      Title: 'Intermediate Thai II',
      Instructor: 'Ngampit Jagacinski (nj13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'THAI 2204',
      Title: 'Intermediate Thai Composition and Conversation II',
      Instructor: 'Ngampit Jagacinski (nj13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'THAI 3302',
      Title: 'Advanced Thai II',
      Instructor: 'Ngampit Jagacinski (nj13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'THAI 3304',
      Title: 'Thai Literature II',
      Instructor: 'Ngampit Jagacinski (nj13)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TIBET 1112',
      Title: 'Elementary Modern Tibetan II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TIBET 1122',
      Title: 'Elementary Classical Tibetan II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TIBET 2202',
      Title: 'Intermediate Classical Tibetan II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TIBET 2212',
      Title: 'Intermediate Modern Tibetan II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TIBET 3302',
      Title: 'Advanced Classical Tibetan II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TIBET 3312',
      Title: 'Advanced Modern Tibetan II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TOX 4900',
      Title: 'Toxicology of Insecticides',
      Instructor: 'Jeffrey Scott (jgs5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TOX 8900',
      Title: "Master's Thesis and Research",
      Instructor: 'Beth Ahner (baa7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TOX 9900',
      Title: 'Doctoral Thesis and Research',
      Instructor: 'Antje Baeumner (ajb23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TURK 1331',
      Title: 'Elementary Turkish II',
      Instructor: 'Banu Ozer-Griffin (bo98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TURK 2332',
      Title: 'Intermediate Turkish II',
      Instructor: 'Banu Ozer-Griffin (bo98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'TURK 5510',
      Title: 'Graduate Studies in Turkish',
      Instructor: 'Banu Ozer-Griffin (bo98)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UKRAN 1122',
      Title: 'Elementary Ukrainian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UKRAN 2134',
      Title: 'Intermediate Ukrainian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UKRAN 3134',
      Title: 'Advanced Ukrainian II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1122',
      Title:
        'Far from Hollywood: The Representation of Youth in Contemporary World Cinema',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1130',
      Title: 'The Art and Science of Birds',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1135',
      Title: 'All About Money',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1152',
      Title: 'How Cornell is Changing the World Through Climate Leadership',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1402',
      Title: 'Rose Scholars Program',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1408',
      Title: 'Carl Becker Café',
      Instructor: 'Claire Menard (cm879)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1410',
      Title: 'Foundations for Healthy Living',
      Instructor: 'Irby Lovette (ijl2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1416',
      Title: 'Socially Just Leadership Development',
      Instructor: 'Daniel Loucks (dpl3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1450',
      Title: 'Toxic Inequality: Environmental Justice in America',
      Instructor: 'Lori Leonard (ll536)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNILWYL 1510',
      Title: 'Living and Learning Across Difference',
      Instructor: 'Rosemary Avery (rja7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'UNIV 5101',
      Title: 'Non-credit Directed Study',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'URDU 1125',
      Title: 'Introduction to Urdu Script',
      Instructor: 'Mariam Fatima (mf655)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETCS 6896',
      Title: 'Topics in Pre-Clinical Veterinary Medicine',
      Instructor: 'Marnie FitzMaurice (mcf32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETCS 7100',
      Title: 'Advanced Veterinary Anesthesiology I',
      Instructor: 'Cheryl Balkman (ceb11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 5000',
      Title: 'Independent Study in Immunology',
      Instructor: 'Avery August (aa749)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 6200',
      Title: 'Research Fellowship in Microbiology and Immunology',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7030',
      Title: 'Biomedical Sciences: Foundations of the PhD',
      Instructor: 'Avery August (aa749)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7050',
      Title: 'Advanced Immunology',
      Instructor: 'Cynthia Leifer (cal59)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7070',
      Title: 'Advanced Work in Bacteriology, Virology, and Immunology',
      Instructor: 'Melanie Ragin (mjr382)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7120',
      Title: 'Seminars in Infection and Immunity',
      Instructor: 'Deborah Fowell (djf273)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7230',
      Title: 'Current Topics in Immunology and Infectious Disease',
      Instructor: 'Brian Rudd (bdr54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7370',
      Title: 'Advanced Work in Animal Parasitology',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7401',
      Title: 'Apicomplexa',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7402',
      Title: 'Excavata',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7403',
      Title: 'Mites',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7404',
      Title: 'Ticks',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7405',
      Title: 'Fleas and Lice',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7407',
      Title: 'Internal Parasites of Cats',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7408',
      Title: 'Internal Parasites of Dogs',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7410',
      Title: 'Internal Parasites of Sheep',
      Instructor: 'Jennifer Ketzis (jkk5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7417',
      Title: 'Organisms as Lab Models',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7423',
      Title: 'Cases with Specimens Laboratory- Large Animal',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7424',
      Title: 'Cases with Specimens Laboratory- Small Animal',
      Instructor: 'Araceli Lucio-Forster (al33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7425',
      Title: 'Imaging of Parasites in Vivo',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7428',
      Title: 'Early Drug Discovery',
      Instructor: 'Christian Epe (che29)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7429',
      Title: 'Antiparasitic Drugs',
      Instructor: 'Randy Lynn (rcl233)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7430',
      Title: 'Drug Discovery-The Big 12',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7433',
      Title: 'Statistics for Efficacy Studies',
      Instructor: 'Hussni Mohammed (hom1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7434',
      Title: 'Regulatory Approval',
      Instructor: 'Jennifer Ketzis (jkk5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7436',
      Title: 'Capstone Project I',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7439',
      Title: 'Parasites of People',
      Instructor: 'Araceli Lucio-Forster (al33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7441',
      Title: 'Wildlife Parasitology',
      Instructor: 'Araceli Lucio-Forster (al33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7442',
      Title: 'Parasite Eradication Programs',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7446',
      Title: 'Capstone Project II',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7720',
      Title: 'Advanced Work in Aquatic Animal Diseases',
      Instructor: 'Rodman Getchell (rgg4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VETMI 7830',
      Title: 'Seminars in Parasitology',
      Instructor: 'Dwight Bowman (ddb3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 1104',
      Title: 'Introduction to Wines and Vines',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 1105',
      Title: 'Introduction to Wines and Vines Laboratory',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 2310',
      Title: 'The Science and Technology of Beer',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 2340',
      Title: 'Cider Production: Apples and Fermented Juice',
      Instructor: 'Kathy Arnink (kja1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 2360',
      Title: 'Distillation Principles and Practices',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 2400',
      Title: 'Wines and Grapes: Composition and Analysis',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 3300',
      Title: 'The Science of Grapevines',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 3620',
      Title: 'Vineyard Management II',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4310',
      Title: 'The Science and Technology of Beer Laboratory',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4340',
      Title: 'Cider Production Laboratory',
      Instructor: 'Justine Vanden Heuvel (jev32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4360',
      Title: 'Distillation Principles and Practices Laboratory',
      Instructor: 'Russell Moss (jrm587)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4700',
      Title: 'Winemaking Theory and Practice II',
      Instructor: 'Russell Moss (jrm587)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4710',
      Title: 'Winemaking Theory and Practice II Laboratory',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4960',
      Title: 'Viticulture and Enology Internship',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4970',
      Title: 'Individual Study in Viticulture and Enology',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4980',
      Title: 'Undergraduate Teaching Experience',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 4990',
      Title: 'Undergraduate Research in Viticulture and Enology',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5300',
      Title: 'The Science of Grapevines',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5310',
      Title: 'The Science and Technology of Beer',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5340',
      Title: 'Cider Production: Apples and Fermented Juice',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5360',
      Title: 'Distillation Principles and Practices',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5400',
      Title: 'Wine and Grapes: Composition and Analysis',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5620',
      Title: 'Vineyard Management II',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 5660',
      Title: 'Current Topics in the Biology of Wine Microbes',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 6310',
      Title: 'The Science and Technology of Beer Laboratory',
      Instructor: 'Justine Vanden Heuvel (jev32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 6340',
      Title: 'Cider Production Laboratory',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 6360',
      Title: 'Distillation Principles and Practices Laboratory',
      Instructor: 'Gregory Peck (gmp32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 6700',
      Title: 'Winemaking Theory and Practice II',
      Instructor: 'Dwayne Bershaw (db633)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIEN 6710',
      Title: 'Winemaking Theory and Practice II Laboratory',
      Instructor: 'Gavin Sacks (gls9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIET 1100',
      Title: 'Elements of Vietnamese Language and Culture',
      Instructor: 'Thuy Tranviet (tdt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIET 1122',
      Title: 'Elementary Vietnamese II',
      Instructor: 'Thuy Tranviet (tdt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIET 2202',
      Title: 'Intermediate Vietnamese II',
      Instructor: 'Thuy Tranviet (tdt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VIET 3302',
      Title: 'Advanced Vietnamese II',
      Instructor: 'Thuy Tranviet (tdt5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 2000',
      Title: 'Introduction to Visual Studies',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 2160',
      Title: 'Television',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 2174',
      Title: 'Introduction to Film Analysis: Meaning and Value',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 2540',
      Title: 'Dance Technique Workshop',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 2790',
      Title: 'Jewish Films and Filmmakers: Hollywood and Beyond',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 2812',
      Title: 'Hieroglyphs to HTML: History of Writing',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 3115',
      Title: 'Video and New Media: Art, Theory, Politics',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 3176',
      Title: 'Global Cinema II',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 3342',
      Title:
        'Human Perception: Application to Computer Graphics, Art, and Visual Display',
      Instructor: 'Jolene Rickard (jkr33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 3581',
      Title: 'Imagining Migration in Film and Literature',
      Instructor: 'Nick Salvato (ngs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 3696',
      Title: 'The Arts of Southeast Asia',
      Instructor: 'Jessica Bardsley (jb2368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 3758',
      Title: 'Technology and the Moving Body I',
      Instructor: 'Juan Aldape Munoz (jma377)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 4351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'Elliot Shapiro (ehs9)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 4758',
      Title: 'Technology and the Moving Body II',
      Instructor: 'Athena Kirk (aek238)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 4793',
      Title: 'Film and Video Production II',
      Instructor: 'Timothy Murray (tcm1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 4857',
      Title: 'Producing Cloth Cultures',
      Instructor: 'Jessica Bardsley (jb2368)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VISST 6351',
      Title: 'Problems in Byzantine Art',
      Instructor: 'David Field (djf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTBMS 2990',
      Title: 'Undergraduate Research in Biomedical Sciences',
      Instructor: ''
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTBMS 7020',
      Title: 'The Practice of Laboratory Animal Medicine',
      Instructor: 'Bhupinder Singh (bs256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTBMS 7030',
      Title: 'The Biology and Diseases of Laboratory Animals',
      Instructor: 'Bhupinder Singh (bs256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTBMS 7200',
      Title: 'Biomedical and Biological Sciences Seminar',
      Instructor: 'Theodore Clark (tgc3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5220',
      Title: 'Neuroanatomy',
      Instructor: 'Marnie FitzMaurice (mcf32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5300',
      Title: 'Function and Dysfunction: Part I (Foundation Course IIIa)',
      Instructor: 'Marnie FitzMaurice (mcf32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5500',
      Title: 'Animal Health and Disease: Part I (Foundation Course V)',
      Instructor: 'Kelly Lyboldt (kel28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5520',
      Title: 'Diagnostic Imaging',
      Instructor: 'Kelly Lyboldt (kel28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5600',
      Title: 'Ambulatory and Production Medicine',
      Instructor: 'Kelly Lyboldt (kel28)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5601',
      Title: 'Small Animal Community Practice',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5602',
      Title: 'Small Animal Medicine',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5603',
      Title: 'Small Animal Soft Tissue Surgery Service',
      Instructor: 'Cheryl Balkman (ceb11)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5604',
      Title: 'Large Animal Medicine Service',
      Instructor: 'Peter Scrivani (pvs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5605',
      Title: 'Large Animal Surgery',
      Instructor: 'Assaf Lerer (al736)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5606',
      Title: 'Anesthesiology Service',
      Instructor: 'Peter Scrivani (pvs2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5607',
      Title: 'Dermatology Service',
      Instructor: 'Jessica McArt (js448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5608',
      Title: 'Ophthalmology Service',
      Instructor: 'Jessica McArt (js448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5609',
      Title: 'Pathology Service',
      Instructor: 'Jessica McArt (js448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5610',
      Title: 'Radiology Service',
      Instructor: 'Jessica McArt (js448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5611',
      Title: 'Small Animal Clinical Emergency and Critical Care Medicine',
      Instructor: 'Jessica McArt (js448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5612',
      Title: 'Fourth-Year Seminar',
      Instructor: 'Jessica McArt (js448)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5613',
      Title: 'Small Animal Surgery Orthopedic Surgery Service',
      Instructor: 'Michelle Porter (mbp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5702',
      Title:
        'Veterinary Practice: Ethics and Animal Care (Foundation Course VIIb)',
      Instructor: 'Michelle Porter (mbp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5703',
      Title:
        'Veterinary Practice: Communication Skills (Foundation Course VIIc)',
      Instructor: 'Michelle Porter (mbp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 5705',
      Title: 'Veterinary Practice: Public Health (Foundation Course VIIe)',
      Instructor: 'Michelle Porter (mbp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6100',
      Title: 'Anatomy of the Carnivore',
      Instructor: 'Michelle Porter (mbp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6101',
      Title: 'Anatomy of the Horse',
      Instructor: 'Michelle Porter (mbp73)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6102',
      Title: 'Anatomy of the Ruminant',
      Instructor: 'Kenneth Simpson (kws5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6103',
      Title: 'Comparative Anatomy: Pattern and Function',
      Instructor: 'Kenneth Simpson (kws5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6120',
      Title: 'Anatomy and Histology of Fish',
      Instructor: 'Kenneth Simpson (kws5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6324',
      Title: 'Applied Pharmacology with an Emphasis on Antimicrobial Therapy',
      Instructor: 'Kenneth Simpson (kws5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6328',
      Title: 'Veterinary Clinical Toxicology',
      Instructor: 'Kenneth Simpson (kws5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6330',
      Title: 'Basic Nutrition for Veterinary Students',
      Instructor: 'Kenneth Simpson (kws5)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6421',
      Title: 'Epidemiology of Infectious Diseases',
      Instructor: 'Julia Sumner (jps392)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6423',
      Title: 'Clinical Diagnostic Parasitology',
      Instructor: 'Julia Sumner (jps392)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6425',
      Title: 'Introduction to Shelter Medicine',
      Instructor: 'Julia Sumner (jps392)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6426',
      Title: 'Timely Topics in Veterinary Parasitology: Large-Animal',
      Instructor: 'Julia Sumner (jps392)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6427',
      Title: 'Timely Topics in Veterinary Parasitology: Small-Animal',
      Instructor: 'Julia Sumner (jps392)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6430',
      Title: 'Veterinary Perspectives on Pathogen Control in Animal Manure',
      Instructor: 'Julia Sumner (jps392)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6431',
      Title: 'Microbial Safety of Animal-Based Foods',
      Instructor: 'Joy Tomlinson (jet37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6432',
      Title: 'Fish Health Management',
      Instructor: 'Joy Tomlinson (jet37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6434',
      Title: 'Advanced Shelter Medicine',
      Instructor: 'Joy Tomlinson (jet37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6436',
      Title: 'Directing Community Practice',
      Instructor: 'Joy Tomlinson (jet37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6437',
      Title: 'Infectious Diseases and Management of Poultry',
      Instructor: 'Joy Tomlinson (jet37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6438',
      Title: 'Advanced Work in Animal Parasitology',
      Instructor: 'Joy Tomlinson (jet37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6526',
      Title: 'Small Animal Clinical Nutrition',
      Instructor: 'Susan Fubini (slf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6527',
      Title: 'Veterinary Aspects of Captive Wildlife Management',
      Instructor: 'Susan Fubini (slf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6530',
      Title: 'Llama Tutorial',
      Instructor: 'Susan Fubini (slf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6533',
      Title: 'Advanced Equine Lameness',
      Instructor: 'Susan Fubini (slf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6534',
      Title: 'Equine Reproduction',
      Instructor: 'Susan Fubini (slf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6536',
      Title: 'Advanced Dairy Reproduction',
      Instructor: 'Susan Fubini (slf3)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6538',
      Title: 'Special Problems in Equine Medicine',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6539',
      Title: 'Disorders of Large-Animal Neonates',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6541',
      Title: 'Surgical Pathology',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6542',
      Title:
        'Medical and Surgical Problems of Dairy Cattle: Emphasis on the Individual Animal',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6543',
      Title: 'Advanced Small Animal Medicine',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6545',
      Title: 'Sheep and Goat Medicine',
      Instructor: 'Manuel Martin Flores (mm459)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6546',
      Title: 'Sheep and Goat Medicine: Lab',
      Instructor: 'Jeanine Peters-Kennedy (jp256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6550',
      Title: 'Clinical Pharmacology',
      Instructor: 'Jeanine Peters-Kennedy (jp256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6551',
      Title: 'Topics in Veterinary Emergency and Critical Care Medicine',
      Instructor: 'Jeanine Peters-Kennedy (jp256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6558',
      Title: 'Advanced Small Animal Clinical Oncology',
      Instructor: 'Jeanine Peters-Kennedy (jp256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6559',
      Title: 'Applied Dairy Nutrition for Practitioners',
      Instructor: 'Jeanine Peters-Kennedy (jp256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6562',
      Title: 'Animal Pain',
      Instructor: 'Jeanine Peters-Kennedy (jp256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6565',
      Title: 'Avian Biomedicine and Diseases',
      Instructor: 'Eric Ledbetter (ecl32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6566',
      Title: 'Canine and Feline Dermatology',
      Instructor: 'Eric Ledbetter (ecl32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6567',
      Title: 'Equine Dermatology',
      Instructor: 'Eric Ledbetter (ecl32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6568',
      Title: 'Dairy Herd Epidemiology and Economics',
      Instructor: 'Eric Ledbetter (ecl32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6569',
      Title: 'Clinical Aspects of Non-Traditional Species',
      Instructor: 'Eric Ledbetter (ecl32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6571',
      Title: 'Veterinary Clinical Immunology',
      Instructor: 'Eric Ledbetter (ecl32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6572',
      Title: 'Equine Sports Medicine',
      Instructor: 'Andrew Miller (adm10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6573',
      Title:
        'Veterinary Perspectives for the Health and Welfare of the Domestic International Donkey',
      Instructor: 'Andrew Miller (adm10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6576',
      Title: 'Introduction to Minimally Invasive Surgery',
      Instructor: 'Andrew Miller (adm10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6577',
      Title: 'NYSCHAP',
      Instructor: 'Andrew Miller (adm10)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6600',
      Title: 'Theriogenology Service',
      Instructor: 'Meg Thompson (mst42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6601',
      Title: 'Cardiology Service',
      Instructor: 'Meg Thompson (mst42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6602',
      Title: 'Laboratory Animal Medicine',
      Instructor: 'Meg Thompson (mst42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6603',
      Title: 'Clinical Wildlife, Exotic, and Zoo-Animal Medicine',
      Instructor: 'Meg Thompson (mst42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6605',
      Title: 'Special Opportunities in Clinical Veterinary Medicine',
      Instructor: 'Meg Thompson (mst42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6608',
      Title: 'Clinical Oncology',
      Instructor: 'Meg Thompson (mst42)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6614',
      Title: 'Large Animal Emergency and Critical Care',
      Instructor: 'Gretchen Schoeffler (gls37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6615',
      Title: 'Special Topics in Ambulatory and Production-Animal Medicine',
      Instructor: 'Gretchen Schoeffler (gls37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6616',
      Title: 'Small Animal Dentistry and Oral Surgery',
      Instructor: 'Gretchen Schoeffler (gls37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6618',
      Title: 'Clinical Neurology',
      Instructor: 'Gretchen Schoeffler (gls37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6619',
      Title: 'Clinical Pathology Rotation',
      Instructor: 'Gretchen Schoeffler (gls37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6623',
      Title: 'Clinical Rotation in Shelter Medicine: Principles and Practice',
      Instructor: 'Gretchen Schoeffler (gls37)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6624',
      Title: 'Primary Care Surgery Service',
      Instructor: 'Mary Smith (mcs8)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6627',
      Title: 'Farrier Skills for Veterinarians',
      Instructor: 'Rory Todhunter (rjt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6628',
      Title: 'Clinical Sports Medicine and Rehabilitation',
      Instructor: 'Rory Todhunter (rjt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6629',
      Title: 'Wildlife Medicine',
      Instructor: 'Rory Todhunter (rjt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6724',
      Title: 'Senior Seminar',
      Instructor: 'Rory Todhunter (rjt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6731',
      Title: 'Behavior Problems of Small Animals',
      Instructor: 'Rory Todhunter (rjt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6733',
      Title:
        'Veterinarians and Food-Animal Production Systems: An Introduction',
      Instructor: 'Rory Todhunter (rjt2)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6734',
      Title: 'Companion Animal Welfare Issues',
      Instructor: 'Carolyn McDaniel (cm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6735',
      Title: 'Conservation Medicine',
      Instructor: 'Carolyn McDaniel (cm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6736',
      Title: 'Pet Loss and Bereavement Counseling Course',
      Instructor: 'Carolyn McDaniel (cm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6739',
      Title: 'Overview of Complementary Therapies in Veterinary Medicine',
      Instructor: 'Carolyn McDaniel (cm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6740',
      Title: 'Seminar in Topics of Global Veterinary Medicine',
      Instructor: 'Carolyn McDaniel (cm326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6743',
      Title: 'One Health: Conservation with Communities',
      Instructor: 'Casey Cazer (clc248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6746',
      Title: 'Food Animal Welfare',
      Instructor: 'Francois Elvinger (fe65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6749',
      Title: 'Agile Innovation in Animal Health-Hackathon',
      Instructor: 'Francois Elvinger (fe65)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6750',
      Title: "The Healer's Art",
      Instructor: 'Paul Maza (psm26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6896',
      Title: 'Topics in Veterinary Medicine',
      Instructor: 'Paul Maza (psm26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6897',
      Title: 'Teaching Projects in Veterinary Medicine',
      Instructor: 'Paul Maza (psm26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6898',
      Title: 'Special Projects in Veterinary Medicine',
      Instructor: 'Paul Maza (psm26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTMED 6899',
      Title: 'Research Projects in Veterinary Medicine',
      Instructor: 'Paul Maza (psm26)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 2990',
      Title: 'Undergraduate Research in Epidemiology',
      Instructor: 'Casey Cazer (clc248)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 4990',
      Title: 'Undergraduate Research in Public Health',
      Instructor: 'Hussni Mohammed (hom1)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6102',
      Title: 'Public Health Foundations II',
      Instructor: 'Elizabeth Goldberg (eag256)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6103',
      Title: 'Policy, Leadership, and Ethics',
      Instructor: 'Alexander Travis (ajt32)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6105',
      Title: 'Biostatistics for Health Sciences',
      Instructor: 'Amelia Safi (alg52)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6108',
      Title: 'Applied Data Analysis',
      Instructor: 'Caroline Yancey (cby6)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6122',
      Title: 'Comparative Public Health Nutrition Policy and Programs',
      Instructor: 'Elizabeth Fox (elf23)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6182',
      Title: 'Public Health Practice - Planning',
      Instructor: 'Gary Whittaker (grw7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6184',
      Title: 'Applied Practice Experience in Public Health',
      Instructor: 'Gen Meredith (grm79)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6192',
      Title: 'Public Health Integrated Learning Experience',
      Instructor: 'Isaac Weisfuse (ibw7)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6193',
      Title: 'Special Projects in Public Health',
      Instructor: 'Karla Hanson (kh289)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 6650',
      Title: 'Study Designs',
      Instructor: 'Kathryn Fiorella (kf326)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 7080',
      Title: 'Epidemiology Seminar Series',
      Instructor: 'Kevin Cummings (kjc39)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 7660',
      Title: 'Graduate Research',
      Instructor: 'Lorraine Francis (lf423)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'VTPMD 7990',
      Title: 'Independent Studies in Epidemiology',
      Instructor: 'Yihong Li (yl3428)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WOLOF 1118',
      Title: 'Elementary Wolof II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WOLOF 2119',
      Title: 'Intermediate Wolof II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WOLOF 3114',
      Title: 'Advanced Wolof II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 1038',
      Title: 'Tutorial in Basic English and Composition',
      Instructor: 'Tracy Carrick (thc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 1380',
      Title: 'FWS: Elements of Academic Writing',
      Instructor: 'Abigail Sprenkle (as3337)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 1390',
      Title: 'Special Topics in Writing',
      Instructor: 'Tracy Carrick (thc33)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 1440',
      Title: 'FWS: Writing the Self: Mind, Body, Self',
      Instructor: 'Abigail Sprenkle (as3337)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 1968',
      Title: 'FWS: Public Writing: Navigating the News',
      Instructor: 'Brad Zukovic (bbz4)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 2101',
      Title: 'Responding to Writing: Theory and Pedagogy',
      Instructor: 'Darlene Evans (dme27)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'WRIT 7101',
      Title: 'Writing in the Majors Seminar',
      Instructor: 'Jessica Sands (jls642)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'YORUB 1109',
      Title: 'Introduction to Yoruba II',
      Instructor: 'Adeolu Ademoyo (aaa54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'YORUB 2111',
      Title: 'Intermediate Yoruba II',
      Instructor: 'Adeolu Ademoyo (aaa54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'YORUB 3111',
      Title: 'Advanced Yoruba II',
      Instructor: 'Adeolu Ademoyo (aaa54)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ZULU 1116',
      Title: 'Elementary Zulu II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ZULU 2117',
      Title: 'Intermediate Zulu II',
      Instructor: 'Angelika Kraemer (ak2573)'
    },
    {
      School: 'Cornell University',
      SP22: 'SP22',
      Code: 'ZULU 3114',
      Title: 'Advanced Zulu II',
      Instructor: 'Angelika Kraemer (ak2573)'
    }
  ];

  const handleSubmit = () => {
    setSubmittingClass(true);
    setTimeout(() => {
      setShowConfirmModal(false);
      setSubmittingClass(false);
    }, 2000);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  return (
    <>
      <Modal
        visible={showConfirmModal}
        onOk={handleSubmit}
        onCancel={handleCancel}
        confirmLoading={submittingClass}
        okText="Add Class"
      >
        <Row gutter={8}>
          <Col span={12}>
            <p style={{ lineHeight: 0.5 }} className="text-muted">
              {selectedClass.Code}
            </p>
            <p style={{ fontSize: '20px' }}>{selectedClass.Title}</p>
          </Col>
          <Col span={12}>
            <p className="text-muted" style={{ lineHeight: 0.5 }}>
              Instructor
            </p>
            <Typography.Paragraph
              style={{ fontSize: '20px' }}
              editable={{
                tooltip: 'click to edit text',
                onChange: setCustomProfessor
              }}
            >
              {selectedClass.Instructor === ''
                ? customProfessor
                : selectedClass.Instructor}
            </Typography.Paragraph>
          </Col>
          <Col span={12}>
            <Statistic
              title="Studyflow Users in this Class"
              value={112893}
              loading
            />
          </Col>
          <Col span={12}>
            <Statistic
              title="Flows Created for this Class"
              value={112893}
              loading
            />
          </Col>
        </Row>
      </Modal>
      <Select
        showSearch
        placeholder="enter code or title"
        style={{ width: '300px' }}
        onChange={selectedItem => {
          setSelectedClass(
            JSON.parse(selectedItem.substring(selectedItem.search('%%') + 3))
          );
          setShowConfirmModal(true);
        }}
      >
        {OPTIONS.map(item => (
          <Select.Option
            extra="test"
            key={item.Code}
            label="test"
            value={`${item.Code} ${item.Title} %% ${JSON.stringify(item)}`}
          >
            {`${item.Code} ${item.Title}`}
          </Select.Option>
        ))}
      </Select>
    </>
  );
}
