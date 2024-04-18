import json
import io
import smtplib
import csv
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication


def lambda_handler(event, context):
    data = event.get('Records')[0]
    json_data = data.get('body')
    
    json_data = json.loads(json_data)

    sender_email = "mail@gmail.com"
    password = "dwdwd vdwdwdqmf dwq veev"
    
    recipient_email = json_data.get('emailid')
    medicine_data = json_data.get('sports')
    subject = "CSV File from Python"

    csv_file = io.StringIO()
    fieldnames = medicine_data[0].keys()
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()
    for data in medicine_data:
        writer.writerow(data)
    csv_file.seek(0)  # Reset the file pointer to the beginning

    # Create the email message
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = recipient_email
    msg["Subject"] = subject

    # Attach the CSV file
    csv_attachment = MIMEApplication(csv_file.getvalue().encode('utf-8'), _subtype="csv", _encoder=lambda x: x)
    csv_attachment.add_header("Content-Disposition", "attachment", filename="data.csv")
    msg.attach(csv_attachment)

    html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #f2f2f2;
                padding: 20px;
            }}
            .container {{
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }}
            h1 {{
                color: #333;
                text-align: center;
            }}
            p {{
                color: #666;
                line-height: 1.5;
            }}
            .button {{
                background-color: #c1d3fe;
                color: white;
                padding: 10px 20px;
                text-decoration: none;
                display: inline-block;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }}
            .button:hover {{
                background-color: #45a049;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>CSV File from Python</h1>
            <p>Dear {recipient_email},</p>
            <p>Attached is the CSV file containing the sports data you requested.</p>
            <p>Please let me know if you have any questions or need further assistance.</p>
            <a href="http://sport-api-x22227041-alb-1586433398.eu-west-1.elb.amazonaws.com/" class="button">View More</a>
        </div>
    </body>
    </html>
    """.format(recipient_email=recipient_email)

    # Attach the HTML content to the email
    msg_html = MIMEText(html_content, 'html')
    msg.attach(msg_html)

    try:
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, password)
        server.send_message(msg)
        print("Email with CSV attachment sent successfully!")
    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        server.quit()

    return {
        'statusCode': 200,
        'body': json.dumps('Success')
    }