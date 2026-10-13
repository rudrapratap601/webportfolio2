from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
import shutil

root=Path(__file__).resolve().parents[1]
styles={
 'name':ParagraphStyle('name',fontName='Helvetica-Bold',fontSize=23,leading=27,textColor=HexColor('#153d39'),spaceAfter=5),
 'role':ParagraphStyle('role',fontName='Helvetica-Bold',fontSize=11,leading=15,spaceAfter=7),
 'body':ParagraphStyle('body',fontName='Helvetica',fontSize=9.5,leading=13,spaceAfter=5),
 'small':ParagraphStyle('small',fontName='Helvetica',fontSize=9,leading=12,spaceAfter=4),
 'section':ParagraphStyle('section',fontName='Helvetica-Bold',fontSize=10,leading=14,textColor=HexColor('#153d39'),spaceBefore=11,spaceAfter=5),
 'heading':ParagraphStyle('heading',fontName='Helvetica-Bold',fontSize=10,leading=14,spaceBefore=4,spaceAfter=3),
}
def build(ml):
 story=[]
 def p(text,style='body'):story.append(Paragraph(text,styles[style]))
 def section(title):
  p(title,'section');story.append(HRFlowable(width='100%',thickness=.5,color=HexColor('#bdcfc9'),spaceAfter=5))
 def bullet(text): p('- '+text)
 p('RUDRAPRATAP SARMA','name')
 p('AI / MACHINE LEARNING INTERNSHIP CANDIDATE' if ml else 'DATA ANALYTICS INTERNSHIP CANDIDATE','role')
 p('Dharmanagar, Tripura, India | <link href="mailto:rudrapratapsarma549@gmail.com">rudrapratapsarma549@gmail.com</link>','small')
 p('<link href="https://github.com/rudrapratap601">GitHub: rudrapratap601</link> | <link href="https://linkedin.com/in/rudrapratap-sarma">LinkedIn: rudrapratap-sarma</link> | <link href="https://rudrapratap-sarma.vercel.app">Portfolio: rudrapratap-sarma.vercel.app</link>','small')
 section('PROFILE')
 p('BCA student building practical machine learning foundations through Python and NumPy implementations of linear regression and gradient descent. Experienced in data cleaning, exploratory analysis, and analytics applications. Seeking an AI/ML internship; currently learning AI, generative AI, and LLM concepts.' if ml else 'BCA student with hands-on experience in data extraction, cleaning, exploratory analysis, and dashboard development. Built analytics projects using Python, SQL, Power BI, Excel, and Streamlit. Seeking a Data Analytics or Business Intelligence internship.')
 section('TECHNICAL SKILLS')
 if ml:
  p('<b>Programming &amp; data:</b> Python, SQL, NumPy, Pandas, Matplotlib, Seaborn, Git, Jupyter')
  p('<b>ML foundations:</b> Linear regression; closed-form solutions; batch, stochastic, and mini-batch gradient descent; data preprocessing; MAE, MSE, RMSE, R-squared')
  p('<b>Applications:</b> Streamlit, PostgreSQL, SQLAlchemy, Plotly | <b>Currently learning:</b> AI, generative AI, LLMs')
 else:
  p('<b>Programming &amp; databases:</b> Python, SQL, PostgreSQL, MySQL')
  p('<b>Analytics &amp; BI:</b> Power BI, Excel (Pivot Tables, charts, slicers), Pandas, NumPy, data cleaning, EDA, KPI analysis, trend analysis')
  p('<b>Visualization &amp; tools:</b> Streamlit, Plotly, Matplotlib, Seaborn, SQLAlchemy, Git, Jupyter')
 section('SELECTED PROJECTS')
 if ml:
  p('<link href="https://github.com/rudrapratap601/ML-From-Scratch">Machine Learning from Scratch</link> | Python, NumPy - Ongoing','heading')
  bullet('Implemented simple and multiple linear regression with closed-form solutions and batch, stochastic, and mini-batch gradient descent.')
  bullet('Added manual regression metrics and mathematical explanations in notebooks. Built portfolio demos illustrating optimization and the effect of learning rate and batch size.')
 p('<link href="https://github.com/rudrapratap601/data-analytics-web-platform">Data Analytics Platform</link> | Python, Streamlit, PostgreSQL','heading')
 bullet('Built a multi-dataset analytics application for upload, cleaning, relationship mapping, SQL-powered analysis, and interactive dashboards.')
 bullet('Included five SQL aggregations, statistical insights, and automated data-quality reporting.')
 if not ml:
  p('<link href="https://github.com/rudrapratap601/blinkit-sales-performance-analysis">Blinkit Sales Performance Analysis</link> | Python, Power BI','heading')
  bullet('Analyzed 8,523 grocery products in a dataset representing $1.20M in sales; built a KPI dashboard for sales, average order value, and product and outlet performance.')
 p('<link href="https://github.com/rudrapratap601/trader-sentiment-analysis">Trader Performance vs Market Sentiment</link> | Python, Pandas, EDA','heading')
 bullet('Aligned trader activity with Bitcoin sentiment data; calculated PnL and win rate and compared behavior across five sentiment conditions.')
 section('EXPERIENCE &amp; TRAINING')
 p('Data Operations &amp; Analytics Intern | Jobyaari','heading')
 p('May 2026 - June 2026 | Remote','small')
 bullet('Extracted and structured 500+ job opportunities from 35+ government notification PDFs; cleaned, validated, and mapped qualifications for publishing pipelines.')
 p('Data Analytics Trainee | YBI Foundation (project-based training)','heading')
 p('September 2025 - December 2025 | Remote','small')
 bullet('Completed practical training in Python, Pandas, NumPy, and ML fundamentals; performed preprocessing and EDA and built independent analytics projects.')
 section('EDUCATION &amp; CERTIFICATIONS')
 p('<b>Bachelor of Computer Applications</b> | Manipal University Jaipur | 2025 - 2028<br/>Currently pursuing; Online &amp; Distance mode.','small')
 p('Python Programming and Pandas for Data Analysis - Kaggle<br/>Data Science and Machine Learning Internship Program; 3D &amp; 2D Data Visualization with Python - YBI Foundation','small')
 filename='Rudrapratap_Sarma_AI_ML_Resume.pdf' if ml else 'Rudrapratap_Sarma_Data_Analytics_Resume.pdf'
 target=root/'output/pdf'/filename
 SimpleDocTemplate(str(target),pagesize=(595.28,841.89),rightMargin=40,leftMargin=40,topMargin=32,bottomMargin=30,title='Rudrapratap Sarma - '+('AI/ML Resume' if ml else 'Data Analytics Resume'),author='Rudrapratap Sarma').build(story)
 shutil.copy2(target,root/'public'/filename)
 print(target)
for ml in [False,True]:build(ml)
