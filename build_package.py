import zipfile
import os

zip_name = 'SideMarks_v5.6.zip'

# Fichiers à exclure de l'archive publique
exclude_files = {
    zip_name,
    'SideMarks_v1.0.zip',
    'SideMarks_v2.0.zip',
    'SideMarks_v3.0.zip',
    'SideMarks_v4.0.zip',
    'SideMarks_v5.0.zip',
    'SideMarks_v5.1.zip',
    'SideMarks_v5.2.zip',
    'SideMarks_v5.3.zip',
    'SideMarks_v5.4.zip',
    'SideMarks_v5.5.zip',
    'SideMarks_v5.6.zip',
    'Bookmark_Original_v1.0.zip',
    'original_family_wallpaper.jpg',
    'default_public_wallpaper.jpg',
    'extracted_pills.json',
    'extracted_dataurl_wallpaper.txt',
    'default_wallpaper_dataurl.js',
    'extract.py',
    'extract_img.py',
    'installer.html',
    'build_package.py',
    'icon-128.png',
    'screenshot_1_dashboard.png',
    'screenshot_2_features.png',
    'SideMarks_Banniere_Officielle_1280x800.jpg',
    'SideMarks_Capture_1_Accueil.jpg',
    'SideMarks_Capture_2_Sauvegarde_Onglets.jpg',
    'SideMarks_Capture_3_Fonctionnalites.jpg'
}

print("Création du package d'installation public v5.4...")

with zipfile.ZipFile(zip_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
    for root, dirs, files in os.walk('.'):
        for f in files:
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, '.')

            # Ignorer les dossiers indésirables et fichiers exclus
            if (
                any(part.startswith('.') for part in rel_path.split(os.sep)) or
                '__pycache__' in rel_path or
                'store_assets' in rel_path or
                'companion' in rel_path or
                rel_path in exclude_files or
                f in exclude_files and not rel_path.startswith('icons') or
                f.endswith('.py') or
                f.endswith('.pyc')
            ):
                continue

            # IMPORTANT : Remplacer wallpaper.jpg par default_public_wallpaper.jpg dans le zip public
            if rel_path == 'wallpaper.jpg':
                print(" -> Inclusion du fond d'écran par défaut (public) sous le nom wallpaper.jpg")
                zipf.write('default_public_wallpaper.jpg', 'wallpaper.jpg')
            else:
                print(f" -> Ajout : {rel_path}")
                zipf.write(full_path, rel_path)

size_kb = os.path.getsize(zip_name) / 1024
print(f"\n[SUCCÈS] Archive publique '{zip_name}' créée avec succès ({size_kb:.1f} Ko).")
