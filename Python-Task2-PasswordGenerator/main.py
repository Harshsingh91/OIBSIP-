import secrets
import string

chars = string.ascii_letters + string.digits + string.punctuation
length = int(input("Enter password length: "))
password = ''.join(secrets.choice(chars) for _ in range(length))
if length < 8:
    strength = "Weak"
elif length < 12:
    strength = "Medium"
else:
    strength = "Strong"

print(f"Generated Password: {password}")
print(f"Password Strength: {strength}")